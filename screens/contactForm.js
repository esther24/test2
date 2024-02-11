import React, { useState } from "react";
import {StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import Card from "../shared/card";
import { TextInput } from "react-native-gesture-handler";
import * as yup from 'yup';


const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const ValidateSchema = yup.object({
    uname: yup.string()
    .required('Name is Required!')
    .min(3, 'must be at least 3 characters')
    .max(15, 'name must not exceed 15 characters!'),

    email: yup.string()
    .required('Email is Required!')
    .matches(emailRegex, 'Invalid email'),

    contact: yup.string()
    .required('Number is required!')
    .test('length' , 'Enter valid 10 digit number only!' , val => val.length == 10)
  
    
})



export default function ContactForm() {

return (
<View >
<Formik
initialValues={{uname: '', email: '', contact: ''}}
validationSchema={ValidateSchema}
onSubmit={(values , actions) => {
    actions.resetForm();
    console.log(values);
}}
> 
    {//rendering a jsx
        (Formikprops)=>{
return(
<View>
    <Card>
    <Text style={{textAlign:"center" , color:"black", padding:20, fontSize:18, fontWeight:"bold"}}>Contact Me!</Text>
    <TextInput style={globalStyles.input}
    placeholder="Enter Name"
    placeholderTextColor="black"
    onBlur={Formikprops.handleBlur('uname')}
    //two way data binding
    onChangeText={Formikprops.handleChange('uname')} //updates the name prop
    value={Formikprops.values.uname}  //here we set the value of the textinput from initial to new
    /> 

    <Text style={globalStyles.errorText}>{Formikprops.touched.uname && Formikprops.errors.uname}</Text>
   
    <TextInput style={globalStyles.input}
    placeholder="Enter Email"
    placeholderTextColor="black"
    onBlur={Formikprops.handleBlur('email')}
    //two way data binding
    onChangeText={Formikprops.handleChange('email')} //updates the email prop
    value={Formikprops.values.email}  //here we set the value of the textinput from initial to new
    /> 

    <Text style={globalStyles.errorText}>{Formikprops.touched.email && Formikprops.errors.email}</Text>

    <TextInput style={globalStyles.input}
    placeholder="Enter Contact Number"
    placeholderTextColor="black"
    onBlur={Formikprops.handleBlur('contact')}
    //two way data binding
    onChangeText={Formikprops.handleChange('contact')} //updates the number prop
    value={Formikprops.values.contact}  //here we set the value of the textinput from initial to new
    keyboardType="numeric"
    /> 

    <Text style={globalStyles.errorText}>{Formikprops.touched.contact && Formikprops.errors.contact}</Text>

    <Button title="Ping" color="purple"  onPress={Formikprops.handleSubmit}/>
    </Card>
</View>)
        }
    }
    
</Formik>
</View>



)
}

