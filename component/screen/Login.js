import { StyleSheet, Text, View,ScrollView,Image,StatusBar ,TextInput ,FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import Icon from '@expo/vector-icons/Feather';
import { addDoc, collection , getDocs, query ,where } from 'firebase/firestore';
import { db, storage } from '../../firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';


const Login = ({navigation}) => {


  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');
  const [phoneForget,setPhoneForget] = useState('')


    let [fontsLoaded] = useFonts({
        Inter_900Black,
      });
    
     
      
        const [isChecked, setChecked] = useState(false);
        const [isCheckedd, setCheckedd] = useState(false);
        const [modal,setModal]=useState('1')
        const [isPasswordVisible, setIsPasswordVisible] = useState(false);
     
    
        console.log(isChecked)
        console.log(isCheckedd)
       
    
        const activeCheck=()=>{
           
            if(isChecked==false){
                setChecked(true)
                setCheckedd(false)
              
            }
          else{
            setChecked(false)
           
          }
        }
        const activeCheckk=()=>{
           
            if(isCheckedd==false){
              setChecked(false)
                setCheckedd(true)
                
            }
          else{
            setCheckedd(false)
          }
        }

        const forgetModal=()=>{
            setModal('2')
        }
        const prev=()=>{
            setModal('1')
        }


        const refDb=collection(db,'userall');


        const handelsubmitPhone=async()=>{
         
          const regExp=/^\d{9,10}$/;
          let formattedPhoneNumber = phone.replace(/^\+?251?0?(\d{9})$/, "$1");
         // Specifically handle numbers starting with "09" followed by 7 digits:
         formattedPhoneNumber = formattedPhoneNumber.replace(/^0(\d{9})$/, "$1");
       
        let formattedPhone = formattedPhoneNumber.replace(/^(\d{9})$/, "251$1");

        const q = await query(refDb, where('phone', '==', formattedPhone) ,where('pass','==',password));
       
       
           console.log(formattedPhone)
 
      
          if(isChecked==false && isCheckedd==false){
            Alert.alert('Error', 'Please select one of the checkBox', [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
          
          }
      
         else if(phone.length===0){
          Alert.alert('Error', 'Please Enter Phone Number', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
                    }
          else if(!regExp.test(formattedPhoneNumber)){
            Alert.alert('Error', 'Please Enter Valid Phone', [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
          }
          else if(password.length===0){
            Alert.alert('Error', 'Please Enter Password', [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
          }
      
         
      
          else{
            const querySnapshot = await getDocs(q);
            const matchingDocuments =  querySnapshot.docs;
            
            if (matchingDocuments.length > 0) {
                    if( isChecked==true){
                      navigation.navigate('Drawer')
                    }
                   else if( isCheckedd==true){
                    console.log('qetari')
                    }
               
            } else if  (matchingDocuments.length == 0)  {
              Alert.alert('Error', 'There is no user in this phone or if you forget your password please use forget password', [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
            }
          }
      
      
              //  setError(error.message);
            //    console.log(error)
      
          
            }


            const handelforgetsubmitPhone=async(e)=>{
        
              const regExp=/^\d{9,10}$/;
              let formattedPhoneNumber = phoneForget.replace(/^\+?251?0?(\d{9})$/, "$1");
             // Specifically handle numbers starting with "09" followed by 7 digits:
             formattedPhoneNumber = formattedPhoneNumber.replace(/^0(\d{9})$/, "$1");
           
            let formattedPhone = formattedPhoneNumber.replace(/^(\d{9})$/, "+251$1");
           
           
               console.log(formattedPhone)

               if(isChecked==false && isCheckedd==false){
                Alert.alert('Error', 'Please select one of the checkBox', [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
              
              }
          
             else if(phoneForget.length===0){
              Alert.alert('Error', 'Please Enter Phone Number', [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
                        }
              else if(!regExp.test(formattedPhoneNumber)){
                Alert.alert('Error', 'Please Enter Valid Phone', [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
              }
            

          
              else{
             console.log('just wait')
              }
          
          
              
                  
                    }
   


  return (
    <View style={styles.container}>

<StatusBar barStyle = 'light-content' backgroundColor='#7F87F9' />

{ modal ==='1' ? 
<ScrollView  >



<View style={styles.regView}>


<Text style={styles.regTextAmharic}>
ወይ
</Text>

<View style={styles.regViewImage}>
<Image style={styles.regImage} resizeMode={'contain'} source={require('../assets/service2.png')}/>
</View>


<Text style={styles.regTextAmharic}>
ዘሮ
</Text>
</View>






<Text style={styles.regText}>
Weyezero App
</Text>




<Text style={styles.regTextCreate}>
Login Account
</Text>

<View style={styles.regLine} />

<Text style={styles.regTextSign}>
sign in to continue
</Text>


<TouchableOpacity onPress={()=>activeCheck()} style={styles.checkView}>
<Checkbox style={styles.checkbox} value={isChecked}  />
<Text>I AM EMPLOYEE (ሰራተኛ)</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>activeCheckk()} style={styles.checkView}>
<Checkbox style={styles.checkbox} value={isCheckedd}  />
<Text>I AM EMPLOYER (ቀጣሪ)</Text>
</TouchableOpacity>

<TextInput  keyboardType='phone-pad' value={phone} onChangeText={(itemValue)=>setPhone(itemValue)}
 placeholderTextColor="#999" style={styles.textInLog} placeholder='Login with phone number'/>

<View style={styles.passView}>
<TextInput secureTextEntry={!isPasswordVisible} onChangeText={(itemValue)=>setPassword(itemValue)}
 placeholderTextColor="#999" style={styles.textInLogPass} placeholder='Password' />
<TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
  <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="#999" />
</TouchableOpacity>
</View>

<TouchableOpacity onPress={()=>forgetModal()} style={styles.forgetBtn}>
    <Text style={styles.forgetText}>
        Forget Password ?
    </Text>
</TouchableOpacity>

<View style={styles.loginPage}>
<Text style={styles.loginText}>Don't have an account? </Text>
 <TouchableOpacity onPress={()=>navigation.navigate('register')} >
<Text style={styles.loginBtn}>Sign up</Text>
</TouchableOpacity>
</View>

<View style={styles.logLine}/>

<TouchableOpacity onPress={handelsubmitPhone} style={styles.nextBtn}>
<Text style={styles.nextText}>Next</Text>
</TouchableOpacity>


    </ScrollView>   : <></> }

    { modal ==='2' ? 
<ScrollView  >



<View style={styles.regView}>


<Text style={styles.regTextAmharic}>
ወይ
</Text>

<View style={styles.regViewImage}>
<Image style={styles.regImage} resizeMode={'contain'} source={require('../assets/service2.png')}/>
</View>


<Text style={styles.regTextAmharic}>
ዘሮ
</Text>
</View>






<Text style={styles.regText}>
Weyezero App
</Text>




<Text style={styles.regTextCreate}>
Login Account
</Text>

<View style={styles.regLine} />

<Text style={styles.regTextSign}>
sign in to continue
</Text>


<TouchableOpacity onPress={()=>activeCheck()} style={styles.checkView}>
<Checkbox style={styles.checkbox} value={isChecked}  />
<Text>I AM EMPLOYEE (ሰራተኛ)</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>activeCheckk()} style={styles.checkView}>
<Checkbox style={styles.checkbox} value={isCheckedd}  />
<Text>I AM EMPLOYER (ቀጣሪ)</Text>
</TouchableOpacity>

<TextInput keyboardType='phone-pad' onChange={(inputValue)=>setPhoneForget(inputValue)} placeholderTextColor="#999" style={styles.textInLog} placeholder='Login with phone number'/>




<View style={styles.logLine}/>

<View style={styles.forgetView}>
<TouchableOpacity onPress={()=>prev()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Prev</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handelforgetsubmitPhone}  style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Next</Text>
</TouchableOpacity>
</View>



    </ScrollView>   : <></> }
  



</View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,      
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '100%',
    },
    
    regView:{
    flexDirection: 'row',
    marginHorizontal:20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
    
    },
    
    regViewImage:{
        height: 100,
        width:100,
    borderRadius: 50,
    backgroundColor:   '#7F87F9',
    color: '#FFFFFF',
    marginTop:20,
    
    },
    
    regImage:{
        height: 100,
        width:100,
    
    },
    
              regTextAmharic:{
                textShadowColor: '#7F87F9',
                textShadowOffset: {width: -5, height: 5},
                textShadowRadius: 20,
                marginTop:10,
                      textAlign:'center',
                      color: '#7F87F9', 
                      fontWeight: 'bold',
                      fontSize: 30,
                      marginBottom:10,
                      fontFamily: 'serif'
    },
              regText:{
                marginTop:10,
                      textAlign:'center',
                      color: '#7F87F9', 
                      fontWeight: 'bold',
                      fontSize: 30,
                      marginBottom:10,
                      fontFamily: 'monospace'
    },
    regTextDetail:{
        textAlign:'center',     
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom:20,
        marginHorizontal:10
    },
    regTextCreate:{
            marginTop:20,
            textAlign:'center',
          color: '#424242', 
         fontWeight: 'bold',
         fontSize: 40,
        marginBottom:10
    },
    
    regLine:{
        alignSelf: 'center',
        height: 2,
        width: 200,
        backgroundColor: '#e3e3e3',    
        marginBottom:15 ,
    },
    
    regTextSign:{
        textAlign:'center',     
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom:20,
        marginHorizontal:10
    },
    checkbox: {
        margin: 8,
        marginRight:20,
      },
    
      checkView:{
          alignItems:'center',
          flexDirection: 'row',
          justifyContent: 'center',
          borderColor:'#e3e3e3',
          borderWidth:1,
          marginBottom:20,
          width:250,
          marginHorizontal: 50,
          alignSelf:'center',
        paddingVertical:4,
        borderRadius: 10
      },
    
      loginPage:{   
          alignSelf:'center',
          flexDirection:'row',
          justifyContent: 'center',
          alignItems:'center'
      },
      loginText:{
        marginTop:10,
     fontSize:16,
     fontFamily: 'Inter_900Black',
      },
      loginBtn:{
        marginTop:10,
        fontSize:14,
        fontFamily: 'Inter_900Black',
        color:'rgb(40,167,69)',
    //    textShadowColor: 'rgb(40,167,69)',
     // textShadowOffset: {width: -1, height: 1},
    //  textShadowRadius: 5
      },
      logLine:{
        alignSelf: 'center',
        height: 2,
        width: 300,
        backgroundColor: '#e3e3e3',    
        marginBottom:15 ,
        marginTop:15
    },
    
    nextBtn:{
              alignSelf:'center',
                backgroundColor: 'rgb(40,167,69)',
            borderColor:'rgb(40,167,69)',
              width: 160,
             height:38,
              alignItems: 'center',
               justifyContent: 'center',
          
    },
    nextText:{
      color:'white',
      fontSize:18
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
    marginBottom:20,
    width:250,
    marginHorizontal: 50,

    },
    textInLogPass:{ 
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    padding: 10,
    paddingVertical:6,
    // Text styling
    fontSize: 16,
    color: '#000',
    width:200,
 marginRight:12.5
    },
    forgetBtn:{
        alignSelf:'center'
    },

    forgetText:{
        fontSize:14,
        fontFamily: 'Inter_900Black',
        color:'rgb(40,167,100)',
    },

 forgetView:{
     alignSelf:'center',
     flexDirection:'row'
 },

    nextBtnForget:{
        alignSelf:'center',
          backgroundColor: 'rgb(40,167,69)',
      borderColor:'rgb(40,167,69)',
        width: 130,
       height:38,
        alignItems: 'center',
         justifyContent: 'center',
         marginRight:10
    
},
nextTextForget:{
color:'white',
fontSize:18
},

passView:{
    alignItems: 'center',
    flexDirection:'row',
    alignSelf:'center',
    // Overall container styling
backgroundColor: '#fff',
borderWidth: 1,
borderColor: '#ccc',
// Text styling
fontSize: 16,
color: '#000',
marginBottom:20,
width:250,
}


})