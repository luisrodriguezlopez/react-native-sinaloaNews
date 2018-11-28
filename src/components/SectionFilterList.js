import React from 'react';
import { FlatList , Text , StyleSheet , View , TouchableOpacity } from 'react-native';


class SectionFilterList extends React.Component {
    constructor(props){
        super(props)
        this.categories = [ { title: "Debate" , type : 0 },{ title : "IMNoticias" , type : 1} , { title : "RealidadEnRed" , type: 2} ,{ title : 'Puntualizando' , type: 3}   ]

    }

    render() {
        return (
            <FlatList style = {styles.container}
                data = {this.categories}
                keyExtractor = {(item) => { return item.title }}
                horizontal = {true}
                renderItem={ ( {item} )  =>  
                <TouchableOpacity
                  style={styles.button}
                  key = {item.title}
                  onPress = { () => {this.props.changeCategory(item)}}  >   
                     <View style = {styles.itemCategory}>
                         <Text style = { styles.textCategory}> {item.title} </Text>  
                     </View>
                </TouchableOpacity>
                }
            />
        );
    }


}

const styles = StyleSheet.create({
    textCategory : {
        color : 'white'
    },
    container : {
        marginBottom : 10,
        marginTop :  0,
        height : 10,
        height: 35,       
         
    },
    itemCategory : {
        backgroundColor : 'red' ,
        marginLeft : 10,
        marginTop : 14, 
        padding : 8,
        borderRadius: 10,
        height: 35,
        alignContent: 'center',
        justifyContent: 'center',
    }

})


export default SectionFilterList