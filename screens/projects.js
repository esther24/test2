import React from "react";
import {StyleSheet, View, Text,Button,FlatList,TouchableOpacity} from 'react-native';
import { globalStyles } from "../styles/global";
import { useState } from "react";
import  Card from '../shared/card'


export default function Project({ navigation }) {
    const bank = require('../assets/bank.png')
    const mern = require('../assets/mern.png')
    const p2p = require('../assets/p2p.png')
    const model = require('../assets/model.png')

    const bankLink= "https://github.com/esther24/Sparks_GRIP_internship"
    const p2pLink= "https://github.com/esther24/P2P"
    const slrLink = "https://github.com/esther24/Sign-Language-Recognition-words-and-alphabets-" 
    const petLink = "https://github.com/esther24/Pet360_Sem-5_MiniProject"
    const convibotLink = "https://github.com/esther24/Covibot"

const[projects, setProjects] = useState([
    {title: "SLR" , descp :"yolo v5 used" ,techstack: "py" , image: model , link: slrLink,key:1},
    {title: "CoviBot" , descp :"Information ChatBot build with rasa during covid" ,techstack: "rasa and py"  , link:convibotLink , image: mern , key:2},
    {title: "Sign language Recognition using Deep Learning" , descp :"LSTM based" ,link: p2pLink ,techstack: "py" , image: p2p , key:3},
    {title: "Banking system" , descp :"flask based" ,techstack: "py flask" , link:bankLink,image: bank , key:4},
    {title: "Pet360" , descp :" project for local vendors" ,techstack: "mern" , link: petLink,image: mern , key:5}
])
return (
<View style={globalStyles.container}>
<FlatList 
    data={projects}
    renderItem={({item})=>(
        <TouchableOpacity onPress={()=> navigation.navigate('Project Details' , item)}>
        <Card>
            <Text style={globalStyles.text}>{item.title}</Text>
        </Card>
        </TouchableOpacity>
    )}

/>
    
   
</View>

)
}

