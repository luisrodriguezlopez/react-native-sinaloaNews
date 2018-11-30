/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button} from 'react-native';
import { createStackNavigator} from 'react-navigation'
import DetailWebView from './src/components/DetailWebView.js';
import Home from './src/components/Home.js'
import ModalView from './src/components/ModalView.js'

 class App extends React.Component {
  render() {
    return (
    <RootStack/>
    )
  }
}
export default App;

 const MainStack = createStackNavigator({
  Home: {
    screen : Home, 
  }, Detail: {
    screen :DetailWebView 
  }
  })



const RootStack = createStackNavigator({
  Home : {
    screen: MainStack
  },
  ModalView: {screen: ModalView ,
    navigationOptions: ({ navigation }) => ({
      headerTitle: '',
      headerLeft: <Button
        onPress={() => {
          navigation.goBack(null);
        }}
      />,
    }),
  } ,
}, {
  mode: 'modal', // Remember to set the root navigator to display modally.
  headerMode: 'none', 
})


