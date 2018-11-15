import React from 'react';
import { FlatList , Text , StyleSheet , View , TouchableOpacity } from 'react-native';


class SectionFilterList extends React.Component {
    constructor(props){
        super(props)
        this.categories = [ { title: "Debate"},{ title : "IMNoticias"} ]

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
                onPress={this.props.changeCategory(item.title)} >   
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
        marginTop : 10 ,
        height : 40,
    },
    itemCategory : {
        backgroundColor : 'red' ,
        marginLeft : 10, 
        padding : 8,
        borderRadius: 10,
        height: 35,
    }

})


export default SectionFilterList