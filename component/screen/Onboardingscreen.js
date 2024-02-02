import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Onboarding from 'react-native-onboarding-swiper';

const Onboardingscreen = ({navigation}) => {


    const Done=({...props})=>(
        <TouchableOpacity style={{marginRight: 10,}} {...props}>
<Text style={{fontSize: 16}}>Done</Text>
        </TouchableOpacity>
    )

  return (
    <View style={styles.container}>
      <Onboarding
      DoneButtonComponent={Done}
      onSkip={()=>navigation.navigate('home')}
      onDone={()=>navigation.navigate('login')}
  pages={[
    {
      backgroundColor: '#e9bcbe',
      image: <Image style={styles.onboardImage} source={require('../assets/on1.png')} />,
      title: 'Find Your Worker',
      subtitle: 'The Ultimate Guide to Finding the Perfect Fit',
    },
    {
      backgroundColor: '#fdeb93',
      image: <Image source={require('../assets/on2.png')} />,
      title: 'Stop Searching, Start Hiring',
      subtitle: 'Connect with Your Ideal Workers Today',
    },

  ]}
/>
      <StatusBar backgroundColor='transparent' hidden={true}/>
    </View>
  )
}

export default Onboardingscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      onboardImage:{
         
      }

})