

const axios = require('axios');
const parser = require('react-native-rss-parser');
const BASE_API_DEBATE = 'https://www.debate.com.mx/ajax/get_section_news.html?viewmore=/ajax/get_section_news.html&page=1&size=7&section=policiacas'
const BASE_API_IM = 'http://imnoticias.com.mx/feed/'
const BASE_API_REALIDAD = 'http://realidadenred.com/'
const BASE_API_PUNTUALIZANDO = 'http://www.puntualizando.com'

class Api {
    async getNewsDebate() {
        return new Promise((resolve , rejected) => {
        axios.get(BASE_API_DEBATE) 
        .then((response) => {
            resolve(response)
        }).catch((error) => {
            console.log('ups');
        })
        }) 
    }

    async getNewsIM() {
        return new Promise( (resolve,rejected) => {
            axios(BASE_API_IM)
            .then( (response) => {
                resolve(response.data)
            })          
        })
    }

    async getNewsRealidad() {
        return new Promise( (resolve,rejected) => {
            axios(BASE_API_REALIDAD)
            .then( (response) => {
                resolve(response.data)
            })          
        })
    }


    async getNewsPuntualizando() {
        return new Promise ( ( resolve , rejected ) => {
            axios(BASE_API_PUNTUALIZANDO)
            .then( (response) => {
                resolve(response.data)
            })          
       })
    }

    async getNewsBy(url) {
        return new Promise ( ( resolve , rejected ) => {
            axios(url)
            .then( (response) => {
                resolve(response.data)
            }).catch((error) => {
                console.log('ups');
            })         
       })
    }
}

export default new Api();