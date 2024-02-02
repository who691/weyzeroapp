import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { LinearGradient } from 'expo-linear-gradient';
import * as Linking from 'expo-linking';

import { FontAwesome } from '@expo/vector-icons';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';


const hieghtLinear = Dimensions.get('window').height

const DetailScreen = ({ route }) => {

  const userId = route.params.userId;

  console.log(userId)

  const [dataDetaill,setDataDetail]=useState([])


    const [rating,setRating]=useState(0);

    const myArray = [1,2,3,4,5];


const ratingDatabase=collection(db,'rating');




    useEffect(()=>{

     const dataDetail=  doc(db,'userall',userId) 
      const getFile= async()=>{
       
        const data= await getDoc(dataDetail)
         setDataDetail(data.data())
    
      }
    
      
      getFile()
    
    },[])

    const handelRating = async()=>{
      await  addDoc(ratingDatabase, {
         rating: Number(rating) , 
        fname: dataDetaill.fname 
        , lname: dataDetaill.lname  })

        Alert.alert('Cool', 'Tnx for giving us rating 😊', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
     
    }
    
   

  return (
    <View style={styles.container}>

      <LinearGradient
        // Button Linear Gradient
        colors={['lightcyan', 'lightblue', '#192f6a']}
        style={styles.back}>
        
        <View style={styles.detailCircle}>
        <Image style={styles.detailImage} resizeMode='cover'  source={{uri: dataDetaill.urlId}}  
        onError={(error) => console.error('Image loading error:', error)} 
        fallback={<Text>Loading...</Text>} />
        </View>
         <ScrollView style={styles.detailView}>
         <View style={{ flex: 1, justifyContent: 'center' ,alignItems:'center' }}>
        

        <Text style={styles.detailTextOne}>
        {dataDetaill.fname}  {dataDetaill.lname} 
        </Text>

        <Text style={styles.detailTextTwo}>
       Age:-  {dataDetaill.age}
        </Text>

        <Text style={styles.detailTextThree}>
        {dataDetaill.country}, {dataDetaill.cityId}
        </Text>

        <Text style={styles.detailTextThree} >{
  dataDetaill.workType?.map((value) => (
   <Text key={value.id} style={styles.detailTextThree} > {  value.value + ' ' + '*'  }  </Text>
  ))
  
}   </Text> 


        <TouchableOpacity    onPress={() => {
    Linking.openURL(`tel:+251930104785`); // Replace with the actual phone number
  }} style={styles.btnDetail}>
       <Text style={styles.textDetail}>
          Call Us
       </Text>
        </TouchableOpacity>


        <View style={styles.detailLine} />
<View style={styles.detailViewList}>
    <Text style={styles.detailTextList}>Religion</Text> 
    <Text style={styles.detailTextListOne}> {dataDetaill.religion}  </Text>
</View>
        <View style={styles.detailLine} />

        
<View style={styles.detailViewList}>
    <Text style={styles.detailTextList}>Language</Text> 
    <Text style={styles.detailTextListOne}> {dataDetaill.language}  </Text>
</View>
        <View style={styles.detailLine} />


<View style={styles.detailViewList}>
    <Text style={styles.detailTextList}>Employee Type</Text> 
    <Text style={styles.detailTextListOne}> {dataDetaill.isPartime}  </Text>
</View>
        <View style={styles.detailLine} />


<View style={styles.detailViewList}>
    <Text style={styles.detailTextList}>Residence</Text> 
    <Text style={styles.detailTextListOne}> {dataDetaill.liveIn}  </Text>
</View>
        <View style={styles.detailLine} />


<View style={styles.detailViewList}>
    <Text style={styles.detailTextList}>Student</Text> 
    <Text style={styles.detailTextListOne}> {dataDetaill.haveclass}  </Text>
</View>
        <View style={styles.detailLine} />


<View style={styles.detailViewList}>
    <Text style={styles.detailTextList}> Education Level</Text> 
    <Text style={styles.detailTextListOne}> {dataDetaill.Education}  </Text>
</View>
        <View style={styles.detailLine} />


<View style={styles.detailViewList}>
    <Text style={styles.detailTextList}> Expected Salary</Text> 
    <Text style={styles.detailTextListOne}>{dataDetaill.salary} </Text>
</View>
        <View style={styles.detailLine} />


<View style={styles.detailViewList}>
    <Text style={styles.detailTextList}> Services</Text> 
    <Text style={styles.detailTextListOne}> Cooking  </Text>
</View>
        <View style={styles.detailLine} />


<View style={styles.detailViewList}>
    <Text style={styles.detailTextList}> Children</Text> 
    <Text style={styles.detailTextListOne}> {dataDetaill.haveChild} </Text>
</View>
        <View style={styles.detailLine} />


<View style={styles.detailViewList}>
    <Text style={styles.detailTextList}> Experience</Text> 
    <Text style={styles.detailTextListOne}> {dataDetaill.haveExpireance} </Text>
</View>
        <View style={styles.detailLine} />


<View style={styles.detailViewList}>
    <Text style={styles.detailTextList} > Skill</Text> 
    <Text style={[styles.detailTextListOne,{ fontSize:12, marginHorizontal:20,marginBottom:10}]}> {dataDetaill.tellAbout}  I am qualified to offer this care in the comfort of the patient's own home. my goal is to provide the customized care needed by my clients, all from one source.
         I am highly trained and certified to perform the following advanced medical tasks: • Oral medication set up • Non-injectable or injectable medication administration 
        • Insulin syringe filling • Removal/replacement of aseptic dressings. 
        • Skin management, skin condition monitoring, and wound care     </Text>
</View>
        

        
        </View>
         </ScrollView>

       


       <View style={styles.rating}>
   
       <Text style={styles.ratingText}>
       GIVE US YOUR RATING
       </Text>

       <View style={{flexDirection:'row'}} >
    {myArray.map((star, index) => {
      const currentRating = index + 1;
      return (
        <TouchableOpacity  key={index} onPress={() => setRating(currentRating)}>
          <FontAwesome
           name="star-o"
           size={30}
            color={currentRating <= rating ? '#ffc107' : '#e4e5e9'} />
        </TouchableOpacity>
      );
    })}


{ /*-----
     console.log(rating)
-------*/
}

  </View>

  <TouchableOpacity onPress={()=>handelRating()}  style={styles.btnDetailLast}>
       <Text style={styles.textDetailLast}>
          Give Rating
       </Text>
        </TouchableOpacity>

     
        </View>


       
      </LinearGradient>
     
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({

    container:{
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: '#e3e3e3',
        width: '100%',
        height: 1100
    }, 

    back:{
        width: '100%',
        height: hieghtLinear
    },

    detailView:{
        alignSelf:'center',
        backgroundColor:'white',
        borderColor:'white',
        borderWidth:1,
        elevation:20,
        width:'88%',
        height: 1000,
        marginTop:80,
        
    },

    detailCircle:{
        borderColor:'white',
        borderWidth:1,
        width:60,
        height:60,
        borderRadius:30,
        position:'absolute',
        top:50,
        alignSelf:'center',
        zIndex:90
    },
    detailImage:{
        width:60,
        height:60,
        borderRadius:30,
       
    },

    
 detailTextOne:{
    fontSize: 30,
    fontWeight: 'bold',
     color:'#192f6a',
     marginTop:40,
     marginHorizontal:40,

},

detailTextTwo:{
    fontSize: 24,
    fontWeight: 'bold',
     color:'#3b5998',
     marginHorizontal:40, 
     marginTop:6   
},
detailTextThree:{
    fontSize: 24,
    fontWeight: 'bold',
     color:'#4c669f',
     marginHorizontal:40, 
     marginTop:6   
},


btnDetail:{
    alignSelf:'center',
    backgroundColor: '#28a745',
    borderColor:'#28a745',
    width: 160,
    height:46,
    borderRadius: 15,
    marginTop:30,
    alignItems: 'center',
    justifyContent: 'center',   
    marginBottom:20 
  },
  textDetail:{
    alignSelf:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  },

  detailLine:{
    alignSelf: 'center',
    height: 1,
    width: 290,
    backgroundColor: 'gray',    
    marginTop:10,
    marginBottom:10 ,
},


detailViewList:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:290
},

detailTextList:{
    fontSize: 18,
    fontWeight: 'bold',
     color:'#3b5998',
},
detailTextListOne:{
    fontSize: 14,
    fontWeight: 'bold',
     color:'#999',
},
btnDetailLast:{
    alignSelf:'center',
    backgroundColor: 'lightblue',
    borderColor:'lightblue',
    width: 140,
    height:40,
    marginTop:10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',   
    marginBottom:50 
  },
  textDetailLast:{
    alignSelf:'center',
    fontSize:18,
    fontWeight:'bold',
    color:'black'
  },
ratingText:{
    alignSelf:'center',
    fontSize:18,
    fontWeight:'bold',
    color:'white',
    marginVertical:5,
    marginTop:10
},
  rating:{
    flexDirection:'column',
  alignItems:'center',
  justifyContent:'center'
  }


})