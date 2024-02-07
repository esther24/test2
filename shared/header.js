import React from "react";
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>

        <View>
        <Text style={styles.headerText}>My Portfolio</Text>
        </View>
        </View>
      
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center'

    },
    headerText:{
        fontWeight: 'bold',
        fontSize: '10',
        color: 'purple',
        letterSpacing: 1
    }
})