<template>
  <div class="pokemon-table">
      <div class="header">
          {{!isSearch ? "Page: "+currentPage : (isDownloaded ? "Found: "+data.count : 'Searching...')}}
          <div class="search-field-wrapper" v-if="isDownloaded">
              <InputFieldComponent
                      :text="text"
                      @changed="searchTextChanged"
                      @submit="searchAccept"
                      placeholder="Search">
              </InputFieldComponent>
              <ButtonComponent
                      :isActive="searchText.length > 0"
                      @clicked="searchAccept">Search</ButtonComponent>
          </div>
      </div>
      <div class="list-area" id="list-area" v-show="isDownloaded">
          <div class="scroll-wrapper" id="scroll-wrapper" ref="scroll_wrapper_ref">
              <PokemonListItem v-for="item in data?.results"
                               :key="item.id"
                               @selected="itemSelected"
                               :item="item"></PokemonListItem>
          </div>
          <ScrollbarComponent v-if="scroll_wrapper_ref" :scroll-element="scroll_wrapper_ref"></ScrollbarComponent>
      </div>
      <div class="preloader" v-show="!isDownloaded">
          <div class="loading">
              <span></span>
              <span></span>
              <span></span>
          </div>
      </div>
      <div class="footer" v-show="isDownloaded">
          <Paginator
                  :count="pagesCount"
                  :limit="limit"
                  :currentPage="currentPage"
                  @accept="accept"
                  @onClick="changePage"></Paginator>
      </div>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import Paginator from './Paginator';
import PokemonListItem from './PokemonListItem';
import ScrollbarComponent from './ScrollbarComponent';
import InputFieldComponent from './InputFieldComponent';
import ButtonComponent from './ButtonComponent';

@Options({
  components: {
      Paginator,
      PokemonListItem,
      ScrollbarComponent,
      InputFieldComponent,
      ButtonComponent,
  },
  props: {
      data: {type: Object, default: {}},
      limit: {type: Number, default: 0},
      currentPage: {type: Number, default: 0},
      isDownloaded: {type: Boolean, default: false},
      isSearch: {type: Boolean, default: false},
      text: {type: String, default: ""},
  },
  emits: ['changePage', 'searchAccept', 'stopSearch', 'itemSelected'],
  watch: {},
})
export default class PokemonTable extends Vue{

    scroll_wrapper_ref = null
    count = 0
    searchText = ''
    previousQuery = ''

    get pagesCount(){
        //расчитаем количество страниц
        if(this.$props.data) {
            this.count = Math.ceil(this.$props.data.count / this.$props.limit)
        }
        return this.count
    }

    changePage(page){
        //сообщим о смене страницы и проскроллим наверх
        if(page !== '...'){
            if(page === '<'){
                this.$emit('changePage', this.$props.currentPage-1)
            }
            else if(page === '>'){
                this.$emit('changePage', this.$props.currentPage+1)
            }
            else{
                this.$emit('changePage', page)
            }
            this.$refs.scroll_wrapper_ref.scrollTo({
                top: 0,
                behavior: "auto"
            })
        }
    }

    accept(page){
        this.changePage(page)
    }

    searchTextChanged(text){
        //отследим что длина текста поиска === 0 и сообщим об отмене поиска
        if(this.searchText.length > 0 && text.length === 0){
            this.$emit('stopSearch')
            this.previousQuery = ''
            this.$refs.scroll_wrapper_ref.scrollTo({
                top: 0,
                behavior: "auto"
            })
        }
        this.searchText = text
    }

    searchAccept(){
        //если поисковый запрос не совпадает с последним, то попросим выполнить поиск
        if(this.searchText !== this.previousQuery){
            this.$refs.scroll_wrapper_ref.scrollTo({
                top: 0,
                behavior: "auto"
            })
            this.$emit('searchAccept', this.searchText)
            this.previousQuery = this.searchText
        }
    }

    itemSelected(item){
        this.$emit('itemSelected', item)
    }

}
</script>

<style scoped lang="scss">

  .pokemon-table{
      display: flex;
      width: 100%;
      max-width: 530px;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 8px;
      box-shadow: 4px 4px 24px rgba(0,0,0,0.24);

      .header{
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.24);
          padding: 8px;
          box-sizing: border-box;

          .search-field-wrapper{
              display: flex;
              width: 60%;
              margin-top: 4px;
          }

      }

      .list-area{
          height: 100%;
          width: 100%;
          flex: 1;
          overflow: hidden;
          position: relative;
          justify-content: center;
          align-items: center;

          .scroll-wrapper{
              height: 100%;
              width: 100%;
              flex-direction: column;
              overflow-y: auto;
              display: block;
              position: static;

          }

      }

      .preloader{
          display: flex;
          height: 100%;
          width: 100%;
          flex: 1;
          justify-content: center;
          align-items: center;

          .loading{
              width: 80px;
              height: 25px;
              justify-content: space-between;
              align-items: center;
              display: flex;

              span{
                  width: 20px;
                  height: 20px;
                  background-color: mediumseagreen;
                  border-radius: 50%;
                  animation-name: dots;
                  animation-duration: 1s;
                  animation-iteration-count: infinite;
                  animation-timing-function: ease-in-out;
              }

          }

          .loading span:nth-child(2){
              animation-delay: .3s;
          }
          .loading span:nth-child(3){
              animation-delay: .6s;
          }

          @keyframes dots {
              50%{
                  opacity: .2;

              }
          }

      }

      .footer{
          display: flex;
          width: 100%;
          height: 64px;
          justify-content: center;
          align-items: center;
          padding: 0 16px;
          box-sizing: border-box;
          box-shadow: 0 -4px 16px rgba(0,0,0,0.24);
      }

      @media (max-width: 530px){
          border-radius: 0;
      }

  }

</style>