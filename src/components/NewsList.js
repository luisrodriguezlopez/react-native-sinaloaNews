import React , { Component } from 'react';
import {FlatList , Text , View, StyleSheet } from 'react-native';
import NewsItem from './NewsItem.js';
import cheerio from 'react-native-cheerio';
import API from './../../utils/api.js';
import  { withNavigation }  from 'react-navigation';


class ListViewNews extends React.Component {
   
    constructor(props) {
        super(props)
          this.state = {
              newsList: [],
              loading : false,
            }
        this.apiCallDebate = this.apiCallDebate.bind(this)
        this.apiCallIM = this.apiCallIM.bind(this)
    }
    _keyExtractor = (item, index) => index.toString();
    
  
 
    componentDidMount() {
        this.apiCallDebate()
    } 
   
    componentWillReceiveProps(nextProps) {
        if (nextProps.type !== this.props.type) {  
            switch(nextProps.type) {
                case 0 :  this.apiCallDebate()
                    break 
                case 1 : this.apiCallIM() 
                    break
                case 2 : this.apiCallRealidad() 

                default : this.apiCallPuntualizando()
                    break
            }
        }
    }  

    apiCallDebate() {
        this.loading()
        API.getNewsDebate().then((response) =>  {
            this.endLoading()
          const $ = cheerio.load(response.data)     
          this.setState({ newsList:  $('article').map((_, article) =>  { 
            return $(article).html()
            })
          })  
         })
      }
    
      apiCallIM() {
        this.loading()
         API.getNewsIM().then((response) =>  {
            this.endLoading()
          const $ = cheerio.load(response)     
          this.setState({ newsList:  $('item').map((_, article) =>  { 
            return $(article).html()
            })
          })      
        })
      }

      apiCallRealidad() {
        this.loading()
          API.getNewsRealidad().then( (response) => {
            this.endLoading()
            const $ = cheerio.load(response)     
            this.setState({ newsList:  $('article').map((_, article) =>  { 
                return $(article).html()
                })
          })})
      }

      apiCallPuntualizando() {
        this.loading()
        API.getNewsPuntualizando().then( (response) => {
          this.endLoading()
          const $ = cheerio.load(response)     
          this.setState({ newsList:  $('article').map((_, article) =>  { 
              return $(article).html()
              })
        })})
    }

    loading() {
        if (!this.state.loading) {
            console.log('loading')
            this.setState( { loading: true }) 
         }
    }

    endLoading() {
        console.log('End loading')
        this.setState( { loading: false }) 
    }
     
    
    /*
    a[href][title]").attr("title") 
    */
    render() {
        console.log(this.state.loading)
        if (this.state.loading == true ) {
            console.log('render Loading')

                return (<Text style = {styles.loading} > 🚀🚀🚀🚀 { this.state.loading } </Text>)
        } else {
            console.log('renderList')
        return(
            <FlatList  
                data={this.state.newsList}
                keyExtractor={this._keyExtractor}
                renderItem={ ( html ) =>  <NewsItem html = { html } type = {this.props.type} ></NewsItem>  }
            />
            );
        }
    }
}

const styles = StyleSheet.create({
        loading: {
            textAlign: 'center',
            fontSize: 20,
            height: '90%'
             
        }
})
export default withNavigation(ListViewNews);
