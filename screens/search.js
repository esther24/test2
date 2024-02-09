import React, { useEffect } from "react";
import {StyleSheet, View, Text , TouchableOpacity} from 'react-native';
import { globalStyles } from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import Feather from 'react-native-vector-icons/Feather'
import Card from "../shared/card";
import SearchFilter from "./searchFilter";



export default function SearchApi() {
    const [blog,setBlog] = useState("");
    //console.log(blog)




return (
<View>
<View 
style={{
    padding:10,
    marginTop:9,
    marginLeft:9,
    flexDirection:"row",
    width:"95%",
    backgroundColor:"#d9dbda",
    borderRadius: 10,
    alignItems: "center",
}}
>

    <Feather 
    name="search"
    size={20}
    color="black"
    style={{marginLeft:1, marginRight:4}} />

    <TextInput value={blog} 
    onChangeText={(val)=> setBlog(val)} 
    style={{fontSize:15, color:"black"}} 
    placeholder="Search" 
    placeholderTextColor="black" />

</View>
<SearchFilter blog={blog}/>
</View>




)}

