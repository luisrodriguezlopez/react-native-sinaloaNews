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
              categories: this.props.categories,
            }
        this.apiCallDebate = this.apiCallDebate.bind(this)
        this.apiCallIM = this.apiCallIM.bind(this)
        this.genericCall = this.genericCall.bind(this)
    }
    _keyExtractor = (item, index) => index.toString();
    
  
 
    componentDidMount() {
        console.log('componentDidMount')
        this.apiCallDebate()
    } 
   
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', [ nextProps, this.props ])

        if (nextProps.type !== this.props.type) {  
            switch(nextProps.type) {
                case 0 :  this.apiCallDebate()
                    break 
                case 1 : this.apiCallIM() 
                    break
                case 2 : this.apiCallRealidad() 
                case 3: this.apiCallPuntualizando()
                default : this.genericCall(nextProps.categories[nextProps.type].title)
                    break
            }
        }
    }  

    genericCall(link) {
        console.log('link' , link)
        this.loading()
        API.getNewsBy(link).then((response) => {
            this.endLoading()
            const $ = cheerio.load(response)     
            if  ($('article').count > 0) {
                this.setState({ newsList:  $('article').map((_, article) =>  {
                    console.log('generic article', article)
                    return $(article).html()
                    })
                  })  
            } else if ($('section').count > 0) {
                console.log('generic section')
                this.setState({ newsList:  $('section').map((_, section) =>  { 
                    return $(section).html()
                    })
                  })  
            }else {
                console.log('hmtl' ,response)
                this.setState({ newsList:  []
                  })  
            }
        })
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
        if (this.state.loading == true ) {
            console.log('render Loading')

                return (<Text style = {styles.loading} > 🚀🚀🚀🚀 { this.state.loading } </Text>)
        } else {
            console.log('renderList')
            console.log('itemState',this.props)
        return(
            <FlatList  style = {styles.listView}
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
        },
        listView: {
            height: '88%'
        }
})
export default withNavigation(ListViewNews);
