import { Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { LinearGradient } from 'expo-linear-gradient';

import {Picker} from '@react-native-picker/picker';
import { db } from '../../firebaseConfig';
import { and, collection, getDocs, limit, query, startAfter, where } from 'firebase/firestore';


import { MultipleSelectList } from 'react-native-dropdown-select-list'

import { Ionicons } from '@expo/vector-icons';

const hieghtLinear = Dimensions.get('window').height


const windowWidth = Dimensions.get('window').width;

const windowHeight=Dimensions.get('screen').height


const Search = () => {

  const [selected, setSelected] = React.useState([]);

  const data = [
    {key:'1', value:'Mobiles', disabled:true},
    {key:'2', value:'Appliances'},
    {key:'3', value:'Cameras'},
    {key:'4', value:'Computers', disabled:true},
    {key:'5', value:'Vegetables'},
    {key:'6', value:'Diary Products'},
    {key:'7', value:'Drinks'},
]


  const [modal,setModal]=useState('1')

  const [user,setUser]=useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [lastDocSnapshot, setLastDocSnapshot] = useState(null);
  const [lastDocSnapshotSearch, setLastDocSnapshotSearch] = useState(null);

    const [age, setAge] = useState('0-120');
    const [selectedState,setSelectedState]=useState('');
    const [specificArea, setSpecificArea] = useState();
    const [religion, setReligion] = useState('');
    const [empState, setEmpState] = useState('');
    const [salaryState, setSalaryState] = useState('');
    const [language, setLanguage] = useState('');
    const [classState,setClassState] = useState('');
    const [expState,setExpState] = useState('');
    const [child,setChild] = useState('');
    const [live,setLive] = useState('');

    const [serviceState, setServiceState] = useState('');


    const refDb=collection(db,'userall');

    const searchAll=async()=>{


      setModal('2')


      
      const ageRangeValues =  age.split("-");
      let minimumAge = 0;
      let maxAge = 0;
      let ageNum = [];
  

    
     
     
      if (ageRangeValues.length > 1) {
        minimumAge = parseInt(ageRangeValues[0]);
        maxAge = parseInt(ageRangeValues[1]);
      }
  
     let queryConditions = []; // Start with an empty array to collect conditions

     if (salaryState.length > 0) {
      queryConditions.push(where('salary', '==', salaryState));
    }
    
    if (child.length > 0) {
      queryConditions.push(where('haveChild', '==', child));
    }
 
    if (religion.length > 0) {
      queryConditions.push(where('religion' , '==' , religion));
    }

    if (selectedState.length > 0) {
      queryConditions.push(where('country' , '==' , selectedState));
    }
    if (classState.length > 0) {
      queryConditions.push(where('haveclass' , '==' , classState));
    }
  
     if (expState.length > 0) {
      queryConditions.push(where('haveExpireance' , '==' , expState));
    }
    if (language.length > 0) {
      queryConditions.push(where('language' , '==' , language));
    }
    if (empState.length > 0) {
      queryConditions.push(where('isPartime' , '==' , empState));
    }
  
     if (live.length > 0) {
      queryConditions.push(where('liveIn' , '==' , live));
    }

     if ( age.length > 0) {
       queryConditions.push(where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge));
     }
     
     // ... continue adding other conditions similarly
     
     const queryCondition =  queryConditions.length > 0
       ? and(...queryConditions) // Combine conditions using and()
       : null;

      
     
  
       const q =  query(refDb, queryCondition , limit(8));

      
            
      const dataSearch= await getDocs(q);
      setUser(dataSearch.docs.map((doc)=>({...doc.data(),id:doc.id})))
      setLastDocSnapshotSearch(dataSearch.docs[dataSearch.docs.length - 1]);
      setIsLoading(false);
  // console.log(agea)
    }

    const loadMoreSearch=async()=>{
      if (!lastDocSnapshotSearch) return alert('there is no data');
      setIsLoading(true);

      
      const ageRangeValues =  age.split("-");
      let minimumAge = 0;
      let maxAge = 0;
      let ageNum = [];
  

    
     
     
      if (ageRangeValues.length > 1) {
        minimumAge = parseInt(ageRangeValues[0]);
        maxAge = parseInt(ageRangeValues[1]);
      }
  
     let queryConditions = []; // Start with an empty array to collect conditions

  if (salaryState.length > 0) {
      queryConditions.push(where('salary', '==', salaryState));
    }
    
    if (child.length > 0) {
      queryConditions.push(where('haveChild', '==', child));
    }
 
    if (religion.length > 0) {
      queryConditions.push(where('religion' , '==' , religion));
    }
    
    if (selectedState.length > 0) {
      queryConditions.push(where('country' , '==' , selectedState));
    }
    if (classState.length > 0) {
      queryConditions.push(where('haveclass' , '==' , classState));
    }
  
     if (expState.length > 0) {
      queryConditions.push(where('haveExpireance' , '==' , expState));
    }
    if (language.length > 0) {
      queryConditions.push(where('language' , '==' , language));
    }
    if (empState.length > 0) {
      queryConditions.push(where('isPartime' , '==' , empState));
    }
  
     if (live.length > 0) {
      queryConditions.push(where('liveIn' , '==' , live));
    }

     if ( age.length > 0) {
       queryConditions.push(where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge));
     }
     
     // ... continue adding other conditions similarly
     
     const queryCondition =  queryConditions.length > 0
       ? and(...queryConditions) // Combine conditions using and()
       : null;

      const q =  query(refDb, queryCondition, startAfter(lastDocSnapshotSearch),limit(8));
      const dataSearch =await getDocs(q);
     // setData([...data, ...dataa.docs.map((doc)=>({...doc.data(),id:doc.id}))]);
      setUser([ ...dataSearch.docs.map((doc)=>({...doc.data(),id:doc.id}))]);
      setLastDocSnapshotSearch(dataSearch.docs[dataSearch.docs.length - 1]);
      setIsLoading(false);
  
    }
   

  return (
    <View style={styles.container}>



{
  modal=='1'? <LinearGradient
  // Button Linear Gradient
  colors={['lightcyan', 'lightblue', '#192f6a']}
  style={styles.back}>

<Text style={styles.searchTextOne}>
Available Emebets
  </Text>

  <Text style={styles.searchTextTwo}>
  Advance Search With Filters 
  </Text>

<ScrollView style={styles.searchView}>

<Picker
selectedValue={age}
style={styles.pickerInLog}
onValueChange={(itemValue, itemIndex) =>
setAge(itemValue)
}>
<Picker.Item label="Select Age" value="Select Age" />
<Picker.Item label="Below-18" value="0-18" />
<Picker.Item label="18-24" value="18-24" />
<Picker.Item label="25-30" value="25-30" />
<Picker.Item label="31-Above" value="31-60" />
</Picker>
  
<Picker
selectedValue={selectedState}
style={styles.pickerInLog}
onValueChange={(itemValue, itemIndex) =>
setSelectedState(itemValue)
}>
<Picker.Item label="Select City" value="Select City" />
<Picker.Item label="Addis Ababa" value="Addis Ababa" />
<Picker.Item label="Jimma" value="Jimma" />
</Picker>
<Picker
selectedValue={specificArea}
style={styles.pickerInLog}
onValueChange={(itemValue, itemIndex) =>
setSpecificArea(itemValue)
}>
<Picker.Item label="Select Specific Area" value="Select Specific Area" />
<Picker.Item label="Lebu" value="Lebu" />
<Picker.Item label="Kaliti" value="Kaliti" />
</Picker>
<Picker
selectedValue={religion}
style={styles.pickerInLog}
onValueChange={(itemValue, itemIndex) =>
setReligion(itemValue)
}>
<Picker.Item label="Select Religion" value="Select Religion" />
<Picker.Item label="Orthodox" value="Orthodox" />
<Picker.Item label="Muslim" value="Muslim" />
<Picker.Item label="Protestant" value="protestant" />
</Picker>
<Picker
selectedValue={language}
style={styles.pickerInLog}
onValueChange={(itemValue, itemIndex) =>
setLanguage(itemValue)
}>
<Picker.Item label="Select Language" value="" />
<Picker.Item label="Amharic" value="Amharic" />
<Picker.Item label="Oromifa" value="Oromifa" />
<Picker.Item label="Tigregna" value="Tigregna" />
</Picker>
<Picker
selectedValue={empState}
style={styles.pickerInLog}
onValueChange={(itemValue, itemIndex) =>
setEmpState(itemValue)
}>
<Picker.Item label="Select Type" value="" />
<Picker.Item label="Full Time" value="Full Time" />
<Picker.Item label="Part Time" value="Part Time" />
</Picker>
<Picker
selectedValue={classState}
style={styles.pickerInLog}
onValueChange={(itemValue, itemIndex) =>
setClassState(itemValue)
}>
<Picker.Item label="Learner ?" value="" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>
<Picker
selectedValue={live}
style={styles.pickerInLog}
onValueChange={(itemValue, itemIndex) =>
setLive(itemValue)
}>
<Picker.Item label="residence" value="residence" />
<Picker.Item label="Live In" value="Live In" />
<Picker.Item label="Live Out" value="Live Out" />
</Picker>
<Picker
selectedValue={child}
style={styles.pickerInLog}
onValueChange={(itemValue, itemIndex) =>
setChild(itemValue)
}>
<Picker.Item label="Has Child ?" value="" />
<Picker.Item label="Yes" value="Yes" />
<Picker.Item label="No" value="No" />
</Picker>
<Picker
selectedValue={expState}
style={styles.pickerInLog}
onValueChange={(itemValue, itemIndex) =>
setExpState(itemValue)
}>
<Picker.Item label="Select Experience  ?" value="" />
<Picker.Item label="More Than 5 Years" value="More Than 5 Years" />
<Picker.Item label="More Than 2 Years" value="More Than 2 Years" />
<Picker.Item label="More Than 1 Years" value="More Than 1 Years" />
<Picker.Item label="I don't have any" value="I don't have any" />
</Picker>
<Picker
selectedValue={salaryState}
style={styles.pickerInLog}
onValueChange={(itemValue, itemIndex) =>
setSalaryState(itemValue)
}>
<Picker.Item label="Select Salary ?" value="" />
<Picker.Item label="1000-2000" value="1000-2000" />
<Picker.Item label="2000-3000" value="2000-3000" />
<Picker.Item label="Nigotiable" value="Nigotiate" />
</Picker>

<MultipleSelectList 
 boxStyles={{  alignSelf:'center',
 // Overall container styling
backgroundColor: '#ccc',
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
marginHorizontal: 50,}}
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        onSelect={() => console.log(selected)} 
        label="Categories"
    />

   </ScrollView>

   <TouchableOpacity onPress={()=>searchAll()}  style={styles.btnSearchLast}>
 <Text style={styles.textSearchLast}>
   Search
 </Text>
  </TouchableOpacity>

      </LinearGradient>

      :  <></>
}

     
     {
      modal=='2'? <LinearGradient
      // Button Linear Gradient
      colors={['lightcyan', 'lightblue', '#192f6a']}

     >



      <TouchableOpacity onPress={()=>setModal('1')} style={[styles.buttonContainer,{marginBottom:20,flexDirection:'row'}]} >

      <Ionicons style={{marginRight:15 }} name="arrow-back-circle-sharp" size={24} color="white" />
        <Text style={styles.buttonText}>Go Back</Text>

 
    </TouchableOpacity>

      <ScrollView  >

{
    user.map((item,key)=>{
      
        return(
<View  key={item.id} style={styles.works}>
    <Image resizeMode='cover'  style={styles.worksImg} source={{uri: item.urlId}}  
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
   <Text  style={styles.worksservice} > {  value.value + ' ' + '*'  }  </Text>
  ))
  
}   </Text> 

  


    <TouchableOpacity style={styles.btnWork}>
<Text style={styles.textWorkThreee}>
   View Profile
</Text>
 </TouchableOpacity>



</View>
        )
    })
}

<TouchableOpacity  onPress={()=>loadMoreSearch()} style={styles.btnWorkFind}>
<Text style={styles.textWorkThreeee}>
  Find More Workers
</Text>
 </TouchableOpacity>

</ScrollView>



        </LinearGradient>  :  <></>
     }

           

    </View>
  )
}

export default Search

const styles = StyleSheet.create({

    container:{
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        width: '100%',
        height: 1100
    }, 

    back:{
        width: '100%',
        height: hieghtLinear
    },

    searchView:{
        alignSelf:'center',
        backgroundColor:'white',
        borderColor:'white',
        borderWidth:1,
        elevation:20,
        width:'88%',
        marginTop:10,
        height: 1100
    },

    searchTextOne:{
        fontSize: 30,
        fontWeight: 'bold',
         color:'#192f6a',
         marginTop:75,
         textAlign:'center'
    
    },
    
    searchTextTwo:{
        fontSize: 24,
        fontWeight: 'bold',
         color:'#3b5998',
         marginHorizontal:40, 
         marginTop:6,
         textAlign:'center'   
    },

    pickerInLog:{
        alignSelf:'center',
        // Overall container styling
      backgroundColor: '#ccc',
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

      btnSearchLast:{
        alignSelf:'center',
        backgroundColor: 'lightblue',
        borderColor:'lightblue',
        width: 140,
        height:40,
        marginTop:20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',   
        marginBottom:100 
      },
      textSearchLast:{
        alignSelf:'center',
        fontSize:18,
        fontWeight:'bold',
        color:'black'
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
        alignSelf:'center'
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
                marginTop:50,
                alignSelf:'center',
                alignItems: 'center',
                justifyContent: 'center',
                   marginBottom: 100
                  },
                  buttonContainer: {
                    marginTop: 100,
                    width: '40%',
                    alignSelf:'center',
                    backgroundColor: '#2e64e5',
                    padding: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                    elevation:20
                  },
                  buttonText: {
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#ffffff',
                    
                  },
    

})