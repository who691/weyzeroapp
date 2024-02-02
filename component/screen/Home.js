
import { StyleSheet, Text, View ,ScrollView  , Dimensions ,StatusBar, TextInput, Image ,TouchableOpacity , ImageBackground} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {


  return (

    <View style={styles.container}>
    <ScrollView  >

    
<Text style={styles.textHomeTwo}>
      We are healping thousands of families in finding their perfect weyzero
      </Text>
<Text style={styles.textHomeTwoo}>
      Weyzero
      </Text>


<View style={styles.homeview}>
<TouchableOpacity  onPress={()=>navigation.navigate('detail')} style={styles.btnSplashh}>
       <Text style={styles.textSplashThreee}>
          Register
       </Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=>navigation.navigate('contact')} style={styles.btnSplashhh}>
       <Text style={styles.textSplashThreeee}>
           Search Serategna
       </Text>
        </TouchableOpacity>
</View>
      

      <Image style={styles.imageHome} resizeMode={'contain'} source={require('../assets/slpash/img1.png')}/>


{/*---
<View style={styles.safeFlex}>
<View style={styles.safeView} >
        
        <View style={styles.safeVieww} >
            <Text style={styles.textView} >
                Safe Hire
            </Text>
            <Text style={styles.textVieww} >
Hire Safe Only Weyzero-Verified Workers
            </Text>
        </View>

        </View>     
    <View style={styles.safeView} >
        
        <View style={styles.safeVieww} >
            <Text style={styles.textView} >
               Instant Hiring
            </Text>
            <Text style={styles.textVieww} >
We know you're busy,Hire instantly from your computer or smart phone.
            </Text>
        </View>

        </View>    
</View>

<View style={styles.safeVieww} >
        
        <View style={styles.safeVieww} >
            <Text style={styles.textView} >
               Transparent Pricing
            </Text>
            <Text style={styles.textVieww} >
    No hidden fees. What you see is what you pay.
            </Text>
        </View>

        </View>  
  ---*/} 


   <View style={styles.service}>



  <Text style={styles.serviceText}> Explore Services </Text>

  <View style={styles.serviceLine} />



       <View style={styles.services}>
           <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/nurse.png')}/>
           <Text style={styles.servicesText} >
            Private Nurse
           </Text>
       </View>

       <View style={styles.services}>
           <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/caregiver_2512441-removebg-preview.png')}/>
           <Text style={styles.servicesText} >
            Adult Care
           </Text>
       </View>

       <View style={styles.services}>
           <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/changer_2219870-removebg-preview.png')}/>
           <Text style={styles.servicesText} >
            Baby Sitter
           </Text>
       </View>

       <View style={styles.services}>
           <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/housekeeper.png')}/>
           <Text style={styles.servicesText} >
           House Keeper
           </Text>
       </View>

       <View style={styles.services}>
           <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/teacher_10618283-removebg-preview.png')}/>
           <Text style={styles.servicesText} >
           Tutor
           </Text>
       </View>
       <View style={styles.services}>
           <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/clean.png')}/>
           <Text style={styles.servicesText} >
           Cleaner
           </Text>
       </View>
       <View style={styles.services}>
           <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/waiter_6103215-removebg-preview.png')}/>
           <Text style={styles.servicesText} >
           Waitress
           </Text>
       </View>
       <View style={styles.services}>
           <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/cooker.png')}/>
           <Text style={styles.servicesText} >
           Cooking
           </Text>
       </View>

       <TouchableOpacity  onPress={()=>navigation.navigate('home')} style={styles.btnService}>
       <Text style={styles.textServiceThreeee}>
          More Service
       </Text>
        </TouchableOpacity>

   </View>
   <View style={styles.workers}>

       <Text style={styles.workText}>
          Available Workers
       </Text>

       <View style={styles.workLine} />


       <Text style={styles.workTextt}>
           All of out listed workers are in ethiopia and waiting for you to contact them
       </Text>

       <View style={styles.works}>
           <Image resizeMode='cover'  style={styles.worksImg} source={require('../assets/icons/worker1.jpg')}/>
           <Text style={styles.worksName} >
            Meaza degu
           </Text>
           <Text style={styles.worksage} >
           24 years old
           </Text>
           <Text style={styles.worksarea} >
            Addis Ababa, Alem Bank
           </Text>
           <Text style={styles.worksservice} >
            Female Tutor
           </Text>


           <TouchableOpacity  onPress={()=>navigation.navigate('home')} style={styles.btnWork}>
       <Text style={styles.textWorkThreee}>
          View Profile
       </Text>
        </TouchableOpacity>

       </View>
       <View style={styles.works}>
           <Image resizeMode='cover'  style={styles.worksImg} source={require('../assets/icons/worker2.jpg')}/>
           <Text style={styles.worksName} >
            Selamawit Ageze
           </Text>
           <Text style={styles.worksage} >
           34 years old
           </Text>
           <Text style={styles.worksarea} >
            Addis Ababa, Saris
           </Text>
           <Text style={styles.worksservice} >
            Female Tutor
           </Text>


           <TouchableOpacity  onPress={()=>navigation.navigate('home')} style={styles.btnWork}>
       <Text style={styles.textWorkThreee}>
          View Profile
       </Text>
        </TouchableOpacity>

       </View>
       <View style={styles.works}>
           <Image resizeMode='cover'  style={styles.worksImg} source={require('../assets/icons/worker3.jpg')}/>
           <Text style={styles.worksName} >
            Adonay Bekele
           </Text>
           <Text style={styles.worksage} >
           20 years old
           </Text>
           <Text style={styles.worksarea} >
            Addis Ababa, Bole
           </Text>
           <Text style={styles.worksservice} >
            Sales
           </Text>


           <TouchableOpacity  onPress={()=>navigation.navigate('home')} style={styles.btnWork}>
       <Text style={styles.textWorkThreee}>
          View Profile
       </Text>
        </TouchableOpacity>

       </View>
       <View style={styles.works}>
           <Image resizeMode='cover'  style={styles.worksImg} source={require('../assets/icons/worker4.jpg')}/>
           <Text style={styles.worksName} >
            Rahel Daniel
           </Text>
           <Text style={styles.worksage} >
           26 years old
           </Text>
           <Text style={styles.worksarea} >
            Addis Ababa, Bole
           </Text>
           <Text style={styles.worksservice} >
            Waitress
           </Text>


           <TouchableOpacity  onPress={()=>navigation.navigate('home')} style={styles.btnWork}>
       <Text style={styles.textWorkThreee}>
          View Profile
       </Text>
        </TouchableOpacity>

       </View>
       <View style={styles.works}>
           <Image resizeMode='cover'  style={styles.worksImg} source={require('../assets/icons/worker5.jpg')}/>
           <Text style={styles.worksName} >
            Mahlet Gizachew
           </Text>
           <Text style={styles.worksage} >
           34 years old
           </Text>
           <Text style={styles.worksarea} >
            Addis Ababa, Kebena
           </Text>
           <Text style={styles.worksservice} >
            Cleaning
           </Text>


           <TouchableOpacity  onPress={()=>navigation.navigate('home')} style={styles.btnWork}>
       <Text style={styles.textWorkThreee}>
          View Profile
       </Text>
        </TouchableOpacity>

       </View>
       <View style={styles.works}>
           <Image resizeMode='cover'  style={styles.worksImg} source={require('../assets/icons/worker6.jpg')}/>
           <Text style={styles.worksName} >
            Bezawit Elias
           </Text>
           <Text style={styles.worksage} >
           24 years old
           </Text>
           <Text style={styles.worksarea} >
            Addis Ababa, Bole
           </Text>
           <Text style={styles.worksservice} >
            Female Tutor
           </Text>


           <TouchableOpacity  onPress={()=>navigation.navigate('home')} style={styles.btnWork}>
       <Text style={styles.textWorkThreee}>
          View Profile
       </Text>
        </TouchableOpacity>

       </View>
     
   
     

       <TouchableOpacity  onPress={()=>navigation.navigate('home')} style={styles.btnWorkFind}>
       <Text style={styles.textWorkThreeee}>
         Find More Workers
       </Text>
        </TouchableOpacity>

   </View>


<View style={styles.howItwork}>
 <Text style={styles.howItworktext}>
How It Work
 </Text>

 <View style={styles.howLine} />


 <Text style={styles.howItworktextt}>
You are just one step away to contact your worker 
 </Text>


<View style={styles.howItworkD}>
<Text style={styles.howItworktextD}>
Find One
 </Text>
 <Text style={styles.howItworktexttD}>
Look for your worker based on your requirement
 </Text>
 
</View>
<View style={styles.howItworkD}>
<Text style={styles.howItworktextD}>
Pay Fee
 </Text>
 <Text style={styles.howItworktexttD}>
 Pay 20-25% commission using Mobile banking, visiting banks or call us at 0930104785
 </Text>
 
</View>
<View style={styles.howItworkD}>
<Text style={styles.howItworktextD}>
Contact Emebet
 </Text>
 <Text style={styles.howItworktexttD}>
 We will give you her contact so that you can call her right away
 </Text>
 
</View>



</View>


<View style={styles.client}>
<Text style={styles.clienttext}>
CLIENT FEEDBACKS
 </Text>
 <Text style={styles.clienttextt}>
 What Client's Say
 </Text>
 <View style={styles.clientline}/>

<ScrollView style={styles.scrollClient} snapToAlignment={"center"}
snapToInterval={windowWidth-40}
showsHorizontalScrollIndicator={false} horizontal={true}>
<View style={styles.clientView} >
    <Text style={styles.clienttextView} >
            Hello, Really great website! How do we contact the employees? the VIEW CONTACT links are broken.
            </Text>
        <View style={styles.clientVieww} >

            <Image style={styles.clientViewwImg} resizeMode={'contain'} source={require('../assets/slpash/avatar-removebg-preview.png')}/>

            <View style={styles.clientViewww}>
            <Text style={styles.clienttextVieww} >
            Rodas taye
            </Text>
            <Text style={styles.clienttextViewww} >
            tayerodas2@gmail.com
            </Text>
            </View>
            
            
        </View>

        </View>    
<View style={styles.clientViewtwo} >
    <Text style={styles.clienttextView} >
    Hello, Really great website! How do we contact the employees? the VIEW CONTACT links are broken. Hi, I made a marketing video for your website for free, can I send it here? Respond with, "yes" if so. Hello, Really great website! How do we contact the employees? the VIEW CONTACT links are broken. 
    Hi, I made a marketing video for your website for free, can I send it here? Respond with, "yes" if so.
            </Text>
        <View style={styles.clientVieww} >

            <Image style={styles.clientViewwImg} resizeMode={'contain'} source={require('../assets/slpash/avatar-removebg-preview.png')}/>

            <View style={styles.clientViewww}>
            <Text style={styles.clienttextVieww} >
            Rodas taye
            </Text>
            <Text style={styles.clienttextViewww} >
            tayerodas2@gmail.com
            </Text>
            </View>
            
            
        </View>

        </View>    
 
        <View style={styles.clientView} >
    <Text style={styles.clienttextView} >
    Hello, Really great website! How do we contact the employees? the VIEW CONTACT links are broken.
            </Text>
        <View style={styles.clientVieww} >

            <Image style={styles.clientViewwImg} resizeMode={'contain'} source={require('../assets/slpash/avatar-removebg-preview.png')}/>

            <View style={styles.clientViewww}>
            <Text style={styles.clienttextVieww} >
            Rodas taye
            </Text>
            <Text style={styles.clienttextViewww} >
            tayerodas2@gmail.com
            </Text>
            </View>
            
            
        </View>

        </View>   

</ScrollView>

</View>
        
     
    </ScrollView>
    

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
       
        justifyContent: 'center',
        backgroundColor: '#e3e3e3',
        width: '100%',
    }, 
    textHomeTwo:{
        color: '#192f6a',
          fontSize: 28,
          textTransform:'capitalize',
          marginHorizontal:10,
          fontWeight: 'bold',
          fontFamily: 'serif',
          textAlign: 'center',
          marginTop:30,
         },
    textHomeTwoo:{
        color: '#409B81',
          fontSize: 32,
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          marginHorizontal:30,
          marginTop: 20,
          textTransform:'uppercase'
         },


         homeview:{
          flexDirection: 'row',
          marginHorizontal:20,
          gap:10,
          marginBottom:20
         },


         textSplashThreee:{
            color: '#e3e3e3',
              fontSize: 20,
              marginHorizontal:10,
              fontWeight: '800',
              fontFamily: 'Roboto',
              textAlign: 'center',
             
             },
         textSplashThreeee:{
            color: '#e3e3e3',
              fontSize: 20,
              marginHorizontal:10,
              fontWeight: '800',
              fontFamily: 'Roboto',
              textAlign: 'center',
             
             },
             btnSplashh:{
           backgroundColor: '#20A57F',
           borderColor:'#20A57F',
           width: 131,
           height:56,
           borderRadius: 10,
           marginTop:30,
           alignItems: 'center',
           justifyContent: 'center',
             },
             btnSplashhh:{
           backgroundColor: '#ffac4b',
           borderColor:'#ffac4b',
           width: 200,
           height:56,
           borderRadius: 10,
           marginTop:30,
           alignItems: 'center',
           justifyContent: 'center',    
             },
         

         imageHome:{
             height: 300,
             alignSelf: 'center'
         },

         safeFlex:{
         flexDirection: 'row'
         },

         safeView:{
          backgroundColor: '#989EAE',
           width: 180,
           height:125,
           marginHorizontal:2,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginBottom: 20,
            elevation: 20,
            zIndex: 99, // added zIndex    
         },
         safeVieww:{
          backgroundColor: '#989EAE',
           width: 180,
           height:125,
           marginHorizontal:2,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginTop: 0,
            elevation: 20,
            zIndex: 99, 
         },
 
         textView:{
            color: '#FFFFFF',
            textAlign: 'center',
            fontSize: 22,
            marginVertical:10,
            fontWeight: 'bold',
         },
         textVieww:{
            color: '#fff',
            textAlign: 'center'
         },

         service:{
             alignItems: 'center',
             justifyContent: 'center',
             
         },
        serviceText:{
            fontSize: 40,
            fontWeight: 'bold',
            color: 'gray'
        },
        serviceLine:{
            alignSelf: 'center',
            height: 2,
            width: 250,
            backgroundColor: 'gray',    
            marginTop:15,
            marginBottom:15 ,
        },
        
        services:{
            width: windowWidth - 150,
            height:150,
            backgroundColor: '#ccc',
            marginTop:50,
            alignItems:'center',
            justifyContent:'center',
            borderRadius: 20,
            elevation:20,
         zIndex: 99,
        },
        servicesText:{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFFFFF'
        },



        servicesImg:{
           
            height:80,
           
        },

        textServiceThreeee:{
            color: '#e3e3e3',
              fontSize: 20,
              marginHorizontal:10,
              fontWeight: '800',
              fontFamily: 'Roboto',
              textAlign: 'center',
             
             },

             btnService:{
                backgroundColor: '#20A57F',
                borderColor:'#20A57F',
                width: 200,
                height:56,
                borderRadius: 10,
                marginTop:30,
                alignItems: 'center',
                justifyContent: 'center',
                   
                  },
                  workers:{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:30
                },
               workText:{
                   fontSize: 40,
                   fontWeight: 'bold',
                    color:'gray',
                    marginTop:30
               },

               workLine:{
                alignSelf: 'center',
                height: 2,
                width: 250,
                backgroundColor: 'gray',    
                marginTop:15,
                marginBottom:15 ,
            },

               workTextt:{
                   fontSize: 20,
                   fontWeight: 'bold',
                   marginHorizontal:20,
                   textAlign:'center',
                   marginTop:18,
                   color:'gray'
               },
               works:{
                   width: windowWidth - 100,
                   height:400,
                   borderColor:'#ccc',
                   borderWidth:2,
                   backgroundColor: 'transparent',
                   marginTop:50,
                   alignItems:'center',
                   justifyContent:'center',
                   elevation:-20,
                   borderRadius: 20,
                   paddingTop:  0,
                   
               },
               worksName:{
                   fontSize: 22,
                   fontWeight: 'bold',
                   color: '#424242',
                   
               },
               worksage:{
                   fontSize: 18,
                   fontWeight: 'bold',
                   color: '#999',
                   marginTop:5
               },
               worksarea:{
                   fontSize: 18,
                   fontWeight: 'bold',
                   color: '#999',
               },
               worksservice:{
                   fontSize: 18,
                   fontWeight: 'bold',
                   color: '#999',
               },
               worksImg:{
                width: '100%'  ,
                height: 210,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
               },
       
               textWorkThreee:{
                   color: '#e3e3e3',
                     fontSize: 20,
                     marginHorizontal:10,
                     fontWeight: '800',
                     fontFamily: 'Roboto',
                     textAlign: 'center',
                    
                    },
               textWorkThreeee:{
                   color: '#e3e3e3',
                     fontSize: 20,
                     marginHorizontal:10,
                     fontWeight: '800',
                     fontFamily: 'Roboto',
                     textAlign: 'center',
                   
                    },
       
                    btnWork:{
                       backgroundColor: '#20A57F',
                       borderColor:'#20A57F',
                       width: 180,
                       height:46,
                       borderRadius: 5,
                       marginTop:20,
                       alignItems: 'center',
                       justifyContent: 'center',
                          marginBottom: 15 
                         },
                    btnWorkFind:{
                       backgroundColor: '#20A57F',
                       borderColor:'#20A57F',
                       width: 220,
                       height:56,
                       borderRadius: 5,
                       marginTop:40,
                       alignItems: 'center',
                       justifyContent: 'center',
                          marginBottom: 15 
                         },
                         howItwork:{
                         marginTop:50,
                         alignItems: 'center',
                         justifyContent: 'center',
                         
                         },
                         howItworktext:{
                            fontSize: 40,
                            fontWeight: 'bold',
                            fontFamily:'serif',
                            color:'gray'
                        },
                        howItworktextt:{
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginHorizontal:20,
                            textAlign:'center',
                           marginBottom:40,
                           color:'gray',
                           fontFamily:'serif',
                        },
                    howItworktextD:{
                        marginTop:10,
                  textAlign:'center',
                  color: '#7F87F9', 
                  fontWeight: 'bold',
                  fontSize: 30,
                  marginBottom:10,
                  fontFamily:'serif',
                  
                    },
                    howItworktexttD:{
                        textAlign:'center',     
                  fontWeight: 'bold',
                  fontFamily:'serif',
                  fontSize: 18,
                  marginBottom:20,
                  marginHorizontal:10,
                  color:'gray'
                    },

                    howLine:{
                        alignSelf: 'center',
                        height: 2,
                        width: 250,
                        backgroundColor: 'gray',    
                        marginTop:10,
                        marginBottom:25 ,
                    },

                    client:{
                        marginTop:50,
                        alignItems: 'center',
                        justifyContent: 'center',    
                    },
                    clienttext:{
                        fontSize: 40,
                        fontWeight: 'bold',
                color: '#28a745'
                    },
                   clienttextt:{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginHorizontal:20,
                        textAlign:'center',
                       marginBottom:4,
                    },
                    clientline:{
                        height: 3,
                        width: 100,
                        backgroundColor: '#28a745',    
                        marginBottom:30                   
                    },
                    scrollClient:{
                        marginHorizontal:20
                    },
                    clientView:{
                        backgroundColor: '#989EAE',
           width: windowWidth-40,
           height:250,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginTop: 0,
          
            elevation: 20,
            zIndex: 99, 
            paddingHorizontal: 10,
            paddingTop:20
                    },
                    clientViewtwo:{
                        backgroundColor: '#989EAE',
           width: windowWidth-50,
           height:450,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginTop: 0,
            elevation: 20,
            zIndex: 99, 
            paddingHorizontal: 10,
            paddingTop:20,
            marginHorizontal:10,
            marginBottom:20
                    },

                    clienttextView:{
                        color: '#FFFFFF',
                        textAlign: 'center',
                        fontSize: 20,
                        marginVertical:10,
                        fontWeight: 'bold',
                    },
               

                    clientVieww:{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:30,
                   
                    },

                    clientViewwImg:{                      
                        height: 70,
                        marginLeft: -80
                    },
                    clienttextVieww:{
                        marginTop:10,
                  textAlign:'center',
                  color: '#000', 
                  fontWeight: 'bold',
                  fontSize: 30,
              
                    },
                    clienttextViewww:{
                      
                        textAlign:'center',
                        color: '#424242', 
                        fontWeight: 'bold',
                        fontSize: 16,
                    },
 
})