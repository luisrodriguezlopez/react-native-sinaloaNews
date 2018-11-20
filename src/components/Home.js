import React, {Component} from 'react';
import { StyleSheet,SafeAreaView, Text, View} from 'react-native';
import ListViewNews  from './NewsList.js';

import  { withNavigation }  from 'react-navigation';
import SectionFilterList from './SectionFilterList';

class Home extends React.Component {
  constructor(props){
    super(props) 
    this.state = {
      type : 0,
    }
    this.eventCategory = this.eventCategory.bind(this)
   
  }


  eventCategory = (item) =>  { 
    console.log('change',item)

    this.setState( {
        type : item.type
    })
  }

  render() {
    console.log('render')
    return (
      <SafeAreaView style={{flex: 1}}>
          <SectionFilterList changeCategory = {  this.eventCategory}/>
          <ListViewNews type =  {this.state.type} /> 
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
