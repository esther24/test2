import React from "react";
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Card(props) {
    return(
        <View style={styles.card}>
        <View style={styles.cardContent}>
            {props.children}
        </View>

        </View>
    )
}


const styles = StyleSheet.create({
    card:{
    padding: 10,
    marginTop:20,
    borderRadius: 6,
    elevation:3,
    backgroundColor: '#fff',
    shadowOffset: {width:1 , height:1},
    shadowColor: '#333',
    shadowOpacity: 0.3, //0 nothing is seen 1 is v dard
    shadowRadius:2,
    marginHorizontal: 4,
    marginVertical: 6,
    },
    cardContent:{
        marginHorizontal:18,
        marginVertical:10,
        color: 'black'

    }
})