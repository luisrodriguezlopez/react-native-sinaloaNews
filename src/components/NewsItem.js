import React from 'react';
import {StyleSheet,Text, View, Image, TouchableOpacity} from 'react-native';
import cheerio from 'react-native-cheerio';
import  { withNavigation }  from 'react-navigation';

class NewsItem extends React.Component {
    constructor(props) {
        super(props);        
        this.onPress = this.onPress.bind(this)
    }

    render() {
        this.$ = cheerio.load(this.props.html.item ,{  
            normalizeWhitespace: true,
              xmlMode: true
          }); 
        if (this.props.type == 0 )  {
         return (this.loadDebateItem())
        }else if (this.props.type == 1) { 
          return (this.loadImItem())
        }else {
            return (this.loadRealidad() )
        }
    }


    componentWillReceiveProps(nextProps) {
      
    }


    onPress = () => {
        switch (this.props.type) {
            case 0 :  
                     this.props.navigation.navigate('Detail', {
                     otherParam: 'https://www.debate.com.mx'.concat(this.$('a[href]').attr("href")) , })
                     break
        
             case 1 :   this.props.navigation.navigate('Detail', {
                        otherParam: ''.concat(this.$('a[href]').attr("href")),
                        
             });
                     break
             default :
             this.props.navigation.navigate('Detail', {
                      otherParam: ''.concat(this.$('a[href]').attr("href"))})
                       break
           }
      }

      loadDebateItem  = () => {
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
        </TouchableOpacity> )
      }


      loadImItem  = () => {

        return (
        <TouchableOpacity
        style={styles.button}
        onPress={this.onPress} >        
            <View style = {styles.container} > 
            <Image
                style={ styles.imageItem}
                source={{uri: this.$('img[src]').attr('src') }}
            />
                <Text  style = { styles.title} > {this.$('title').text()}</Text>
            </View>
        </TouchableOpacity> )
      }

      loadRealidad  = () => {
        return (
      <TouchableOpacity
      style={styles.button}
      onPress={this.onPress} >        
          <View style = {styles.container} > 
          <Image
              style={ styles.imageItem}
              source={{uri: this.$('img[src]').attr('src') }}
          />
              <Text  style = { styles.title} > {this.$('a[href][title]').attr("title")}</Text>
          </View>
      </TouchableOpacity> )
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
