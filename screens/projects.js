import React from "react";
import {StyleSheet, View, Text,Button,FlatList,TouchableOpacity} from 'react-native';
import { globalStyles } from "../styles/global";
import { useState } from "react";
import  Card from '../shared/card'


export default function Project({ navigation }) {

const[projects, setProjects] = useState([
    {title: "SLR" , descp :"yolo v5 used" ,techstack: "py" , image: "../assets/model.png" ,key:1},
    {title: "Covat" , descp :"project for local vendors" ,techstack: "mern"  , image: "../assets/mern.png" , key:2},
    {title: "Sign language Recognition using Deep Learning" , descp :"LSTM based" ,techstack: "py" , image: "../assets/p2p.png" , key:3},
    {title: "Banking system" , descp :"flask based" ,techstack: "py flask" , image: "../assets/bank.png" , key:4},
    {title: "Pet360" , descp :" project for local vendors" ,techstack: "mern" , image: "../assets/mern.png" , key:5}
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

