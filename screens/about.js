import React from "react";
import {StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from "../styles/global";
import { useState } from "react";


export default function About({navigation}) {
    const pressHandler = () =>{
        console.log("Pressed") ;
        navigation.navigate('My Projects');
    }
    const [skill ,setSkill] = useState([
        {skill: 'Python' , key: '1'},
        {skill: 'SQL' , key: '2'},
        {skill: 'Web Dev' , key: '3'},
        {skill: 'AWS' , key: '4'},
        {skill: 'Mongo' , key: '5'},
        {skill: 'Excel' , key: '6'},
        ]);
return (
<View style={globalStyles.container}>
    <Text style={globalStyles.about}>
    I am a pasionate developer who countinuous to learn with every project. Considering my lack of expirence I make up for that with my hunger for learning.
    <Text>I am keen to expand my knowledge in the field of Data Analytics and Web Development.I strongly believe that its never too late to learn.</Text>
    <Text>I like to read both books and manga and watch sports like football,f1 and cricket</Text>
    </Text>
    <Text></Text>
    <View>
    <Button  color="purple" title='My Projects' onPress={pressHandler} />
    </View>
</View>


)
}

