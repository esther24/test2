import React, { useEffect } from "react";
import {StyleSheet, View, Text , TouchableOpacity} from 'react-native';
import { globalStyles } from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import Card from "../shared/card";



export default function ApiCall() {
    const [user,setUser] = useState();
    const fetchdata = async() =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUser(data)
    };

    useEffect(()=>{
        fetchdata();
    },[])

    const pressHandler =(id) =>{
        console.log(id);
        setUser((oldUser)=> {
          return oldUser.filter(user => user.id != id)
        })
      }

return (
<View style={globalStyles.container}>
<FlatList
data={user}
keyExtractor={(item)=>item.id }
renderItem={({item})=>
{
    return(
        <TouchableOpacity onPress={()=> pressHandler(item.id)}>  
        <Card>
           <Text style={globalStyles.text}>{item.name}</Text>
           </Card>
    </TouchableOpacity>
     
           
    
)}}

/>
</View>




)}

