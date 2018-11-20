

const axios = require('axios');
const parser = require('react-native-rss-parser');
const BASE_API_DEBATE = 'https://www.debate.com.mx/ajax/get_section_news.html?viewmore=/ajax/get_section_news.html&page=1&size=7&section=policiacas'
const BASE_API_IM = 'http://imnoticias.com.mx/feed/'
const BASE_API_REALIDAD = 'http://realidadenred.com/'
const BASE_API_PUNTUALIZANDO = 'http://www.puntualizando.com/category/noticias/'

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
        return new Promise((resolve , rejected) => {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {    // This and `open` could be flip-flopped
                if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    resolve(xhr.responseText)
                }              
            }   
            xhr.open("GET", BASE_API_IM, true);
            xhr.send("data=data");
            
        }).catch( (error) => {
            console.log(error)
            rejected(error)
        })
    }

    async getNewsRealidad() {
        return new Promise( (resolve,rejected) => {
            axios(BASE_API_REALIDAD)
            .then( (response) => {
                console.log('html' , response.data)
                resolve(response.data)
            })          
            })
    }


    async getNewsPuntualizando() {
        return new Promise ( ( resolve , rejected ) => {
            axios(BASE_API_PUNTUALIZANDO)
            .then( (response) => {
                console.log('html' , response.data)
                resolve(response.data)
            })          
            })
    }
}

export default new Api();