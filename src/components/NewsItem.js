import React from 'react';
import {StyleSheet,Text, View, Image, TouchableOpacity} from 'react-native';
import cheerio from 'react-native-cheerio';

class NewsItem extends React.Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this)
    }


    onPress = () => {
        const {navigate} = this.props
         console.log('to detail')
        console.log(navigate)
       navigate.navigate('Detail')
      }


    render() {
        const $ = cheerio.load(this.props.title.item)   
        console.log('newItemImage','https://www.debate.com.mx$'.concat($('img[src]').attr('src')) )

       return (   
        // <TouchableOpacity
        // style={styles.button}
        // onPress={this.onPress} >        
            <View style = {styles.container} > 
        
            <Image
                style={ styles.imageItem}
                source={{uri: 'https://www.debate.com.mx'.concat($('img[src]').attr('src')) }}
            />
                <Text  style = { styles.title} > { $('a[href][title]').attr("title") } </Text>
            </View>
        // </TouchableOpacity>

       )
    }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      marginTop: 10,
      marginLeft: 16,
      marginRight: 16,
      height: 250,
      shadowColor: 'black',
      shadowOffset: {
          width: 0.5,
          height: 0.5,
      },
      shadowOpacity: 0.5,
      borderRadius: 10,

    },
    title: {
        flex:1,
        borderRadius: 10,
        fontFamily: 'Cochin',
        fontSize: 20,
        width: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        alignContent: 'center',
        color: 'white',
        padding: 5,
         
    },
    imageItem : {
        flexGrow:1,
        height: '100%'  ,
        width : '100%',
    }
  });
export default NewsItem 
