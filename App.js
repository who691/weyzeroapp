import 'react-native-gesture-handler';
import React, { useState, useEffect, } from 'react';
import { NavigationContainer ,useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Home from './component/screen/Home';
import Onboardingscreen from './component/screen/Onboardingscreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Register from './component/screen/Register';
import Login from './component/screen/Login';
import Service from './component/screen/Service';
import Employe from './component/screen/Employe';
import Contact from './component/screen/Contact';
import Term from './component/screen/Term';
import DetailScreen from './component/screen/DetailScreen';

import { FontAwesome } from '@expo/vector-icons';
import BottomTap from './component/screen/BottomTap';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { Entypo } from '@expo/vector-icons';
import DrawerContainor from './component/screen/DrawerContainor';
import Employeer from './component/screen/Employeer';
import Services from './component/screen/Services';
import EditProfile from './component/screen/EditProfile';
import News from './component/screen/News';
import Support from './component/screen/Support';

const Drawer = createDrawerNavigator();


const Stack=createStackNavigator();


const widthApp = Dimensions.get('window').width


const DrawerScreen = () => (
<Drawer.Navigator 

screenOptions={({ navigation }) => ({
  headerStyle:{
    backgroundColor:'#192f6a',
  },
  headerTitleStyle:{
    color:'white',
  },
  headerLeft: () => (
  <Entypo name="menu" style={{marginLeft:20}}  size={30} color="white" onPress={navigation.toggleDrawer} />
  ),
  headerTitleAlign:'center'
})}

drawerContent={props=> <DrawerContainor {...props}/>}

>


      <Drawer.Screen name="Home" component={BottomTap} initialParams={{ screenName: 'homeScreen' }}  />
      <Drawer.Screen name='Profile' component={EditProfile} />
      <Drawer.Screen name='News' component={News} />
      <Drawer.Screen name='Term' component={Term} />
      <Drawer.Screen name='Support' component={Support} />
     

     
      
    </Drawer.Navigator>
)


const App = ({ navigation }) => {

  
  const navigationRef = useNavigationContainerRef();
  const [isFirstLaunch,setIsFirstLaunch]=useState();

  useEffect(() => {
    
    AsyncStorage.getItem('alreadyLaunched').then(value=>{
      if(value===null){
        AsyncStorage.setItem('alreadyLaunched','true')
        setIsFirstLaunch(true)
      }else{
        setIsFirstLaunch(false)
      }
    })

  },[])



    return (
      <NavigationContainer ref={navigationRef}>



<Stack.Navigator>

<Stack.Screen options={{headerShown:false,}} name='onboard' component={Onboardingscreen} />

<Stack.Screen options={{headerShown:false,}} name='login' component={Login}/>

          <Stack.Screen options={{headerShown:false,}} name='register' component={Register}/>


      <Stack.Screen options={{ headerShown:false}} name="Drawer" component={DrawerScreen} />



<Stack.Screen options={{headerShown:false,}} name='detail' component={DetailScreen}/>

<Stack.Screen options={{headerShown:false,}} name='services' component={Services}/>

<Stack.Screen options={{headerShown:false,}} name='Term' component={Term}/>




    </Stack.Navigator>


        {
          /*---------

  <Stack.Navigator>
          <Stack.Screen options={{headerShown:false,}} name='onboard' component={Onboardingscreen} />
          <Stack.Screen

options={({ navigation }) => ({
  headerStyle: { backgroundColor: '#192f6a' },
  headerTintColor: 'white',
  headerTitleStyle: { fontWeight: 'bold' },
  headerTitleAlign: 'center',
  headerLeft: (props) => (
           
    <FontAwesome
    onPress={() =>  navigation.goBack()}
      style={{ color: 'white', marginLeft: 15 }}
      name="chevron-left"
      size={24}
      color="black"
    />


),
})}
      name='home'
      component={Home}
    />
          <Stack.Screen options={{headerShown:false,}} name='login' component={Login}/>
          <Stack.Screen options={{headerShown:false,}} name='register' component={Register}/>
          <Stack.Screen options={{headerShown:false,}} name='service' component={Service}/>
          <Stack.Screen options={{headerShown:false,}} name='employe' component={Employe}/>
          <Stack.Screen options={{headerShown:false,}} name='contact' component={Contact}/>
          <Stack.Screen    options={{
        headerStyle: { backgroundColor: '#192f6a' },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign: 'center',
        headerLeft: (props) => (
          <View>
            <TouchableOpacity onPress={() =>navigation.goBack()}>
              <FontAwesome
                style={{ color: 'white', marginLeft: 15 }}
                name="chevron-left"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        ),
      }} name='term' component={Term}/>
          <Stack.Screen options={{headerShown:false,}} name='detail' component={DetailScreen}/>
        </Stack.Navigator>
          ----------*/
        }
      
      </NavigationContainer>
     );
 
  

 
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
