import {StyleSheet} from 'react-native'; 


export const globalStyles = StyleSheet.create({
    container: {
      flex:1, //so that container views take availble space
      backgroundColor: ' #f1f1f1',
      paddingBottom: 20,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    aboutcontainer: {
      flex:1, //so that container views take availble space
      backgroundColor: ' #f1f1f1',
      marginTop:10,
      paddingHorizontal:10,
      paddingBottom:5
    },
    cardcontainer: {
      flex:1, //so that container views take availble space
      backgroundColor: ' #f1f1f1',
      paddingtop: 40,
      // marginTop:20,
      paddingHorizontal: 20,
  
    },
    text:{
      color: 'black',
      fontSize: 18,
      textAlign:'justify'
 
    },
    deetstext:{
      color: 'black',
      fontSize: 18,
      padding:8,
      marginTop:2,
    },
    deetshead:{
      fontWeight: 'bold',
      color: 'black',
      padding:10,
      fontSize: 18,
      textAlign: 'center'
    },
    homeImg : {
      flexDirection: 'row',
      width:250,
      marginTop:1,
      height:250
    },
    about:{
      color: 'black',
      fontSize: 20,
      paddingTop:10,
      fontWeight:'bold',
      textAlign: 'center',
      justifyContent: 'center',
    },
    item:{
      marginTop:24,
      padding:30,
      backgroundColor:'pink',
      fontSize:24,
      color: 'black',
    },
    input:{
      borderWidth:1,
      borderColor: 'black',
      padding: 20,
      fontSize: 18,
      borderRadius:6,
      color: 'black',
     marginBottom:12,
    },
    apiList:{
      flex:1,
      paddingTop:10
    },
    search:{
      textAlign: "center",
      color:"black",
      fontWeight:"bold",
      marginTop:300,
    },
    errorText:{
      color: 'crimson',
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 6,
      textAlign:'center'
    },
    img:{
      alignSelf: 'center',
      paddingTop:20,
      marginTop: 20,
      borderTopWidth:1,
      borderTopColor: '#eee',
      width:250,
      height:150
    },
    rating:{
      flexDirection:'row',
      // paddingHorizontal:20,
      marginHorizontal:55,

    },
    modal:{
      flex:1,
      borderRadius:30,

    },
    openModal:{
      marginTop:30,
      marginBottom:10,
      borderRadius:15,
      padding:15,
      borderColor: 'purple',
      borderWidth:1,
      alignSelf:'center'
    },
  closeModal:{
    marginTop:20,
    marginBottom:0,
  },
  modalText:{
    marginTop:10,
    textAlign:'center'
  }
    });