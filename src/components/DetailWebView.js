import React, {Component} from 'react';
import {WebView} from 'react-native';
import {withNavigation} from 'react-navigation'
class DetailWebView extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <WebView
                source={{uri: 'https://github.com/facebook/react-native'}}
                style={{marginTop: 20}}
             /> 
        )
    }
}
export default withNavigation(DetailWebView)