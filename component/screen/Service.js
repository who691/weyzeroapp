import { StyleSheet, Text, View ,ScrollView  , Dimensions ,StatusBar, TextInput, Image ,TouchableOpacity , ImageBackground} from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Service = ({navigation}) => {

    
          const servicesPart=(serviceName)=>{
        
        navigation.navigate('services' , {id:serviceName} )
        
          }

  return (
    <View>
        <ScrollView>
      <View style={styles.service}>



<Text style={styles.serviceText}> Explore Services </Text>

<View style={styles.serviceLine} />



     <TouchableOpacity onPress={()=>servicesPart('privatenurse')} style={styles.services}>
         <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/nurse.png')}/>
         <Text style={styles.servicesText} >
          Private Nurse
         </Text>
     </TouchableOpacity>

     <TouchableOpacity  onPress={()=>servicesPart('adultcare')} style={styles.services}>
         <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/caregiver_2512441-removebg-preview.png')}/>
         <Text style={styles.servicesText} >
          Adult Care
         </Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={()=>servicesPart('babysitter')} style={styles.services}>
         <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/changer_2219870-removebg-preview.png')}/>
         <Text style={styles.servicesText} >
          Baby Sitter
         </Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={()=>servicesPart('housekeeper')} style={styles.services}>
         <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/housekeeper.png')}/>
         <Text style={styles.servicesText} >
         House Keeper
         </Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={()=>servicesPart('tutor')} style={styles.services}>
         <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/teacher_10618283-removebg-preview.png')}/>
         <Text style={styles.servicesText} >
         Tutor
         </Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>servicesPart('cleaner')} style={styles.services}>
         <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/clean.png')}/>
         <Text style={styles.servicesText} >
         Cleaner
         </Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>servicesPart('waitress')} style={styles.services}>
         <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/waiter_6103215-removebg-preview.png')}/>
         <Text style={styles.servicesText} >
         Waitress
         </Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>servicesPart('cooking')} style={styles.services}>
         <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/cooker.png')}/>
         <Text style={styles.servicesText} >
         Cooking
         </Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>servicesPart('careforspecialneeds')} style={styles.services}>
         <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/caregiver_2512441-removebg-preview.png')}/>
         <Text style={styles.servicesText} >
         Care For Special Needs
         </Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>servicesPart('maid')} style={styles.services}>
         <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/housekeeper_6966743-removebg-preview.png')}/>
         <Text style={styles.servicesText} >
        Maid
         </Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>servicesPart('hairstylist')} style={styles.services}>
         <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/hair_9951559-removebg-preview.png')}/>
         <Text style={styles.servicesText} >
         Hairstylist
         </Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>servicesPart('receptionist')} style={styles.services}>
         <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/customer-support_2114809-removebg-preview.png')}/>
         <Text style={styles.servicesText} >
         Receptionist
         </Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>servicesPart('sales')} style={styles.services}>
         <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/financial-advisor_4256762-removebg-preview.png')}/>
         <Text style={styles.servicesText} >
         Sales
         </Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>servicesPart('chef(ሼፍ)')} style={styles.services}>
         <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/chef_1249857-removebg-preview.png')}/>
         <Text style={styles.servicesText} >
         Chef (ሼፍ)
         </Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>servicesPart('accountant')} style={styles.services}>
         <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/accountant_2607547-removebg-preview.png')}/>
         <Text style={styles.servicesText} >
         Accountant
         </Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>servicesPart('secretary')} style={[styles.services,{marginBottom:50}]}>
         <Image resizeMode='contain'  style={styles.servicesImg} source={require('../assets/icons/blogger_5449026-removebg-preview.png')}/>
         <Text style={styles.servicesText} >
         Secretary
         </Text>
     </TouchableOpacity>

    

 </View>
 </ScrollView>
    </View>
  )
}

export default Service

const styles = StyleSheet.create({
    service:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:60
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
              marginBottom:20
             },
})