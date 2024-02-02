import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs, limit, or, query, startAfter, where } from 'firebase/firestore'
import { db } from '../../firebaseConfig'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Services = ({navigation ,  route }) => {

    const userId = route.params.id;

    console.log(userId)

    const [users,setUsers]=useState([]);

    const [module,setModule]=useState('one')
  
  
  
    const [isLoading, setIsLoading] = useState(false);
  
    const [dataList,setDataList]=useState([])
    const [lastDocSnapshot, setLastDocSnapshot] = useState(null);


    const dataDetail=  collection(db,'userall') 
  
  useEffect( ()=>{
  
     
    setIsLoading(true);
  
  
   const q=query(dataDetail, where('workType' , 'array-contains-any' , [  { label: userId, value: userId }] ) ,limit(8))
  
    const getFile= async()=>{
     
      const dataa= await getDocs(q)
       setDataList([ ...dataa.docs.map((doc)=>({...doc.data(),id:doc.id}))])
       console.log(dataList)
       setLastDocSnapshot(dataa.docs[dataa.docs.length - 1]);
       setIsLoading(false);
    }
  
    
    getFile()
  
  },[])
  
  
    const loadMore=async()=>{
  
      if (!lastDocSnapshot || isLoading) return alert('there is no data');
      setIsLoading(true);
      const q =  query(dataDetail, or( where('workType' , 'array-contains-any' , [  { label: userId, value: userId }] ) ,
       where('workTypeApp' , 'array-contains-any' , [userId] ) ) ,  startAfter(lastDocSnapshot),limit(8));
      const dataa =await getDocs(q);
     // setData([...data, ...dataa.docs.map((doc)=>({...doc.data(),id:doc.id}))]);
      setDataList([ ...dataa.docs.map((doc)=>({...doc.data(),id:doc.id}))]);
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
   Listed workers are in ethiopia and waiting for you to contact them
</Text>

{
    dataList.map((item,key)=>{
      
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

export default Services

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