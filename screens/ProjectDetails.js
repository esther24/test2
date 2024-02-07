import React from "react";
import {StyleSheet, View, Text} from 'react-native';
import { globalStyles } from "../styles/global";
import { useRoute } from "@react-navigation/native";
import Card from "../shared/card";


export default function ProjectDetails({navigation}) {
    const route = useRoute()
    const title = route.params?.title;
    const descp = route.params?.descp;
return (
<View style={globalStyles.cardcontainer}>
<Card>
    <Text style={globalStyles.text}>{title}</Text>
    <Text style={globalStyles.text}>{descp}</Text>
</Card>
</View>
)
}


