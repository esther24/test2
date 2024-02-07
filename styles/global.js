import {StyleSheet} from 'react-native'; 


export const globalStyles = StyleSheet.create({
    container: {
      flex:1, //so that container views take availble space
      backgroundColor: ' #f1f1f1',
      paddingtop: 40,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardcontainer: {
      flex:1, //so that container views take availble space
      backgroundColor: ' #f1f1f1',
      paddingtop: 40,
      marginTop:20,
      paddingHorizontal: 20,
  
    },
    text:{
      color: 'black',
      fontSize: 18,
    },
    para : {
        marginVertical:8,
        lineHeight:20,
    },
    about:{
      color: 'black',
   
      fontSize: 18,
      alignItems: 'center',
      justifyContent: 'center',
    },
    item:{
      marginTop:24,
      padding:30,
      backgroundColor:'pink',
      fontSize:24,
      color: 'black',
    }
    });