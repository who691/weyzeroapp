import {  Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Linking from 'expo-linking';

import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';


import { Feather } from '@expo/vector-icons';

import { Octicons } from '@expo/vector-icons';

const width=Dimensions.get('screen').width

const Support = () => {

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  const [dash,setDash]=useState(false)
  const [dash1,setDash1]=useState(true)
  const [dash2,setDash2]=useState(true)
  const [dash3,setDash3]=useState(true)

  const handleDash=()=>{
    if(dash==false){
      setDash(true)
    }
    else{
      setDash(false)
      setDash1(true)
      setDash2(true)
      setDash3(true)
    }
  }


  const handleDash1=()=>{
    if(dash1==true){
      setDash1(false)
      setDash(true)
      setDash2(true)
      setDash3(true)
    }
    else{
      setDash1(true)
    }
  }

  const handleDash2=()=>{
    if(dash2==true){
      setDash2(false)
      setDash(true)
      setDash1(true)
      setDash3(true)
    }
    else{
      setDash2(true)
    }
  }


  const handleDash3=()=>{
    if(dash3==true){
      setDash3(false)
      setDash(true)
      setDash2(true)
      setDash1(true)
    }
    else{
      setDash3(true)
    }
  }


  return (
    <View>
      
      <TouchableOpacity onPress={() => {
    Linking.openURL(`tel:+251930104785`); // Replace with the actual phone number
  }} style={styles.supportBtn}>

        <View style={styles.phoneCircle}>
        <Feather name="phone" size={24} color="black" />
        </View>

   <View>
  <Text style={styles.ourSupport}>
    Our 24x7 customer Service
  </Text>
  <Text style={{color:'#007bff',fontWeight:'bold'}}>
    +251930104785
  </Text>
   </View>

  

      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
    Linking.openURL(`mailto:abelahabtamu1@gmail.com`); // Replace with the actual phone number
  }} style={styles.supportBtn}>

        <View style={styles.phoneCircle}>
        <Feather name="mail" size={24} color="black" />
        </View>

   <View>
  <Text style={styles.ourSupport}>
    Write Us At
  </Text>
  <Text style={{color:'#007bff',fontWeight:'bold'}}>
   abelahabtamu1@gmail.com
  </Text>
   </View>

  

      </TouchableOpacity>

      <View style={styles.supportLine} />

      <Text style={styles.asked}>
        Frequently Asked Questions
      </Text>
      

      <TouchableOpacity style={styles.infoSupport} onPress={()=>handleDash()}>

<View style={styles.Info} >
{ dash==true ? <Feather style={styles.supportIcon} name="chevron-down" size={24} color="black" /> :  <Octicons style={styles.supportIcon} name="dash" size={24} color="black" /> }
<Text style={styles.supportTextOne} >
How do I submit my resume for a job opening?
</Text>
</View>

           <View style={dash?{display:'none'} : {display:'flex'} }>
					 <Text style={styles.supportTextTwo}>Submit your resume and cover letter through our online application portal. 
           You can find the link to the portal on the job posting page.
           Submit your resume and cover letter through our online application portal. 
           You can find the link to the portal on the job posting page.
           Submit your resume and cover letter through our online application portal. 
           You can find the link to the portal on the job posting page.
           </Text>
						</View>

</TouchableOpacity>


<TouchableOpacity style={styles.infoSupport} onPress={()=>handleDash1()}>

<View style={styles.Info} >
{ dash1==true ? <Feather style={styles.supportIcon} name="chevron-down" size={24} color="black" /> :  <Octicons style={styles.supportIcon} name="dash" size={24} color="black" /> }
<Text style={styles.supportTextOne} >
What are employee benefits offered by the company?
</Text>
</View>

           <View style={dash1?{display:'none'} : {display:'flex'} }>
					 <Text style={styles.supportTextTwo}>We offer a comprehensive benefits package, including health insurance, dental insurance, 
           vision insurance, paid time off, retirement plans, and more.
            You can find detailed information about our benefits on the company intranet.</Text>
						</View>

</TouchableOpacity>

<TouchableOpacity style={styles.infoSupport} onPress={()=>handleDash2()}>

<View style={styles.Info} >
{ dash2==true ? <Feather style={styles.supportIcon} name="chevron-down" size={24} color="black" /> :  <Octicons style={styles.supportIcon} name="dash" size={24} color="black" /> }
<Text style={styles.supportTextOne} >
How can I post a job opening on your website?
</Text>
</View>

           <View style={dash2?{display:'none'} : {display:'flex'} }>
					 <Text style={styles.supportTextTwo}>You can create a free account and post your job opening through our self-service platform. 
           We also offer premium advertising options for greater visibility.</Text>
						</View>

</TouchableOpacity>

<TouchableOpacity style={styles.infoSupport} onPress={()=>handleDash3()}>

<View style={styles.Info} >
{ dash3==true ? <Feather style={styles.supportIcon} name="chevron-down" size={24} color="black" /> :  <Octicons style={styles.supportIcon} name="dash" size={24} color="black" /> }
<Text style={styles.supportTextOne} >
What are the best practices for attracting talent?
</Text>
</View>

           <View style={dash3?{display:'none'} : {display:'flex'} }>
					 <Text style={styles.supportTextTwo}>We recommend highlighting your company culture, competitive compensation and benefits,
            and career development opportunities in your job postings.
            You can also leverage social media and employee referrals to reach a wider talent pool.
            </Text>
						</View>

</TouchableOpacity>

    </View>
  )
}

export default Support

const styles = StyleSheet.create({
  

  supportBtn:{
    width:width-50,
    marginHorizontal:25,
    height:70,
    flexDirection:'row',
    borderWidth:1,
    borderRadius:10,
    borderColor:'#ccc',
    alignItems:'center',
    backgroundColor:'#ccc',
    marginTop:20,
    elevation:20
  },

  phoneCircle:{
    marginHorizontal:20,
    borderColor:'#e3e3e3',
    borderWidth:1,
    height:40,
    width:40,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#e3e3e3',
    elevation:10
  },

  ourSupport:{
fontFamily: 'Inter_900Black'
  },

  supportLine:{
    alignSelf: 'center',
    height: 0.5,
    width:width-50,
    backgroundColor: '#ccc',    
    marginTop:30,
    marginBottom:15 ,
},


  asked:{
    fontFamily: 'Inter_900Black',
    marginHorizontal:25,
    marginVertical:20,
    color:'#999'
  },

  Info:{
    flexDirection:'row',
  },

  infoSupport:{
    backgroundColor:'#ccc',
    width:width-40,
    marginHorizontal:20,
    padding:10,
    borderRadius:10,
    marginBottom:15,
  },

  supportIcon:{
    marginRight:7
  },

  supportTextOne:{
    fontFamily: 'Inter_900Black',
    fontWeight:'500',
    fontSize:14
  },

  supportTextTwo:{
    marginTop:3,
    color:'#424242'
  }

})