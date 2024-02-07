import 'react-native-gesture-handler';
import React from "react";
import Home from './screens/home';
// import Navigator from './routes/homestack';
import Icon from 'react-native-vector-icons/Entypo'
import Project from './screens/projects'
import About from './screens/about'
import ProjectDetails from './screens/ProjectDetails';
import Contact from './screens/contact'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer , useNavigation , DrawerActions, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from "./shared/header";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



const StackNavi = () =>{

  const navi = useNavigation(); 
  return(
    <Stack.Navigator
    //initialRouteName="EC"
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
        onPress = {()=> navi.dispatch(DrawerActions.openDrawer())}
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
  const navigation = useNavigation()
  const resetStack =() =>{
    // navigation.reset({
    //   index:0,
    //   routes: [{name: 'EC'}]

    // });
    navigation.dispatch(StackActions.popToTop())
  };
  //const resetNavigation = (navigation) => navigation.popToTop();

  // const resetStack =() =>{
  //   navigation.navigate('EC')
  // }
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
      <Drawer.Screen name="Home" component={StackNavi} 
      options={
        {headerShown: false,
        drawerIcon: () =>{
          return(
           <Icon 
            name = "home"
            size = {30}
            color = "black" /> )},
            //onPress:resetStack
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

