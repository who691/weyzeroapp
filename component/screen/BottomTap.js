import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'

import { FontAwesome } from '@expo/vector-icons';

import { FontAwesome5 } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';
import Service from './Service';

import { MaterialIcons } from '@expo/vector-icons';
import Employe from './Employe';

import { AntDesign } from '@expo/vector-icons';
import Contact from './Contact';
import Search from './Search';
import EditProfile from './EditProfile';



const Tab = createBottomTabNavigator();
const Stack=createStackNavigator();


const HomeScreen=()=>{
    return(
        <Stack.Navigator>
        <Stack.Screen
        options={{headerShown:false,}}
    name='home'
    component={Home}
  />
      </Stack.Navigator>
    )
}




const BottomTap = ( {route }) => {

  const { screenName } = route.params

  const [showTabBar,setShowTabBar]=useState(false)

 

  return (

    <>
    <StatusBar  backgroundColor={'#192f6a'} barStyle={'light-content'} />

  <Tab.Navigator   initialRouteName={screenName}   screenOptions={{ headerShown: false, }}>

    
      <Tab.Screen name="serviceScreen" component={Service}  options={{
      tabBarLabel: '',
      tabBarStyle:{
   backgroundColor:'#192f6a',
   alignItems:'center',
   justifyContent:'center',
   paddingTop:10
      },
      tabBarIcon: ({ color, size }) => (
        <Image resizeMode='contain'  style={{height:30}} tintColor={color}  source={require('../assets/serv.png')}/>
      ),
    }} />
      <Tab.Screen name="employeScreen" component={Employe}  options={{
      tabBarLabel: '',
      tabBarStyle:{
   backgroundColor:'#192f6a',
   alignItems:'center',
   justifyContent:'center',
   paddingTop:10
      },
      tabBarIcon: ({ color, size }) => (
        <FontAwesome name="user" size={24} color={color} />
      ),
    }} />

<Tab.Screen name="homeScreen" component={Home}  options={{
      tabBarLabel: '',
      tabBarStyle:{
   backgroundColor:'#192f6a',
   alignItems:'center',
   justifyContent:'center',
   paddingTop:10
      },
      tabBarIcon: ({ color, size }) => (
        <View style={{ backgroundColor:'#192f6a', position:'absolute' ,top:-30, width:50,height:50,borderRadius:25,borderWidth:1,borderColor:'gray',alignItems:'center',justifyContent:'center'}}>
        <Ionicons  name="home" color={color} size={size} />
        </View>
      ),
    }} />

<Tab.Screen name="searchScreen" component={Search}  options={{
      tabBarLabel: '',
      tabBarStyle:{
   backgroundColor:'#192f6a',
   alignItems:'center',
   justifyContent:'center',
   paddingTop:10
      },
      tabBarIcon: ({ color, size }) => (
   <FontAwesome5 name="search" size={size} color={color} />
    
      ),
    }} />

      <Tab.Screen name="contactScreen" component={Contact}  options={{
      tabBarLabel: '',
      tabBarStyle:{
   backgroundColor:'#192f6a',
   alignItems:'center',
   justifyContent:'center',
   paddingTop:10
      },
      tabBarIcon: ({ color, size }) => (
        <AntDesign name="contacts" size={24} color={color} />
      ),
    }} />


{showTabBar && (
 <Tab.Screen name="profileScreen" component={EditProfile}  options={{
  tabBarLabelStyle:{
    display:'none'
  },
  tabBarShowLabel:false,
  tabBarStyle:{
    backgroundColor:'#192f6a',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:10,
       },
  tabBarIconStyle:{
    display:'none'
  },
}} />

)}

     

    </Tab.Navigator>

  

    </>
  )
}

export default BottomTap

const styles = StyleSheet.create({})