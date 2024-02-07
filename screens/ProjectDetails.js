import React from "react";
import {StyleSheet, View, Text, Image} from 'react-native';
import { globalStyles } from "../styles/global";
import { useRoute } from "@react-navigation/native";
import Card from "../shared/card";


export default function ProjectDetails({navigation}) {
    const route = useRoute()
    const title = route.params?.title;
    const descp = route.params?.descp;
    const techstack = route.params?.techstack

return (
<View style={globalStyles.cardcontainer}>
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
    
</Card>
</View>
)
}


