import React from 'react';
import { FlatList , Text , StyleSheet , View} from 'react-native';


class SectionFilterList extends React.Component {
    constructor(props){
        super(props)
        this.categories = [ { title: "Debate"},{ title : "IMNoticias"} ]

    }

    render() {
        console.log(this.categories)
        return (
            <FlatList style = {styles.container}
                data = {this.categories}
                keyExtractor = {(item) => { return item.title }}
                horizontal = {true}
                renderItem={ ( {item} )  =>  
                <View style = {styles.itemCategory}>
                    <Text style = { styles.textCategory}> {item.title} </Text>  
                </View>
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
        marginTop : 10 
    },
    itemCategory : {
        backgroundColor : 'red' ,
        marginLeft : 10, 
        padding : 8,
        borderRadius: 10,
    }

})


export default SectionFilterList