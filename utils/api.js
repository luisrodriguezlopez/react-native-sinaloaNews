

const axios = require('axios');
const parser = require('react-native-rss-parser');

// FALTA dejar la estructura base y recibir por parametros la sección y el paginado
const BASE_API_DEBATE = 'https://www.debate.com.mx/ajax/get_section_news.html?viewmore=/ajax/get_section_news.html&page=1&size=7&section=policiacas'
const BASE_API_IM = 'http://imnoticias.com.mx/feed/'

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
            // axios.get(BASE_API_IM)
            // .then((resolve) => {
            //     resolve(response) 
            // }).catch( (error) => {
            //     console.log(':/ im', error);
            // })
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {    // This and `open` could be flip-flopped
                if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    resolve(xhr.responseText)
                }              
            }


            
            xhr.open("GET", BASE_API_IM, true);
            xhr.send("data=data");
            
        })
    }
}

export default new Api();