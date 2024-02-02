import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View ,Keyboard, TouchableWithoutFeedback ,KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'

import   MapView , { Marker } from 'react-native-maps';



import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { db } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const Contact = () => {

  const dbRef= collection(db,'usermsg');

  
  const [userName,setUserName]=useState('');
const [email,setEmail]=useState('');
const [userMsg,setMsg]=useState('');

  const feedBack= async ()=>{

    if(userName.length==0){

      Alert.alert('Error', 'Please Enter Full Name', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    
    }
    else if(email.length==0){
      Alert.alert('Error', 'Please Enter Email', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    else if(userMsg.length==0){
      Alert.alert('Error', 'Please Enter Your Feedback', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }


    else{
      await addDoc(dbRef,{ name:userName, email:email, msg:userMsg })
      setEmail('');
     
      setUserName('');
     
      setMsg('');
     
      Alert.alert('Error', 'Tnx For your feedback 😊', [
       {text: 'OK', onPress: () => console.log('OK Pressed')},
     ]);
    }

    
  
  }



  var markers = [
    {
      coordinate: {
        longitude: 38.7642638,
        latitude: 8.9880118,
    },      
      title: 'Foo Place',
      subtitle: '1234 Foo Drive'
    }
  ];


  return (



   

<View style={styles.container}  onTouchStart={()=>Keyboard.dismiss()} >

<KeyboardAvoidingView style={{flex: 1}}>

<Text style={styles.getText}>
GET IN TOUCH
</Text>

<Text style={styles.conText}>
Send Us Message
       </Text>

       <View style={styles.conLine} />


       <MapView
        annotations={markers}
       initialRegion={{
  latitude: 8.9880118,
  longitude: 38.7642638,
  latitudeDelta: 0.0922,
    longitudeDelta: 0.0421, // Adjust as needed for desired zoom level
}} style={styles.map}

>

<Marker
                    title="Meskel Flower"
                    description="Around Villa Verde Lounge"
                    coordinate={{"latitude":8.9880118,"longitude":38.7642638}}
                />

</MapView>




<ScrollView  >
  

<View style={styles.conView}>
  <Text style={styles.conTextCon}>
  Any Question?  Contact Us
  </Text>

    <View style={styles.conviewOne}>

    <EvilIcons style={[styles.iconCon,{fontSize:34} ]} name="location" size={24} color="black" />

<View style={styles.conviewTwo}>
  <Text style={styles.conTextOne}>
  Company Address :
  </Text>
  <Text style={styles.conTextTwo}>
  Meskel Flower, Addis Ababa
  </Text>
</View>

    </View>

    <View style={styles.conviewOne}>
    <AntDesign style={styles.iconCon} name="mail" size={24} color="black" />
<View style={styles.conviewTwo}>
  <Text style={styles.conTextOne}>
  Email Address :
  </Text>
  <Text style={styles.conTextTwo}>
  abelahabtamu1@gmail.com
  </Text>
</View>

    </View>

    <View style={styles.conviewOne}>

    <Feather  style={styles.iconCon} name="phone" size={24} color="black" />

<View style={styles.conviewTwo}>
  <Text style={styles.conTextOne}>
  Phone Number :
  </Text>
  <Text style={styles.conTextTwo}>
  call us in    +251930104785
  </Text>
</View>

    </View>

</View>


      <TextInput  keyboardType='default' value={userName} onChangeText={(itemValue)=>setUserName(itemValue)} 
      placeholderTextColor="#999" style={styles.textInLog} placeholder='Your Name'/>

      <TextInput  keyboardType='email-address' value={email} onChangeText={(itemValue)=>setEmail(itemValue)} 
      placeholderTextColor="#999" style={styles.textInLog} placeholder='Email'/>


<TextInput multiline={true}  keyboardType='default' value={userMsg} onChangeText={(itemValue)=>setMsg(itemValue)} 
 placeholderTextColor="#999" style={styles.textInLogFeed} placeholder='Your Feedback'/>


<TouchableOpacity  onPress={feedBack} style={styles.btnCon}>
       <Text style={styles.textCon}>
          submit Now
       </Text>
        </TouchableOpacity>

</ScrollView>


</KeyboardAvoidingView>
</View>



  )
}

export default Contact

const styles = StyleSheet.create({

  container:{
    flex: 1, 
    justifyContent: 'center',
    backgroundColor: '#e3e3e3',
    width: '100%',
}, 

    textInLog:{
        alignSelf:'center',
         // Overall container styling
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      paddingVertical:6,
      margin: 10,
      // Text styling
      fontSize: 16,
      color: '#000',
      marginBottom:10,
      width:250,
      marginHorizontal: 50,
      
      },
    textInLogFeed:{
        alignSelf:'center',
         // Overall container styling
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      paddingVertical:6,
      margin: 10,
      // Text styling
      fontSize: 16,
      color: '#000',
      marginBottom:20,
      width:350,
      height:150,
      marginHorizontal: 50,
      
      },

      getText:{
        fontSize: 25,
        fontWeight: 'bold',
         color:'#28a745',
         marginTop:20,
         textAlign:'center'
      },

      conText:{
        fontSize: 40,
        fontWeight: 'bold',
         color:'gray',
         marginTop:10,
         textAlign:'center'
    },

    conLine:{
     alignSelf: 'center',
     height: 2,
     width: 250,
     backgroundColor: 'gray',    
     marginTop:15,
     marginBottom:15 ,
 },

 map: {
    width: '100%',
    height: '25%',

  },

  conTextCon:{
    fontSize: 30,
    fontWeight: 'bold',
     color:'#28a745',
     marginTop:10,
     textAlign:'center'
},

conView:{
  marginTop:10,
  marginBottom:30,
  width:'90%',
  alignSelf:'center',
  alignItems:'center',
  justifyContent:'center'
},

conviewOne:{
  flexDirection:'row',
},

conviewTwo:{
  flexDirection:'column',
},

iconCon:{
  color:'gray',
  alignSelf:'center',
  marginTop:30,
  marginRight:30,
fontSize:26
},

  conTextOne:{
    fontSize: 20,
    fontWeight: 'bold',
     color:'#28a745',
     textAlign:'center',
     marginTop:30
},
  conTextTwo:{
    fontSize: 16,
    fontWeight: 'bold',
     color:'gray',
     textAlign:'center',
     marginTop:5,
},

btnCon:{
  alignSelf:'center',
  backgroundColor: '#28a745',
  borderColor:'#28a745',
  width: 200,
  height:56,
  borderRadius: 10,
  marginTop:10,
  alignItems: 'center',
  justifyContent: 'center',   
  marginBottom:30 
},
textCon:{
  alignSelf:'center',
  fontSize:24,
  fontWeight:'bold',
  color:'white'
}

})