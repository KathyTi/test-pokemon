<template>
  <div class="main-view" @click="clk">
    <PokemonTable id="table"
            :data="list.data"
            :limit="limit"
            :text="searchText"
            :currentPage="parseInt(page)"
            :isDownloaded="isDownloaded"
            :isSearch="isSearch"
            @searchAccept="search"
            @stopSearch="stopSearch"
            @itemSelected="itemSelected"
            @changePage="changePage">
    </PokemonTable>
    <PokemonInfo v-if="isModal" :item="currentItem" @closed="isModal = false"></PokemonInfo>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import PokemonTable from './PokemonTable';
import PokemonInfo from './PokemonInfo';
import MainRequestsController from "@/libs/controllers/MainRequestsController";

@Options({
  components: {PokemonTable,PokemonInfo},
  props: {},
  emits: [],
  watch: {
    //при каждом изменении стейта будем записывать изменения в localStorage
    page(newState){ localStorage.setItem("page", newState) },
    rememberedPage(newState){ localStorage.setItem("rememberedPage", newState) },
    isSearch(newState){ localStorage.setItem("isSearch", newState) },
    isModal(newState){ localStorage.setItem("isModal", newState) },
    searchText(newState){ localStorage.setItem("searchText", newState) },
    currentItemId(newState){ localStorage.setItem("currentItemId", newState) },
  },
})
export default class MainView extends Vue{

  //контроллер загрузки данных
  controller = new MainRequestsController();

  //вспомогательные объекты
  list = {}
  searchList = {}
  limit = 20
  isDownloaded = false

  //группа состояний приложения
  page = 0
  rememberedPage = 0
  isSearch = false
  isModal = false
  currentItem = null
  currentItemId = 0
  searchText = ""


  async mounted(){

    //восстановление состояний из localStorage
    this.page = localStorage.getItem("page") === null ? 1 : parseInt(localStorage.getItem("page"))
    this.rememberedPage = localStorage.getItem("rememberedPage") === null ? 0 : parseInt(localStorage.getItem("rememberedPage"))
    this.currentItemId = parseInt(localStorage.getItem("currentItemId")) >= 0 ? parseInt(localStorage.getItem("currentItemId")) : -1
    this.isSearch = localStorage.getItem("isSearch") !== null && localStorage.getItem("isSearch") !== 'false'
    
    //если было открыто окно подробностей
    if((localStorage.getItem("isModal") !== null && localStorage.getItem("isModal") !== 'false') && this.currentItemId !== -1){
      //получим текущий открытый элемент
      this.currentItem = await this.controller.getPokemonById(this.currentItemId)
      //и его подробности
      let details = await this.controller.getDetailsById(this.currentItemId)
      this.currentItem.data.results.details = details.data
      this.currentItem = this.currentItem.data.results
      this.isModal = localStorage.getItem("isModal") !== null && localStorage.getItem("isModal") !== 'false'
    }
    //иначе просто запишем false в стейт
    else this.isModal = localStorage.getItem("isModal") !== null && localStorage.getItem("isModal") !== 'false'

    this.searchText = localStorage.getItem("searchText")

    //если был открыт поиск
    if(this.searchText && this.isSearch){
      //получим лист найденных
      await this.search(this.searchText)
    }
    //иначе
    else{
      this.searchText = ''
      //если стейт текущей страницы не сохранен
      if(!this.page)
        //установим первую
        await this.changePage(1)
      else
        //иначе установим сохраненный стейт
        await this.changePage(this.page)
    }

  }

  async changePage(page){
    this.isDownloaded = false
    this.page = page

    //если это не поисковый запрос
    if(!this.isSearch){
      //получим страницу
      this.list = await this.controller.getPage(parseInt(page), this.limit)
      
      //получим подробности для каждого элемента
      for(let item of this.list.data.results){
        let details = await this.controller.getDetailsById(item.name)
        item.details = details.data
      }
    }
    //иначе, если поисковый
    else{
      //то присвоим главному листу...
      let startPos = this.limit * this.page - this.limit//высчитаем оффсет на основании выбранной страницы
      //...параметры поискового
      this.list.data.count = this.searchList.data.count
      //...параметры поискового, но постранично
      this.list.data.results = this.searchList.data.results.slice(startPos, startPos+this.limit)
    }

    this.isDownloaded = true
  }

  async search(text){
    this.isDownloaded = false
    this.searchText = text
    this.isSearch = true
    this.searchList = await this.controller.getAll()

    //манипуляции с номером страницы для восстановления текущей когда поиск будет завершен
    if(this.rememberedPage === 0){
      this.rememberedPage = this.page
      if(this.searchList.data.results.length > 0){
        this.page = 1
      }
    }

    //получим отфильтрованные элементы согласно поисковому запросу
    this.searchList.data.results = this.searchList.data.results.filter(item => {
      return item.name.includes(text)
    })

    //запишем в общее количество элементов количество отфильтрованных
    this.searchList.data.count = this.searchList.data.results.length

    //получение подробностей для каждого элемента
    for(let item of this.searchList.data.results){
      let details = await this.controller.getDetailsById(item.name)
      item.details = details.data
    }

    let copy = JSON.stringify(this.searchList);
    this.list = JSON.parse(copy)

    //запустим смену страницы, а там уже предусмотрена проверка на то, поиск это или нет
    await this.changePage(this.page)

    this.isDownloaded = true

  }

  //функция запускающаяся при очистке поискового поля, закрывающая поиск, открывающая изначальный список
  async stopSearch(){
    //естесственно если поиск активен :)
    if(this.isSearch){
      this.isSearch = false
      this.searchText = ""
      let page = this.rememberedPage === 0 ? 1 : this.rememberedPage
      await this.changePage(page)
      this.rememberedPage = 0
    }
  }

  async itemSelected(item){
    //назначаем текущий выбранный элемент, записываем в стейт с его id, и открываем модалку
    this.currentItem = item
    this.currentItemId = item.details.id
    this.isModal = true
  }

}
</script>

<style scoped lang="scss">

  .main-view{
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #eee;
    justify-content: center;
    align-items: center;
    padding: 32px;
    box-sizing: border-box;

  }

  @media (max-width: 530px){
    .main-view{
      padding: 0;
    }
  }

</style>