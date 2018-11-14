import React , { Component } from 'react';
import {FlatList , Text , View } from 'react-native';
import NewsItem from './NewsItem.js';
import cheerio from 'react-native-cheerio';


class ListViewNews extends React.Component {
    constructor(props) {
        super(props);

    }
    _keyExtractor = (item, index) => index.toString();

    
    /*
    a[href][title]").attr("title") 
    */
    render() {
        console.log('newList',this.props.dataSource)

        return(
            <FlatList  
                data={this.props.dataSource}
                keyExtractor={this._keyExtractor}
                renderItem={ ( html ) =>  <NewsItem title = { html } ></NewsItem>  }
            />
        );
    }



}

export default ListViewNews;