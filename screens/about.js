import React from "react";
import {StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from "../styles/global";
import { useState } from "react";

import Icon from 'react-native-vector-icons/Entypo'
import Card from "../shared/card";


export default function About({navigation}) {
    const pressHandler = () =>{
        console.log("Pressed") ;
        navigation.navigate('My Projects');
    }

    const pressDownload = () =>{
        console.log("Pressed")
        navigation.navigate('My Skills')
        
    }

return (
<View style={globalStyles.aboutcontainer} >
    <View>
    <Text  style={globalStyles.about}>A Little About Me..</Text>
    <Text style={globalStyles.about}>I am Esther Chettiar</Text>

    <Text style={globalStyles.about}><Icon name = "location" size = {15}color = "black" style={marginHorizontal=5} /> Mumbai, IN</Text>
    </View>
    <Card>
    <Text style={globalStyles.text}>{
        `\u2043 A pasionate developer who countinuous to learn with every project.
         \n\u2043 Considering my lack of expirence I make up for that with my hunger for learning.
        \n\u2043 I am keen to expand my knowledge in the field of Data Analytics and Web Development
        \n\u2043 I strongly believe that its never too late to learn.
        \n\u2043 Likes: Reading,organizing,cooking,learning new languages,listening to music.
        \n\u2043 Interests: Football,f1,cricket,chess,scifi`
    } </Text>
    </Card>
    <Text> </Text>
    <Button color="purple" title='My Projects' onPress={pressHandler} />
    <Text> </Text>
    <Button color="purple" title='Skills' onPress={pressDownload} />
    </View>



)
}

