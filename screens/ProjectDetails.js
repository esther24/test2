import React from "react";
import {StyleSheet, View, Text, Image , ImageBackground , Linking} from 'react-native';
import { globalStyles } from "../styles/global";
import { useRoute } from "@react-navigation/native";
import Card from "../shared/card";
import Icon from 'react-native-vector-icons/Entypo'


export default function ProjectDetails({navigation}) {
    const route = useRoute()
    const title = route.params?.title;
    const descp = route.params?.descp;
    const img = route.params?.image;
    const techstack = route.params?.techstack
    const link = route.params?.link
   

return (
<ImageBackground source={require('../assets/bg1.jpg')}style={globalStyles.cardcontainer}>
<Card>
    <Text style={globalStyles.deetshead}>{title}</Text>
    <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
    {/* <Text style={globalStyles.deetshead}>Project Description</Text> */}
    <Text style={globalStyles.deetstext}>{descp}</Text>

    <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
    <Text style={globalStyles.deetshead}>Tech Stack Used</Text>
    <Text style={globalStyles.deetstext}>{techstack}</Text>

    <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>

<Image style={globalStyles.img} source={img}/>
<Text style={globalStyles.deetstext}
 onPress={() => {
   Linking.openURL(link);
 }}
><Icon name = "github" size = {20}color = "black" style={marginHorizontal=10} /> GitHub Link</Text>
  
    
</Card>
</ImageBackground>
)
}


