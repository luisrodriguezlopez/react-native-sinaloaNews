import React, {Component} from 'react';
import { StyleSheet,SafeAreaView, Text, View, Button} from 'react-native';
import ListViewNews  from './NewsList.js';
import ModalView from './ModalView';
import  { withNavigation }  from 'react-navigation';
import SectionFilterList from './SectionFilterList';

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Button style={styles.title}
          onPress={() => console.log('holi')}
          title="SinaloaNews"
          color="red"
        />
      ),
         headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Button
          onPress={() => navigation.navigate('ModalView' , { otherParam : navigation.getParam('addPage') }) }
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
      categories : [ { title: "Debate" , type : 0 },{ title : "IMNoticias" , type : 1} , { title : "RealidadEnRed" , type: 2} ,{ title : 'Puntualizando' , type: 3}],
      modalVisible : false,
      
    }
    this.eventCategory = this.eventCategory.bind(this)
   
  }

  componentDidMount() {
    this.props.navigation.setParams({ addPage: this.addPage });
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

  addPage = (item) => {
    console.log('update', item)
    var oldArray =  this.state.categories
    console.log('oldArray', oldArray)

    oldArray.push({title: item,type: oldArray.length })
    console.log('newArray', oldArray)

    this.setState({
      categories: oldArray 
    })
  
  }

  render() {
    console.log('render')
    return (
      <SafeAreaView style={{flex: 1}}>
          <SectionFilterList  changeCategory = {  this.eventCategory} categories = {this.state.categories}/>
          <ListViewNews type =  {this.state.type}  categories={this.state.categories} /> 
      </SafeAreaView>
    );
  }
}

title  = () => {
  return (<Text syle={styles.title}>SinalonaNews</Text>)
} 

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
    },
    title: {
      fontFamily: 'AvenirNext-Heavy',
      fontSize: 10,
      color: 'red'

    }
  });



  export default withNavigation(Home);
