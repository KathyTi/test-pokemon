import axios from "axios";


class MainRequestsController {

    controller

    constructor(){
        this.controller = axios.create({
            baseURL: 'https://pokeapi.co/api/v2/pokemon/',
            headers: {
                accept: 'application/json'
            },
            limit: 20
        })
    }

    //возвращает весь список элементов без описания
    async getAll(){
        return await this.controller.get(`?limit=2000`)
    }
    //возвращает указанную страницу элементов без описания
    async getPage(page, limit){
        return await this.controller.get(`?offset=${page*limit-limit}&limit=${limit}`)
    }

    //возвращает один элемент без описания(как getPage, только один)
    async getPokemonById(id){
        return await this.controller.get(`?offset=${id-1}&limit=1`)
    }

    //возвращает описание по указанному id
    async getDetailsById(id){
        return await this.controller.get(`${id}/`)
    }

}

export default MainRequestsController;