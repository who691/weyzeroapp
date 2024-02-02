import { StyleSheet, Text, View ,ScrollView  , Dimensions ,StatusBar, TextInput, Image ,TouchableOpacity , ImageBackground} from 'react-native'
import React, { useEffect, useState } from 'react'

import { collection, getDocs, limit, query, startAfter } from 'firebase/firestore';
import { db } from '../../firebaseConfig';



import { NavigationContainer ,useNavigationContainerRef ,useNavigation } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './DetailScreen';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const DetailStack=createStackNavigator();



const Employe = () => {


    const navigation=useNavigation()

    const [user,setUser]=useState([])

    const refDb=collection(db,'userall');

    const [isLoading, setIsLoading] = useState(false);
    const [lastDocSnapshot, setLastDocSnapshot] = useState(null);
    const [lastDocSnapshotSearch, setLastDocSnapshotSearch] = useState(null);
  

    useEffect(()=>{

       

        const getData=async()=>{

            setIsLoading(true);

    const q=query(refDb,
        // orderBy(),
        // startAfter(),
         limit(8))

            const dataList=await getDocs(q)

            setUser((await dataList).docs.map((doc)=>({...doc.data(),id:doc.id})))
            setLastDocSnapshot(dataList.docs[dataList.docs.length - 1]);
            setIsLoading(false);

        }

        getData()

    },[])

    const loadMore=async()=>{

        

        if (!lastDocSnapshot || isLoading) return alert('there is no data');
        setIsLoading(true);
        const q =  query(refDb,   startAfter(lastDocSnapshot),limit(8));
        const dataa =await getDocs(q);
       // setData([...data, ...dataa.docs.map((doc)=>({...doc.data(),id:doc.id}))]);
        setUser([ ...dataa.docs.map((doc)=>({...doc.data(),id:doc.id}))]);
        setLastDocSnapshot(dataa.docs[dataa.docs.length - 1]);
        setIsLoading(false);
    
      }


      const goToDetail=(id)=>{
  
    navigation.navigate('detail',{userId:id})

      }
    


  return (
    <View>
        <ScrollView  >
     <View style={styles.workers}>

<Text style={styles.workText}>
   Available Workers
</Text>

<View style={styles.workLine} />


<Text style={styles.workTextt}>
    All of out listed workers are in ethiopia and waiting for you to contact them
</Text>

{
    user.map((item,key)=>{
      
        return(
<View key={item.id} style={styles.works}>
    <Image  resizeMode='cover'  style={styles.worksImg} source={{uri: item.urlId}}  
        onError={(error) => console.error('Image loading error:', error)} 
        fallback={<Text>Loading...</Text>} />
    <Text style={styles.worksName} >
     {item.fname}
    </Text>
    <Text style={styles.worksage} >
    {item.age}
    </Text>
    <Text style={styles.worksarea} >
     {item.country}
    </Text>
   
  
    <Text style={styles.worksservice} >{
  item.workType?.map((value) => (
   <Text key={value.id} style={styles.worksservice} > {  value.value + ' ' + '*'  }  </Text>
  ))
  
}   </Text> 

  


    <TouchableOpacity onPress={()=>goToDetail(item.id)} style={styles.btnWork}>
<Text style={styles.textWorkThreee}>
   View Profile
</Text>
 </TouchableOpacity>

</View>
        )
    })
}


{
    /*-------
    
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
<View style={styles.works}>
    <Image resizeMode='cover'  style={styles.worksImg} source={require('../assets/icons/worker7.png')}/>
    <Text style={styles.worksName} >
     Eden Genene
    </Text>
    <Text style={styles.worksage} >
    24 years old
    </Text>
    <Text style={styles.worksarea} >
     Addis Ababa, Kolfe Keranio
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
    <Image resizeMode='cover'  style={styles.worksImg} source={require('../assets/icons/worker8.jpeg')}/>
    <Text style={styles.worksName} >
     Rodas Alema
    </Text>
    <Text style={styles.worksage} >
    20 years old
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
    ------------*/
}




<TouchableOpacity  onPress={()=>loadMore()} style={styles.btnWorkFind}>
<Text style={styles.textWorkThreeee}>
  Find More Workers
</Text>
 </TouchableOpacity>

</View>
</ScrollView>


    </View>

  )
}

export default Employe

const styles = StyleSheet.create({
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
})