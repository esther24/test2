import React from "react";
import {StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";


export default function ContactForm() {

return (
<View style={globalStyles.container}>
<Formik
initialValues={{name: '', email: '', contact: ''}}
onSubmit={(values) => {
    console.log(values);
}}
> 
    {//rendering a jsx
        (Formikprops)=>{
return(
<View>
    <TextInput style={globalStyles.input}
    placeholder="Enter Name"
    //two way data binding
    onChangeText={Formikprops.handleChange('name')} //updates the name prop
    value={Formikprops.values.name}  //here we set the value of the textinput from initial to new
    /> 
   
    <TextInput style={globalStyles.input}
    placeholder="Enter Email"
    //two way data binding
    onChangeText={Formikprops.handleChange('email')} //updates the name prop
    value={Formikprops.values.email}  //here we set the value of the textinput from initial to new
    /> 
    <TextInput style={globalStyles.input}
    placeholder="Enter Contact Number"
    //two way data binding
    onChangeText={Formikprops.handleChange('contact')} //updates the name prop
    value={Formikprops.values.contact}  //here we set the value of the textinput from initial to new
    keyboardType="numeric"
    /> 

    <Button title="Ping" color="purple"  onPress={Formikprops.handleSubmit}/>
</View>)
        }
    }
    
</Formik>
</View>



)
}

