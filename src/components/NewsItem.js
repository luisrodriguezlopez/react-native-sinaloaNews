import React from 'react';
import {StyleSheet,Text, View, Image, TouchableOpacity} from 'react-native';
import cheerio from 'react-native-cheerio';
import  { withNavigation }  from 'react-navigation';

class NewsItem extends React.Component {
    constructor(props) {
        super(props);

        this.$ = cheerio.load(this.props.html.item)   
        this.onPress = this.onPress.bind(this)
    }

    render() {
       return (   
        <TouchableOpacity
        style={styles.button}
        onPress={this.onPress} >        
            <View style = {styles.container} > 
            <Image
                style={ styles.imageItem}
                source={{uri: 'https://www.debate.com.mx'.concat(this.$('img[src]').attr('src')) }}
            />
                <Text  style = { styles.title} > {this.$('a[href][title]').attr("title") } </Text>
            </View>
         </TouchableOpacity>

       )
    }

    onPress = () => {
       this.props.navigation.navigate('Detail', {
        otherParam: 'https://www.debate.com.mx'.concat(this.$('a[href]').attr("href")),
      });
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
  export default withNavigation(NewsItem);
