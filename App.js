/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator} from 'react-navigation'
import DetailWebView from './src/components/DetailWebView.js';
import Home from './src/components/Home.js'


 class App extends React.Component {
  render() {
    return (
    <Home/>
    )
  }
}
export default App;

 const AppNavitagation = createStackNavigator({
  Home: {
    screen : Home
}, 
  Detail: {
    screen :DetailWebView
  }
})



