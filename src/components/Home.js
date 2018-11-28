import React, {Component} from 'react';
import { StyleSheet,SafeAreaView, Text, View, Button} from 'react-native';
import ListViewNews  from './NewsList.js';
import ModalView from './ModalView';
import  { withNavigation }  from 'react-navigation';
import SectionFilterList from './SectionFilterList';

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button
          onPress={() =>   navigation.navigate('ModalView') }
          title="+"
          color="red"
        />
      )
    };
  }


     
  constructor(props){
    super(props) 
    this.state = {
      type : 0,
      categories : [],
      modalVisible : false,
      
    }
    this.eventCategory = this.eventCategory.bind(this)
   
  }
  componentDidMount() {
    this.props.navigation.setParams({ setModalVisible: this._setModalVisible });
  }

 
  _setModalVisible = () => {
    console.log('modal')
    this.setState({modalVisible: true});
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
