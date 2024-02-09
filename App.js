import 'react-native-gesture-handler';
import React, { useRef } from "react";
import Home from './screens/home';

import Icon from 'react-native-vector-icons/Entypo'
import MyIcon from 'react-native-vector-icons/Ionicons'
//screens
import Project from './screens/projects'
import About from './screens/about'
import ProjectDetails from './screens/ProjectDetails';
import Contact from './screens/contact'
import ApiCall from './screens/api';
import SearchApi from './screens/search';
//navi
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer , useNavigation , DrawerActions, StackActions ,NavigationActions} from '@react-navigation/native';
import { createNativeStackNavigator , CommonActions} from '@react-navigation/native-stack';
import { SearchBar } from 'react-native-screens';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const StackNavi = () =>{

  const navigation = useNavigation(); 


  return(
    <Stack.Navigator
  
    screenOptions={{
      headerStyle: {
            backgroundColor: '#fff',
          },
    headerTintColor: 'purple',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    headerTitleAlign: 'center',
      headerLeft : ()=>{
        return (<Icon
        name = "menu"
        size = {30}
        color = "black"
        onPress = {()=> navigation.dispatch(DrawerActions.openDrawer())}
        />)

      }   
          }}
    >
    <Stack.Screen name="EC" component={Home} />
    <Stack.Screen name="About" component={About} />
    <Stack.Screen name="My Projects" component={Project}/>
    <Stack.Screen name="Project Details" component={ProjectDetails} />
    {/* <Stack.Screen name="Contact Me" component={Contact}/> */}
    </Stack.Navigator>
  );
}

const DrawerNavi= ()=> {
  const navi = useNavigation();
  
 

  return(
    <Drawer.Navigator 
   
    screenOptions={{
      headerStyle: {
            backgroundColor: '#fff',
          },
    headerTintColor: 'purple',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
     
   
          }}

    
    >
   <Drawer.Screen
        name="Home"
        component={StackNavi}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Icon name="home" size={30} color="black" />
          ),
          drawerLabel: 'Home',
        }}
        
          onPress={ ()=>{
            console.log("hello")
            navi.dispatch(StackActions.pop(1))
          }}
        
      />
            
      <Drawer.Screen name="Contact" component={Contact}
            options={
              {
              drawerIcon: () =>{
                return(
                 <Icon 
                  name = "mail"
                  size = {30}
                  color = "black" /> )}
                }}
      
      />

<Drawer.Screen name="Api" component={ApiCall}
            options={
              {
              drawerIcon: () =>{
                return(
                 <MyIcon 
                  name = "server"
                  size = {30}
                  color = "black" /> )}
                }}
      
      />

<Drawer.Screen name="Search" component={SearchApi}
            options={
              {
              drawerIcon: () =>{
                return(
                 <MyIcon 
                  name = "search"
                  size = {30}
                  color = "black" /> )}
                }}
      
      />
    </Drawer.Navigator>
  );
}

  




export default function App(){


return(
  <NavigationContainer>
    <DrawerNavi/>
  </NavigationContainer>
  
);
}

