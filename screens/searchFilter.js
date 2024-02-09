import React from "react";
import {StyleSheet, View, Text, FlatList,TouchableOpacity} from 'react-native';
import { globalStyles } from "../styles/global";
import { useEffect,useState } from "react";
//import { FlatList } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";



export default function SearchFilter({blog}) {

    console.log("blogs deconstructed: ",blog)
    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState(null);
    const [fullData,setFullData] = useState([])


    //const limit = 10;

    const fetchData = async(url) =>{
        try{
            const res =  await fetch(url);
            const newData = await res.json();
            setDatas(newData);
            console.log("Fetched:",newData);
            setIsLoading(false)

        }catch (error){
            setError(error)
            console.error(error);
            setIsLoading(true)
        }
    }

    useEffect(()=>{
        setIsLoading(true)
        fetchData("https://jsonplaceholder.typicode.com/posts?userId=1")
    },[])

    useEffect(()=>{
        console.log("Data is set")
    },[datas])
    
    if(isLoading){
        return(
            <View style={{marginTop:300,justifyContent:"center", alignItems:"center"}}>
                <ActivityIndicator size={"small"} color="#5500dc"/>
            </View>
        )
    }

    if(error) {
        return(
            <View style={{marginTop:300,justifyContent:"center", alignItems:"center"}}>
                <Text>Error in fetching..</Text>
            </View>
        )
    }
    if (!blog) {      
        return (        
        <View>              
            <Text style={globalStyles.search}>Search Blogs!</Text>        
        </View>      
          );}  
          
return (
<View>
    <FlatList data={datas} 
    keyExtractor={(item)=>item.id.toString()}
    renderItem={({ item }) => {  
         
       if (blog === "" || item.title.toLowerCase().includes(blog.toLowerCase())) {     
         return (         
         <View style={{ marginHorizontal: 10  , marginTop:15}}>       
             <Text style={{ fontSize: 14, color: "black"}}>{item.title}</Text>               
             <Text style={{ borderColor: "black", borderWidth: 1, height: 1, marginTop: 5 }} />            
      </View>      
        ); }}}
    
    />
 
</View>

)


}

