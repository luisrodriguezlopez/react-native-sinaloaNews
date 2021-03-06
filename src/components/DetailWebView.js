import React, {Component} from 'react';
import {WebView} from 'react-native';
import  { withNavigation }  from 'react-navigation';
class DetailWebView extends React.Component {
    constructor(props){
        super(props)

    }
    render() {
        const { navigation } = this.props;
        console.log('navigationData' , this.props.navigation)

        console.log('link' , navigation.getParam('otherParam', ''))
        const link = navigation.getParam('otherParam', 'some default value');
        return(
            <WebView
                source={{uri: link}}
                style={{marginTop: 20}}
             /> 
        )
    }
}
export default withNavigation(DetailWebView)