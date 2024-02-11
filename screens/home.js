import React from "react";
import {StyleSheet, View, Text ,Image} from 'react-native';
import { globalStyles } from "../styles/global";
import {Button} from 'react-native'






export default function Home({navigation}) {

    const pressHandler = () =>{
        console.log("Pressed") ;
        navigation.navigate('About');
    }

 return(
    <View style={globalStyles.container}>
        <View>
        <Image source={require('../assets/home.png')} style={globalStyles.homeImg} />
        </View>  
        <Text style={globalStyles.text}>Hello and Welcome...</Text>
        <Text style={globalStyles.text}>I AM ESTHER CHETTIAR!!</Text>
        <Text style={globalStyles.text}>| Web Development | Python | SQL </Text>
        <Text style={globalStyles.text}>| Analytics enthusiast | Anime | Manga</Text>
        <Text> </Text>
        <Button title='About' onPress={pressHandler} color="purple"/>
    </View>
 )

}

