import React , { Component } from 'react';
import {FlatList , Text , View } from 'react-native';
import NewsItem from './NewsItem.js';
import cheerio from 'react-native-cheerio';
import  { withNavigation }  from 'react-navigation';


class ListViewNews extends React.Component {
    constructor(props) {
        super(props);

    }
    _keyExtractor = (item, index) => index.toString();

    
    /*
    a[href][title]").attr("title") 
    */
    render() {

        return(
            <FlatList  
                data={this.props.dataSource}
                keyExtractor={this._keyExtractor}
                renderItem={ ( html ) =>  <NewsItem html = { html } type = {0} ></NewsItem>  }
            />
        );
    }



}

export default withNavigation(ListViewNews);
