

const axios = require('axios');

const BASE_API = 'https://www.debate.com.mx/ajax/get_section_news.html?viewmore=/ajax/get_section_news.html&page=1&size=7&section=policiacas'

class Api {
    async getNews() {
        return new Promise((resolve , rejected) => {
        axios.get(BASE_API) 
        .then((response) => {
            resolve(response)
        }).catch((error) => {
            console.log('ups');
        })
        }) 
    }
}

export default new Api();