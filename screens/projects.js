import React from "react";
import {StyleSheet, View, Text,Button,FlatList,TouchableOpacity} from 'react-native';
import { globalStyles } from "../styles/global";
import { useState } from "react";
import  Card from '../shared/card'


export default function Project({ navigation }) {

const[projects, setProjects] = useState([
    {title: "SLR" , descp :" yolo v5 used" ,techstack: "py" , key:1},
    {title: "Covat" , descp :" project for local vendors" ,techstack: "mern" , key:2},
    {title: "Sign language Recognition using Deep Learning" , descp :"LSTM based" ,techstack: "py" , key:3},
    {title: "Banking system" , descp :"flask based" ,techstack: "py flask" , key:4},
    {title: "Pet360" , descp :" project for local vendors" ,techstack: "mern" , key:5}
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

