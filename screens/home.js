import React from "react";
import {StyleSheet, View, Text ,TouchableOpacity} from 'react-native';
import { globalStyles } from "../styles/global";
import {Button} from 'react-native'






export default function Home({navigation}) {

    const pressHandler = () =>{
        console.log("Pressed") ;
        navigation.navigate('About');
    }

 return(
    <View style={globalStyles.container}>
        <Text style={globalStyles.text}>HELLO...</Text>
        <Text style={globalStyles.text}>I AM ESTHER CHETTIAR!!</Text>
        <Text style={globalStyles.text}>| Web Development | Python | SQL </Text>
        <Text style={globalStyles.text}>| Analytics enthusiast | Anime | Manga</Text>
        <Text> </Text>
        <Button title='About' onPress={pressHandler} color="purple"/>
    </View>
 )

}

