import React from "react";
import {StyleSheet, View, Text,Button,FlatList,Image} from 'react-native';
import { globalStyles } from "../styles/global";
import { useState } from "react";
import  Card from '../shared/card'
import Icon from 'react-native-vector-icons/FontAwesome'


export default function Skills({ navigation }) {
    const one = require('../assets/rating-1.png')
    const two = require('../assets/rating-2.png')
    const three = require('../assets/rating-3.png')
    const four = require('../assets/rating-4.png')
    const five = require('../assets/rating-5.png')

    const [skill ,setSkill] = useState([
        {skill: 'Python' , image: four, key: '1'},
        {skill: 'SQL' , image: four,key: '2'},
        {skill: 'Web Dev' , image: three,key: '3'},
        {skill: 'AWS' , image: three,key: '4'},
        {skill: 'Mongo' , image:three ,key: '5'},
        {skill: 'Excel' , image: three,key: '6'},
        ])
return (
<View style={globalStyles.cardcontainer}>
<FlatList 
    data={skill}
    renderItem={({item})=>(
        
        <Card>
            <Text style={globalStyles.text}>{item.skill} 
            <Icon name = "long-arrow-right" size = {15}color = "black" style={globalStyles.rating}/>
            <Image style={globalStyles.rating} source={item.image}/>
            </Text>
        </Card>
     
    )}

/>
    
   
</View>

)
}

