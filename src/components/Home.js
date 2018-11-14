import React, {Component} from 'react';
import { StyleSheet,SafeAreaView, Text, View} from 'react-native';
import ListViewNews  from './NewsList.js';
import API from './../../utils/api.js';
import cheerio from 'react-native-cheerio';
import  { withNavigation }  from 'react-navigation';

class Home extends React.Component {
  constructor(props){
    super(props) 

    this.state = {
      newsList: []
    }
  }
 
  componentDidMount() {
    const fruits = [];

     API.getNews().then((response) =>  {
      const $ = cheerio.load(response.data)     
      this.setState({ newsList:  $('article').map((_, article) =>  { 
        return $(article).html()
        })
      })  
     })

     
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <WebViewDetail style= {styles.webView}></WebViewDetail> */}
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

export default Home;
