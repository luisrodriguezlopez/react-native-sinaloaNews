import React, {Component} from 'react';
import {TextInput, Text, StyleSheet, View, TouchableOpacity, WebView , SafeAreaView} from 'react-native'
import  { withNavigation }  from 'react-navigation';



class ModalView extends React.Component {    
    constructor(props) {
    super(props)
    this.state = { text: 'https://www.debate.com.mx' };
    }
    render() {
        return(
            <SafeAreaView style={{flex:1}}>
            <View style = {styles.container} >
            
                <View style= {styles.modal}>     
                    <View style = {styles.containerButton}>
                        <TouchableOpacity style = { styles.closeBtn}  underlayColor="red" onPress = {() => this.props.navigation.goBack(null)}>
                        <Text style={styles.titleButton}>X</Text>
                        </TouchableOpacity>         
                    </View>
                    <View style={styles.containerTxtInput}>
                        <TextInput style={styles.txtInput}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                    />
                   </View>

                </View>
                <WebView source={{uri: this.state.text}} />
                <TouchableOpacity  style= {styles.addBtn}
                       onPress = {() => this.props.navigation.goBack(null)} >
                         <Text style={styles.titleButton}>Agregar pagina</Text>
                       </TouchableOpacity>

            </View>
            </SafeAreaView>
        )
    }
}

const styles =  StyleSheet.create({
    container : {
        flex:1,
        flexDirection: 'column',
        alignItems: 'stretch'

    },
    modal : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        marginTop: 40, 
    },
    titleButton : {
        color: 'red',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical : 'center',
        justifyContent: 'center',
    },
    txtInput : {
        height: 40,
        justifyContent: 'center',
        color: 'red'      
    },
    containerTxtInput : {
        flex: 10,
        marginTop: 12,
        marginLeft:20
    },
    containerButton: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        marginLeft:10 ,
       
    },
    closeBtn: {
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        width: 45,
        height : 45,
        borderRadius: 22.5,
        backgroundColor : 'white',
        shadowOffset: {
            width: 0.5,
            height: 0.5,
        },
        shadowOpacity: 0.5,
    },
    addBtn: {
        justifyContent: 'center',
        backgroundColor : 'white',
        height: 40,
    },
    webView: {
        flex:10,
        backgroundColor: 'purple'
    }
})




export default withNavigation(ModalView);
