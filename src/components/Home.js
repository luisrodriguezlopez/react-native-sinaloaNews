import React, {Component} from 'react';
import { StyleSheet,SafeAreaView, Text, View} from 'react-native';
import ListViewNews  from './NewsList.js';
import API from './../../utils/api.js';
import cheerio from 'react-native-cheerio';
import  { withNavigation }  from 'react-navigation';
import SectionFilterList from './SectionFilterList';

class Home extends React.Component {
  constructor(props){
    super(props) 

    this.state = {
      newsList: [],
      type : 0,
    }
  }
 
  componentDidMount() {

     API.getNewsDebate().then((response) =>  {
      const $ = cheerio.load(response.data)     
      this.setState({ newsList:  $('article').map((_, article) =>  { 
        return $(article).html()
        })
      })  
     })

    //  API.getNewsIM().then((response) =>  {
    //   const $ = cheerio.load(response)     
    //   this.setState({ newsList:  $('item').map((_, article) =>  { 
    //     return $(article).html()
    //     })
    //   })      
    // })

     
  }

  eventCategory(item)  {
    console.log('change' , item)
    setState = ( {
        type : item
    })
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
          <SectionFilterList changeCategory ={ this.eventCategory.bind(this)}/>
          <ListViewNews  dataSource = {this.state.newsList ? this.state.newsList : [] } /> 
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
    },
    webView: {
      height: '100%',
      width: '100%',
    }
  });

  export default withNavigation(Home);
