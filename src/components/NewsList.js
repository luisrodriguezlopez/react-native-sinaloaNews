import React , { Component } from 'react';
import {FlatList , Text , View } from 'react-native';
import NewsItem from './NewsItem.js';
import cheerio from 'react-native-cheerio';
import API from './../../utils/api.js';
import  { withNavigation }  from 'react-navigation';


class ListViewNews extends React.Component {
    constructor(props) {
        super(props)
          this.state = {
              newsList: [],
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
                default : this.apiCallRealidad()
            }
        }
    
    }
  

    apiCallDebate() {
        API.getNewsDebate().then((response) =>  {
          const $ = cheerio.load(response.data)     
          this.setState({ newsList:  $('article').map((_, article) =>  { 
            return $(article).html()
            })
          })  
         })
      }
    
      apiCallIM() {
         API.getNewsIM().then((response) =>  {
          const $ = cheerio.load(response)     
          this.setState({ newsList:  $('item').map((_, article) =>  { 
            return $(article).html()
            })
          })      
        })
      }

      apiCallRealidad() {
          API.getNewsRealidad().then( (response) => {
            const $ = cheerio.load(response)     
            this.setState({ newsList:  $('article').map((_, article) =>  { 
                console.log('article' , $(article).html())
                return $(article).html()
                })
          })})
      }
    
    /*
    a[href][title]").attr("title") 
    */
    render() {
        return(
            <FlatList  
                data={this.state.newsList}
                keyExtractor={this._keyExtractor}
                renderItem={ ( html ) =>  <NewsItem html = { html } type = {this.props.type} ></NewsItem>  }
            />
        );
    }



}

export default withNavigation(ListViewNews);
