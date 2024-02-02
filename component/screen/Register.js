import { StyleSheet, Text, View,ScrollView,Image,StatusBar,Button ,TextInput ,FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';

import Icon from '@expo/vector-icons/Feather';

import {Picker} from '@react-native-picker/picker';

import { MultipleSelectList } from 'react-native-dropdown-select-list'

import * as ImagePicker from 'expo-image-picker';
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../../firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const Register = ({navigation}) => {


  

  const [fname,setFname]=useState('');
  const [lname,setLname]=useState('');
  const [email,setEmail]=useState('');
  const [age,setAge]=useState('');
  const [phone,setPhone]=useState('');
  const [lang,setLang]=useState('');
  const [self,setSelf]=useState('')
  const [otp,setOtp]=useState('');
  const [confirmm,setConfirmm]=useState(null);
  const [imageValue,setImageValue]=useState([]);
  const [idValue,setIdValue]=useState([]);
  const [tinValue,setTinValue]=useState([]);
  const [selectedState,setSelectedState]=useState('');
  const [selectedArea,setSelectedArea]=useState('');
  const [selectedWork,setSelectedWork]=useState([]);
  const [confirmPassword,setConfirmPassword]=useState('');
  const [password,setPassword]=useState('');
  const [legalNum,setLegalNum]=useState('');
  const [tin,setTin]=useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionSpeci, setSelectedOptionSpeci] = useState('');
  const [countryState, setCountryState] = useState('');
  const [empState, setEmpState] = useState('');
  const [salaryState, setSalaryState] = useState('');
  const [religion, setReligion] = useState('');
  const [language, setLanguage] = useState('');
  const [classState,setClassState] = useState('');
  const [expState,setExpState] = useState('');
  const [eduState,setEduState] = useState('');
  const [child,setChild] = useState('');
  const [live,setLive] = useState('');

  const [selected, setSelected] = React.useState([]);

  const [image, setImage] = useState(null);
  const [imagePro, setImagePro] = useState(null);
  const [imageLicense, setImageLicense] = useState(null);



  
  
  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  const options = [
    { value: 'cooking', label: 'cooking' },
    { value: 'adult care', label: 'adult care' },
    { value: 'private nurse', label: 'private nurse' } ,
    { value: 'baby sitter', label: 'baby sitter' },
    { value: 'house keeper', label: 'house keeper' },
    { value: 'waitress', label: 'waitress' } ,
    { value: 'care for special needs', label: 'care for special needs' } ,
    { value: 'maid', label: 'maid' } ,
    { value: 'hair stylist', label: 'hair stylist' } ,
    { value: 'receptionist', label: 'receptionist' } ,
    { value: 'sales', label: 'sales' } ,
    { value: 'chef(ሼፍ)', label: 'chef (ሼፍ)' } ,
    { value: 'accountant', label: 'accountant' } ,
    { value: 'secretary', label: 'secretary' } ,
    { value: 'tutor', label: 'tutor' } ,
  ]
  const optionss = [
    { value: 'cooking', label: 'cooking' },
    { value: 'adult care', label: 'adult care' },
    { value: 'private nurse', label: 'private nurse' } ,
    { value: 'baby sitter', label: 'baby sitter' },
    { value: 'house keeper', label: 'house keeper' },
    { value: 'waitress', label: 'waitress' } ,
    { value: 'care for special needs', label: 'care for special needs' } ,
    { value: 'maid', label: 'maid' } ,
    { value: 'hairstylist', label: 'hair stylist' } ,
    { value: 'receptionist', label: 'receptionist' } ,
    { value: 'sales', label: 'sales' } ,
    { value: 'chef(ሼፍ)', label: 'chef (ሼፍ)' } ,
    { value: 'accountant', label: 'accountant' } ,
    { value: 'secretary', label: 'secretary' } ,
    { value: 'tutor', label: 'tutor' } ,
  ]

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  const [selectedLanguage, setSelectedLanguage] = useState();
 
    const [isChecked, setChecked] = useState(false);
    const [isCheckedd, setCheckedd] = useState(false);
    const [isCheckeddd, setCheckeddd] = useState(false);
    const [isCheckedTerm, setCheckedTerm] = useState(false);

    const [modal,setModal]=useState('1')
    const [qetari,setQetari]=useState('1');
  const [wekil,setWekil]=useState('1');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);



    console.log(isChecked)
    console.log(isCheckedd)
    console.log(isCheckeddd)

    const activeCheck=()=>{
       
        if(isChecked==false){
            setChecked(true)
            setCheckedd(false)
            setCheckeddd(false)
        }
      else{
        setChecked(false)
       
      }
    }
    const activeCheckk=()=>{
       
        if(isCheckedd==false){
          setChecked(false)
            setCheckedd(true)
            setCheckeddd(false)
        }
      else{
        setCheckedd(false)
      }
    }
    const activeCheckkk=()=>{
       
        if(isCheckeddd==false){
            setCheckeddd(true)
            setChecked(false)
          setCheckedd(false)
        }
      else{
        setCheckeddd(false)
      }
    }
    const activeCheckTerm=()=>{
       
        if(isCheckedTerm==false){
            setCheckedTerm(true)
        }
      else{
        setCheckedTerm(false)
      }
    }

    const nextModal=()=>{
      if(isChecked==true){
setModal('2')
      }

      else if(isCheckedd==true){
        setModal('')
        setQetari('2')
    }
      else if(isCheckeddd==true){
        setModal('')
        setWekil('2')
    }

  }

  const nextModalOne=()=>{
    const regExp=/^\d{9,10}$/;

  let formattedPhoneNumber = phone.replace(/^\+?251?0?(\d{9})$/, "$1");
// Specifically handle numbers starting with "09" followed by 7 digits:
formattedPhoneNumber = formattedPhoneNumber.replace(/^0(\d{9})$/, "$1");

let formattedPhone = formattedPhoneNumber.replace(/^(\d{9})$/, "+251$1");

console.log(formattedPhone)

if(fname.length==0){

  Alert.alert('Error', 'Please Enter First Name', [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

}

else if(lname.length==0){
  Alert.alert('Error', 'Please Enter Last Name', [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}
else if(age.length==0){
  Alert.alert('Error', 'Please Enter Age', [
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

else if(selectedState.length===0){
  Alert.alert('Error', 'Please Select City', [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}

else{
  setModal('3')
}
   
  }


  const nextModalTwo=()=>{

    if(otp.length==0){
      Alert.alert('Error', 'Please Enter Otp', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  
    else{
      setModal('4')
    } 
  }


  const nextModalThree=()=>{

    if(selectedArea.length==0){
      Alert.alert('Error', 'Please Select Specific Location', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
     
    }
  
    else if(religion.length==0){
      Alert.alert('Error', 'Please Select Religion', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  
    else if(language.length==0){
      Alert.alert('Error', 'Please Select Language', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      
    }
    else if(empState.length==0){
      Alert.alert('Error', 'Please Select Employement Type', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      
    }
    else if(salaryState.length==0){
      Alert.alert('Error', 'Please Select Monthly Expected Salary', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      
    }

    else{
      setModal('5')
    }
  
  }
  

  const nextModalFour=()=>{

    if(selectedWork.length==0){
      Alert.alert('Error', 'Please Select Service', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  
    else if(eduState.length==0){
      Alert.alert('Error', 'Please Select Education Level', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  
    else if(expState.length==0){
      Alert.alert('Error', 'Please Select Experience', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    else if(classState.length==0){
      Alert.alert('Error', 'Please Fill The "Do You Take Class" Area', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }

    else{
      setModal('6')
    }

    
    
  }
  const nextModalFive=()=>{

    if(child.length==0){
      Alert.alert('Error', 'Please Fill The "Do You Have Children" Area', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      
    }
    else if(live.length==0){
      Alert.alert('Error', 'Please Fill The "Live In Or Live Out Area" Area', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    
    }
  
    else if(!image){
      Alert.alert('Error', 'Please Upload Profile Image', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    
    }
    else if(!imagePro){
      Alert.alert('Error', 'Please Upload ID or Passport', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
     
    }

    else{
      setModal('7')
    }

   
  }
  

  const prev=()=>{
    setModal('1')
}
  const prevOne=()=>{
    setModal('2')
}
  const prevTwo=()=>{
    setModal('3')
}
  const prevThree=()=>{
    setModal('4')
}
  const prevFour=()=>{
    setModal('5')
}
  const prevFive=()=>{
    setModal('6')
}


const nextQetariOne=()=>{

  if(fname.length==0){

    Alert.alert('Error', 'Please Enter First Name', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  
  }
  
  else if(lname.length==0){
    Alert.alert('Error', 'Please Enter Last Name', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
  else if(email.length==0){
    Alert.alert('Error', 'Please Enter Email', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }

  else{
    setQetari('3')
  }
 
}
const nextQetariTwo=()=>{

  const regExp=/^\d{9,10}$/;

  let formattedPhoneNumber = phone.replace(/^\+?251?0?(\d{9})$/, "$1");
// Specifically handle numbers starting with "09" followed by 7 digits:
formattedPhoneNumber = formattedPhoneNumber.replace(/^0(\d{9})$/, "$1");

let formattedPhone = formattedPhoneNumber.replace(/^(\d{9})$/, "+251$1");

console.log(formattedPhone)

if(phone.length===0){
  Alert.alert('Error', 'Please Enter Phone Number', [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}
 
else if(!regExp.test(formattedPhoneNumber)){
  Alert.alert('Error', 'Please Enter Valid Phone', [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}

else if(selectedState.length===0){
  Alert.alert('Error', 'Please Select City', [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}

else if(selectedWork.length==0){
  Alert.alert('Error', 'Please Select Service', [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}

else if(password.length==0){
  Alert.alert('Error', 'Please Enter Password', [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
  }
  else if(confirmPassword.length==0){
    Alert.alert('Error', 'Please Enter Confirm Password', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
  else if(confirmPassword!==password){
    Alert.alert('Error', 'Confirm Password IS Not Match With Password', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }

  else if(!imagePro){
    Alert.alert('Error', 'Please Upload ID or Passport', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }

  else{
    setQetari('4')
  }
 
}
const nextQetariThree=()=>{
  if(otp.length==0){
    Alert.alert('Error', 'Please Enter Otp', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
  else{
    setQetari('5') 
  }
 
}



const prevQetari=()=>{
  setModal('1')
  setQetari('')
  setWekil('')
}
const prevQetariTwo=()=>{
  setModal('')
  setQetari('2')
  setWekil('')
}
const prevQetariThree=()=>{
  setModal('')
  setQetari('3')
  setWekil('')
}
const prevQetariFour=()=>{
  setModal('')
  setQetari('4')
  setWekil('')
}




const nextWekilOne=()=>{

  let regEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/ ;
  const regExp=/^\d{9,10}$/;

  let formattedPhoneNumber = phone.replace(/^\+?251?0?(\d{9})$/, "$1");
// Specifically handle numbers starting with "09" followed by 7 digits:
formattedPhoneNumber = formattedPhoneNumber.replace(/^0(\d{9})$/, "$1");

let formattedPhone = formattedPhoneNumber.replace(/^(\d{9})$/, "+251$1");

console.log(formattedPhone)


  if(fname.length==0){
    Alert.alert('Error', 'Please Enter First Name', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
  
  else if(lname.length==0){
    Alert.alert('Error', 'Please Enter Last Name', [
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
  

  else if(email.length==0){
    Alert.alert('Error', 'Please Enter Email', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }

  else if(!regEmail.test(email) ){
    Alert.alert('Error', 'Please Enter Valid Email', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }

  else if(selectedState.length===0){
    Alert.alert('Error', 'Please Select City', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }


  else{
    setWekil('3') 
  }

 
  
}

const nextWekilTwo=()=>{
  if(otp.length==0){
    Alert.alert('Error', 'Please Enter Otp', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
  else{
  setWekil('4')
  }
}

const nextWekilThree=()=>{

  if(selectedArea.length==0){
    Alert.alert('Error', 'Please Select Specific Location', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]); 
  }

  else if(!imagePro){
    Alert.alert('Error', 'Please Upload ID or Passport', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }

  else{
    setWekil('5')
  }
  
}
const nextWekilFour=()=>{
 if(password.length==0){
    Alert.alert('Error', 'Please Enter Password', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
    }
    else if(confirmPassword.length==0){
      Alert.alert('Error', 'Please Enter Confirm Password', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    else if(confirmPassword!==password){
      Alert.alert('Error', 'Confirm Password IS Not Match With Password', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }

    else{
      setWekil('6')
    }
  
}


const prevWekil=()=>{
  setModal('1')
  setWekil('')
}
const prevWekilTwo=()=>{
  setModal('')
  setWekil('2')
  setQetari('')
}
const prevWekilThree=()=>{
  setModal('')
  setWekil('3')
  setQetari('')
}
const prevWekilFour=()=>{
  setModal('')
  setWekil('4')
  setQetari('')
}
const prevWekilFive=()=>{
  setModal('')
  setWekil('5')
  setQetari('')
}


const refDb=collection(db,'userall')
const refQetari=collection(db,'qetari')
const refWekil=collection(db,'wekil')

const pickImageProfile = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: false,
    quality: 1,
  });

//  console.log(result);

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};


const pickImageId = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: false,
    quality: 1,
  });

//  console.log(result);

  if (!result.canceled) {
    setImagePro(result.assets[0].uri);
  }
};


const pickImageLicense = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: false,
    quality: 1,
  });

//  console.log(result);

  if (!result.canceled) {
    setImageLicense(result.assets[0].uri);
  }
};


async function uploadImage(ref, content) {
  await uploadBytes(ref, content);
  return getDownloadURL(ref);
}

const uploadImagePhoto = async () => {

    if (!image) return; // Ensure an image is selected

        const img = await fetch(image);
const imgBlob = await img.blob();
    const fileName = image.split('/').pop(); // Extract filename from URI
  const refImage = ref(storage, `Images/${fileName}`);
  return uploadImage(refImage, imgBlob);
};

const uploadImageId = async () => {
  if (!imagePro) return; // Ensure an image is selected

  const img = await fetch(imagePro);
const imgBlob = await img.blob();
const fileName = imagePro.split('/').pop(); // Extract filename from URI
const refImage = ref(storage, `Id/${fileName}`);
return uploadImage(refImage, imgBlob);
};

const uploadImageValue = async () => {
  if (!imageLicense) return; // Ensure an image is selected

  const img = await fetch(imageLicense);
const imgBlob = await img.blob();
const fileName = imageLicense.split('/').pop(); // Extract filename from URI
  const refImage = ref(storage, `Idimage/${fileName}`);
  return uploadImage(refImage, imgBlob);
};


const submitEmployee=async()=>{ 

  let regEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/ ;


  if(email.length==0){
    Alert.alert('Error', 'Please Enter Email', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
 
  }

  else if(!regEmail.test(email) ){
    Alert.alert('Error', 'Please Enter Valid Email', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
 else if(password.length==0){
  Alert.alert('Error', 'Please Enter Password', [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
  }
  else if(confirmPassword.length==0){
    Alert.alert('Error', 'Please Enter Confirm Password', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
  else if(confirmPassword!==password){
    Alert.alert('Error', 'Confirm Password IS Not Match With Password', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }

  else if(isCheckedTerm==false){
    Alert.alert('Error', 'You Have To Agree With The Terms And Conditions Of Weyzero.com', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }

  else{
    

  const imagePhoto= await uploadImagePhoto();
    const imageId = await uploadImageId();
  
    
  addDoc(refDb, {
    fname:fname,
    lname:lname,
    email:email,
    cityId:selectedState,
    pass:password,
    haveChild:child,
    tellAbout:self,
    liveIn:live,
    haveclass:classState,
    haveExpireance:expState,
    isPartime:empState,
    Education:eduState,
    language:language,
    lang:lang,
    religion:religion,
    workTypeApp:selectedWork,
    age: Number(age) ,
    salary:salaryState,
    country:selectedArea,
    phone:phone,
    urlId: imagePhoto,
    urlTin: imageId,
  });

}

 // console.log(selectedWork)


}


const submitQetari=async()=>{

 
  if(isCheckedTerm==false){
    Alert.alert('Error', 'You Have To Agree With The Terms And Conditions Of Weyzero.com', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  
  }

  else{
    const imageId = await uploadImageId();

    addDoc(refQetari, {
      fname:fname,
      lname:lname,
      email:email,
      selectCity:selectedState,
    selectedWorkApp:selectedWork,
    selectedArea:selectedArea,
      pass:password,
      phone:phone,
      urlId: imageId,
    });
  
  }
 
}


const submitWekil=async()=>{


  if(isCheckedTerm==false){
    Alert.alert('Error', 'You Have To Agree With The Terms And Conditions Of Weyzero.com', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  
  }
  
  else{
    const imageValue= await uploadImageValue();
    const imageId = await uploadImageId();
  
    addDoc(refWekil, {
      fname:fname,
      lname:lname,
      email:email,
      cityId:selectedState,
      speciId:selectedArea,
      pass:password,
      legalNum:legalNum,
      tin:tin,
      phone:phone,
      urlId: imageValue,
      urlTin: imageId,
    });
  
  }


}




const location={
  'Addis Ababa': ['Lebu','Kaliti','Megenagna'],
  'Jimma':[ 'Ajip','Saris','Qochi' ]
}



  return (
    <View style={styles.container}>

        <StatusBar barStyle = 'light-content' backgroundColor='#7F87F9' />

        {modal=='1'
        ?
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

<Text style={styles.regTextDetail}>
We are helping thousands of families in finding their perfect
</Text>


<Text style={styles.regTextCreate}>
    Create Account
</Text>

<View style={styles.regLine} />

<Text style={styles.regTextSign}>
    sign up to continue
</Text>


<TouchableOpacity onPress={()=>activeCheck()} style={styles.checkView}>
<Checkbox style={styles.checkbox} value={isChecked}  />
<Text>I AM EMPLOYEE (ሰራተኛ)</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>activeCheckk()} style={styles.checkView}>
<Checkbox style={styles.checkbox} value={isCheckedd}  />
<Text>I AM EMPLOYER (ቀጣሪ)</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>activeCheckkk()} style={styles.checkView}>
<Checkbox style={styles.checkbox} value={isCheckeddd} />
<Text>I AM AN AGENT  (ወኪል)</Text>
</TouchableOpacity>

<View style={styles.loginPage}>
    <Text style={styles.loginText}>Already have an account? </Text>
     <TouchableOpacity onPress={()=>navigation.navigate('login')} >
<Text style={styles.loginBtn}>Login here</Text>
    </TouchableOpacity>
</View>

<View style={styles.logLine}/>

<TouchableOpacity  onPress={()=>nextModal()} style={styles.nextBtn}>
<Text style={styles.nextText}>Next</Text>
</TouchableOpacity>


        </ScrollView> 
        :<></>}



 
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





<TextInput  keyboardType='default' value={fname} onChangeText={(fname)=>setFname(fname)} placeholderTextColor="#999" style={styles.textInLog} placeholder='First Name'/>
<TextInput  keyboardType='default' value={lname} onChangeText={(lname)=>setLname(lname)} placeholderTextColor="#999" style={styles.textInLog} placeholder='Last Name'/>
<TextInput  keyboardType='numeric' value={age} onChangeText={(age)=>setAge(age)}  placeholderTextColor="#999" style={styles.textInLog} placeholder='Age'/>
<TextInput  keyboardType='phone-pad' value={phone} onChangeText={(phone)=>setPhone(phone)} placeholderTextColor="#999" style={styles.textInLog} placeholder='Phone Number'/>






<Picker
  selectedValue={selectedState}
  value={selectedState}
   onChange={(itemValue)=>setSelectedState(itemValue)}
  style={styles.pickerInLog}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedState(itemValue)
  }>
    <Picker.Item label="Choose City" value="" />
  <Picker.Item label="Addis Ababa" value="Addis Ababa" />
  <Picker.Item label="Jimma" value="Jimma" />
</Picker>

<View style={styles.logLine}/>

<View style={styles.forgetView}>
<TouchableOpacity onPress={()=>prev()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Prev</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>nextModalOne()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Next</Text>
</TouchableOpacity>
</View>



    </ScrollView>   : <></> }


    { modal ==='3' ? 
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



<Text style={styles.regTextOtpOne}>
Verification Code Sent to Your Phone
</Text>

<Text style={styles.regTextOtp}>
የማረጋገጫ ኮድ ወደ ስልክዎ ተልኳል. ኮዱን ያስገቡ
</Text>

<TextInput  keyboardType='numeric' value={otp} onChangeText={(otp)=>setOtp(otp)}  placeholderTextColor="#999" style={styles.textInLog} placeholder='Enter Otp'/>


<View style={styles.logLine}/>

<View style={styles.forgetView}>
<TouchableOpacity onPress={()=>prevOne()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Prev</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>nextModalTwo()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Next</Text>
</TouchableOpacity>
</View>



    </ScrollView>   : <></> }

    { modal ==='4' ? 
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


{
  selectedState && <Picker
  value={selectedArea}
    onChange={(itemValue)=>setSelectedArea(itemValue)}
  selectedValue={selectedArea}
  style={styles.pickerInLog}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedArea(itemValue)
  }>
   

    {
      location[selectedState].map((state,key)=>(

<Picker.Item key={key} label={state} value={state} />

      ))
    }
</Picker>
}


<Picker
  selectedValue={religion}
  value={religion}
   onChange={(itemValue)=>setReligion(itemValue)} 
  style={styles.pickerInLog}
  onValueChange={(itemValue, itemIndex) =>
    setReligion(itemValue)
  }>
    <Picker.Item label="Religion" value="" />
  <Picker.Item label="Orthodox" value="Orthodox" />
  <Picker.Item label="Muslim" value="Muslim" />
  <Picker.Item label="Protestante" value="Protestant" />
</Picker>
<Picker
value={language} 
onChange={(itemValue)=>setLanguage(itemValue)} 
  selectedValue={language}
  style={styles.pickerInLog}
  onValueChange={(itemValue, itemIndex) =>
    setLanguage(itemValue)
  }>
    <Picker.Item label="Language" value="" />
  <Picker.Item label="Amharic" value="Amharic" />
  <Picker.Item label="Oromifa" value="Oromifa" />
  <Picker.Item label="Tigregna" value="Tigregna" />
</Picker>


<TextInput  keyboardType='default' value={lang} onChangeText={(itemValue)=>setLang(itemValue)}
 placeholderTextColor="#999" style={[styles.textInLog,{fontSize:14}]} placeholder='If There Any Additional Language'/>


<Picker
value={empState} 
onChange={(itemValue)=>setEmpState(itemValue)}
  selectedValue={empState}
  style={styles.pickerInLog}
  onValueChange={(itemValue, itemIndex) =>
    setEmpState(itemValue)
  }>
    <Picker.Item label="Employement Type" value="" />
  <Picker.Item label="Full Time" value="Full Time" />
  <Picker.Item label="Part Time" value="Part Time" />
</Picker>
<Picker
value={salaryState}
 onChange={(itemValue)=>setSalaryState(itemValue)} 
  selectedValue={salaryState}
  style={styles.pickerInLog}
  onValueChange={(itemValue, itemIndex) =>
    setSalaryState(itemValue)
  }>
    <Picker.Item label="Monthly Expected Salary" value="" />
  <Picker.Item label="1000-2000" value="1000-2000" />
  <Picker.Item label="2000-3000" value="2000-3000" />
  <Picker.Item label="Nigotiable" value="Nigotiable" />
</Picker>




<View style={styles.logLine}/>

<View style={styles.forgetView}>
<TouchableOpacity onPress={()=>prevTwo()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Prev</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>nextModalThree()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Next</Text>
</TouchableOpacity>
</View>



    </ScrollView>   : <></> }


    { modal ==='5' ? 


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





<Text style={styles.serviceText}>
Select Service
</Text>

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
        setSelected={(val) => setSelectedWork(val)} 
        onChange={(itemValue) => setSelectedWork(itemValue)}
        data={options} 
        save="value"
        onSelect={() => console.log(selectedWork)} 
        label="Categories"
    />


<Picker
value={eduState} 
onChange={(itemValue)=>setEduState(itemValue)} 
  selectedValue={eduState}
  style={styles.pickerInLog}
  onValueChange={(itemValue, itemIndex) =>
    setEduState(itemValue)
  }>
    <Picker.Item label="Education Level " value="" />
  <Picker.Item label="Masters" value="Masters" />
  <Picker.Item label="Degree" value="Degree" />
  <Picker.Item label="Grade 10" value="Gradeten" />
  <Picker.Item label="Grade 8" value="Gradeeight"/>
  <Picker.Item label="Un Educated" value="Un Educated"/>
</Picker>
<Picker
value={expState}
 onChange={(itemValue)=>setExpState(itemValue)}
  selectedValue={expState}
  style={styles.pickerInLog}
  onValueChange={(itemValue, itemIndex) =>
    setExpState(itemValue)
  }>
    <Picker.Item label="Experience " value="" />
  <Picker.Item label="More Than 5 Years" value="More Than 5 Years" />
  <Picker.Item label="More Than 2 Years" value="More Than 2 Years" />
  <Picker.Item label="More Than 1 Years" value="More Than 1 Years" />
  <Picker.Item label="I don't Have any" value="None" />
</Picker>

<Picker
value={classState}
 onChange={(itemValue)=>setClassState(itemValue)}
  selectedValue={classState}
  style={styles.pickerInLog}
  onValueChange={(itemValue, itemIndex) =>
    setClassState(itemValue)
  }>
    <Picker.Item label="Do You Take Class" value="" />
  <Picker.Item label="Yes" value="Yes" />
  <Picker.Item label="No" value="No" />
</Picker>





<View style={styles.logLine}/>

<View style={styles.forgetView}>
<TouchableOpacity onPress={()=>prevThree()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Prev</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>nextModalFour()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Next</Text>
</TouchableOpacity>
</View>
</ScrollView>


  : <></> }

    { modal ==='6' ? 
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

<Picker
value={child}
 onChange={(itemValue)=>setChild(itemValue)}
  selectedValue={child}
  style={styles.pickerInLog}
  onValueChange={(itemValue, itemIndex) =>
    setChild(itemValue)
  }>
    <Picker.Item label="Do you have children? " value="" />
  <Picker.Item label="Yes" value="Yes" />
  <Picker.Item label="No" value="No" />
</Picker>
<Picker
value={live} 
onChange={(itemValue)=>setLive(itemValue)}
  selectedValue={live}
  style={styles.pickerInLog}
  onValueChange={(itemValue, itemIndex) =>
    setLive(itemValue)
  }>
    <Picker.Item label="Live In Or Live Out " value="" />
  <Picker.Item label="Live In" value="Live In" />
  <Picker.Item label="Live Out" value="Live Out" />
</Picker>


<Text style={styles.imageText}>
Tell us what you can do (ስለ እርሶ ትንሽ ይንገሩን)
</Text>

<TextInput keyboardType='default' value={self} onChangeText={(itemValue)=>setSelf(itemValue)}
 multiline={true} style={styles.textInSelf} placeholder='Tell Us About Yourself' />


<Text style={styles.imageText}>
Profile Image (ፎቶ)
</Text>

<TouchableOpacity style={styles.ImagePickerBtn}   onPress={pickImageProfile} >
<Text style={styles.imagePickerText}>
Pick a Profile Image  
</Text>
  </TouchableOpacity>
      { /* image && <Image source={{ uri: image }} style={{ width: 200, height: 500 }} /> */ }

<Text style={styles.imageText} >
 ID or Passport መታወቂያ ወይም ፓስፖርት
</Text>

<TouchableOpacity style={styles.ImagePickerBtn} onPress={pickImageId} >
<Text style={styles.imagePickerText}>
Pick ID or Passport
</Text>
  </TouchableOpacity>
      { /* image && <Image source={{ uri: image }} style={{ width: 200, height: 500 }} /> */ }





<View style={styles.logLine}/>

<View style={styles.forgetView}>
<TouchableOpacity onPress={()=>prevFour()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Prev</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>nextModalFive()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Next</Text>
</TouchableOpacity>
</View>



    </ScrollView>   : <></> }

    { modal ==='7' ? 
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



<TextInput  keyboardType='email-address' value={email} onChangeText={(itemValue)=>setEmail(itemValue)}
 placeholderTextColor="#999" style={styles.textInLog} placeholder='Email'/>

<View style={styles.passView}>
<TextInput secureTextEntry={!isPasswordVisible} onChangeText={(itemValue)=>setPassword(itemValue)} placeholderTextColor="#999" style={styles.textInLogPass} placeholder='Password' />
<TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
  <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="#999" />
</TouchableOpacity>
</View>
<View style={styles.passView}>
<TextInput secureTextEntry={!isPasswordVisible} onChangeText={(itemValue)=>setConfirmPassword(itemValue)} placeholderTextColor="#999" style={styles.textInLogPass} placeholder='Confirm Password' />
<TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
  <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="#999" />
</TouchableOpacity>
</View>

<TouchableOpacity onPress={()=>activeCheckTerm()} style={styles.checkViewTerm}>
<Checkbox style={styles.checkboxTerm} value={isCheckedTerm}  />
<Text style={{fontSize:16}}>I agree to the  <TouchableOpacity  style={styles.termBtn} ><Text style={styles.termText}>Terms and conditions</Text></TouchableOpacity>  of the emebet.net</Text>
</TouchableOpacity>

<View style={styles.logLine}/>

<View style={styles.forgetView}>
<TouchableOpacity onPress={()=>prevFive()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Prev</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>submitEmployee()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>submit</Text>
</TouchableOpacity>
</View>



    </ScrollView>   : <></> }












    { qetari ==='2' ? 
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





<TextInput  keyboardType='default' value={fname} onChangeText={(fname)=>setFname(fname)}
 placeholderTextColor="#999" style={styles.textInLog} placeholder='First Name'/>

<TextInput  keyboardType='default' value={lname} onChangeText={(lname)=>setLname(lname)}
 placeholderTextColor="#999" style={styles.textInLog} placeholder='Last Name'/>
 
<TextInput  keyboardType='email-address' value={email} onChangeText={(itemValue)=>setEmail(itemValue)}
 placeholderTextColor="#999" style={styles.textInLog} placeholder='Email'/>



<View style={styles.logLine}/>

<View style={styles.forgetView}>
<TouchableOpacity onPress={()=>prevQetari()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Prev</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>nextQetariOne()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Next</Text>
</TouchableOpacity>
</View>



    </ScrollView>   : <></> }


    { qetari ==='3' ? 
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



<TextInput  keyboardType='phone-pad' value={phone} onChangeText={(itemValue)=>setPhone(itemValue)}
 placeholderTextColor="#999" style={styles.textInLog} placeholder='Phone Number'/>


<Picker
 value={selectedState}
 onChange={(itemValue)=>setSelectedState(itemValue)}
  selectedValue={selectedState}
  style={styles.pickerInLog}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedState(itemValue)
  }>
    <Picker.Item label="Choose City" value="" />
  <Picker.Item label="Addis Ababa" value="Addis Ababa" />
  <Picker.Item label="Jimma" value="Jimma" />
</Picker>


<Text style={styles.serviceText}>
What are you looking for?
</Text>

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
setSelected={(val) => setSelectedWork(val)} 
onChange={(itemValue) => setSelectedWork(itemValue)}
data={options} 
save="value"
onSelect={() => console.log(selectedWork)} 
label="Categories"
    />


<View style={styles.passView}>
<TextInput secureTextEntry={!isPasswordVisible} onChangeText={(itemValue)=>setPassword(itemValue)} placeholderTextColor="#999" style={styles.textInLogPass} placeholder='Password' />
<TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
  <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="#999" />
</TouchableOpacity>
</View>
<View style={styles.passView}>
<TextInput secureTextEntry={!isPasswordVisible} onChangeText={(itemValue)=>setConfirmPassword(itemValue)} placeholderTextColor="#999" style={styles.textInLogPass} placeholder='Confirm Password' />
<TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
  <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="#999" />
</TouchableOpacity>
</View>

<Text style={styles.imageText}>
 ID or Passport መታወቂያ ወይም ፓስፖርት
</Text>

<TouchableOpacity style={styles.ImagePickerBtn}  onPress={pickImageId} >
<Text style={styles.imagePickerText}>
Pick ID or Passport
</Text>
  </TouchableOpacity>
      { /* image && <Image source={{ uri: image }} style={{ width: 200, height: 500 }} /> */ }



<View style={styles.logLine}/>

<View style={styles.forgetView}>
<TouchableOpacity onPress={()=>prevQetariTwo()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Prev</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>nextQetariTwo()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Next</Text>
</TouchableOpacity>
</View>



    </ScrollView>   : <></> }

    { qetari ==='4' ? 
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



<Text style={styles.regTextOtpOne}>
Verification Code Sent to Your Phone
</Text>

<Text style={styles.regTextOtp}>
የማረጋገጫ ኮድ ወደ ስልክዎ ተልኳል. ኮዱን ያስገቡ
</Text>

<TextInput  keyboardType='numeric' value={otp} onChangeText={(otp)=>setOtp(otp)}  placeholderTextColor="#999" style={styles.textInLog} placeholder='Enter Otp'/>


<View style={styles.logLine}/>

<View style={styles.forgetView}>
<TouchableOpacity onPress={()=>prevQetariThree()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Prev</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>nextQetariThree()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Next</Text>
</TouchableOpacity>
</View>



    </ScrollView>   : <></> }


    { qetari ==='5' ? 
<ScrollView>



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




<Text style={styles.regTextReg}>
Registering Employee...
</Text>

<Text style={styles.regTextRegister}>
  Thank you for your time! You have reached to the end, Please Confirm your registration by accepting our terms and conditions!
  </Text>

<TouchableOpacity onPress={()=>activeCheckTerm()} style={styles.checkViewTerm}>
<Checkbox style={styles.checkboxTerm} value={isCheckedTerm}  />
<Text style={{fontSize:16}}>I agree to the  <TouchableOpacity  style={styles.termBtn} ><Text style={styles.termText}>Terms and conditions</Text></TouchableOpacity>  of the emebet.net</Text>
</TouchableOpacity>

<View style={styles.logLine}/>

<View style={styles.forgetView}>
<TouchableOpacity onPress={()=>prevQetariFour()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Prev</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>submitQetari()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Submit</Text>
</TouchableOpacity>
</View>



    </ScrollView> 
      : <></>   }












{ wekil ==='2' ? 
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




<TextInput  keyboardType='default' value={fname} onChangeText={(fname)=>setFname(fname)}
 placeholderTextColor="#999" style={styles.textInLog} placeholder='First Name'/>

<TextInput  keyboardType='default' value={lname} onChangeText={(lname)=>setLname(lname)}
 placeholderTextColor="#999" style={styles.textInLog} placeholder='Last Name'/>

 <TextInput  keyboardType='phone-pad' value={phone} onChangeText={(phone)=>setPhone(phone)}
  placeholderTextColor="#999" style={styles.textInLog} placeholder='Phone Number'/>

<TextInput  keyboardType='email-address' value={email} onChangeText={(itemValue)=>setEmail(itemValue)}
 placeholderTextColor="#999" style={styles.textInLog} placeholder='Email'/>


<Picker
  selectedValue={selectedState}
  value={selectedState}
  onChange={(itemValue)=>setSelectedState(itemValue)}
  style={styles.pickerInLog}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedState(itemValue)
  }>
    <Picker.Item label="Choose City" value="" />
  <Picker.Item label="Addis Ababa" value="Addis Ababa" />
  <Picker.Item label="Jimma" value="Jimma" />
</Picker>



<View style={styles.logLine}/>

<View style={styles.forgetView}>
<TouchableOpacity onPress={()=>prevWekil()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Prev</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>nextWekilOne()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Next</Text>
</TouchableOpacity>
</View>



    </ScrollView>   : <></> }

    { wekil ==='3' ? 
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



<Text style={styles.regTextOtpOne}>
Verification Code Sent to Your Phone
</Text>

<Text style={styles.regTextOtp}>
የማረጋገጫ ኮድ ወደ ስልክዎ ተልኳል. ኮዱን ያስገቡ
</Text>

<TextInput  keyboardType='numeric' value={otp} onChangeText={(otp)=>setOtp(otp)}  placeholderTextColor="#999" style={styles.textInLog} placeholder='Enter Otp'/>


<View style={styles.logLine}/>

<View style={styles.forgetView}>
<TouchableOpacity onPress={()=>prevWekilTwo()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Prev</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>nextWekilTwo()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Next</Text>
</TouchableOpacity>
</View>



    </ScrollView>   : <></> }


    { wekil ==='4' ? 
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



{
  selectedState && <Picker
  value={selectedArea}
    onChange={(itemValue)=>setSelectedArea(itemValue)}
  selectedValue={selectedArea}
  style={styles.pickerInLog}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedArea(itemValue)
  }>
   

    {
      location[selectedState].map((state,key)=>(

<Picker.Item key={key} label={state} value={state} />

      ))
    }
</Picker>
}


<Text style={[styles.serviceText,{fontSize:14,color:'#999',padding:0,margin:0}]}>
Optional
</Text>
<TextInput  keyboardType='numeric' value={legalNum} onChangeText={(legalNum)=>setLegalNum(legalNum)} 
placeholderTextColor="#999" style={styles.textInLog} placeholder='Enter legal Number'/>



<Text style={[styles.serviceText,{fontSize:14,color:'#999',padding:0,margin:0}]}>
Optional
</Text>

<TextInput  keyboardType='numeric' value={tin} onChangeText={(tin)=>setTin(tin)} 
 placeholderTextColor="#999" style={styles.textInLog} placeholder='Enter Tin Number'/>



<Text style={styles.imageText}>
 ID or Passport መታወቂያ ወይም ፓስፖርት
</Text>

<TouchableOpacity style={styles.ImagePickerBtn}  onPress={pickImageId} >
<Text style={styles.imagePickerText}>
Pick ID or Passport
</Text>
  </TouchableOpacity>
      { /* image && <Image source={{ uri: image }} style={{ width: 200, height: 500 }} /> */ }

      <Text style={styles.imageText}>
License Image
</Text>
<Text style={[styles.serviceText,{fontSize:14,color:'#999',padding:0,margin:0}]}>
Optional
</Text>
<TouchableOpacity style={styles.ImagePickerBtn}  onPress={pickImageLicense} >
<Text style={styles.imagePickerText}>
Pick a License Image 
</Text>
  </TouchableOpacity>
      { /* image && <Image source={{ uri: image }} style={{ width: 200, height: 500 }} /> */ }


<View style={styles.logLine}/>

<View style={styles.forgetView}>
<TouchableOpacity onPress={()=>prevWekilThree()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Prev</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>nextWekilThree()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Next</Text>
</TouchableOpacity>
</View>



    </ScrollView>   : <></> }

    { wekil ==='5' ? 
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



<View style={styles.passView}>
<TextInput secureTextEntry={!isPasswordVisible} onChangeText={(itemValue)=>setPassword(itemValue)}
 placeholderTextColor="#999" style={styles.textInLogPass} placeholder='Password' />
<TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
  <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="#999" />
</TouchableOpacity>
</View>
<View style={styles.passView}>
<TextInput secureTextEntry={!isPasswordVisible} onChangeText={(itemValue)=>setConfirmPassword(itemValue)} 
placeholderTextColor="#999" style={styles.textInLogPass} placeholder='Confirm Password' />
<TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
  <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="#999" />
</TouchableOpacity>
</View>

<View style={styles.logLine}/>

<View style={styles.forgetView}>
<TouchableOpacity onPress={()=>prevWekilFour()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Prev</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>nextWekilFour()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Next</Text>
</TouchableOpacity>
</View>



    </ScrollView>   : <></> }


    { wekil ==='6' ? 
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


<Text style={styles.regTextReg}>
Registering Employee...
</Text>

<Text style={styles.regTextRegister}>
  Thank you for your time! You have reached to the end, Please Confirm your registration by accepting our terms and conditions!
  </Text>

<TouchableOpacity onPress={()=>activeCheckTerm()} style={styles.checkViewTerm}>
<Checkbox style={styles.checkboxTerm} value={isCheckedTerm}  />
<Text style={{fontSize:16}}>I agree to the  <TouchableOpacity  style={styles.termBtn} ><Text style={styles.termText}>Terms and conditions</Text></TouchableOpacity>  of the emebet.net</Text>
</TouchableOpacity>

<View style={styles.logLine}/>

<View style={styles.forgetView}>
<TouchableOpacity onPress={()=>prevWekilFive()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Prev</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=>submitWekil()} style={styles.nextBtnForget}>
<Text style={styles.nextTextForget}>Submit</Text>
</TouchableOpacity>
</View>



    </ScrollView>   : <></> }


    

    </View>
  )
}

export default Register

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
  },
  loginText:{
 fontSize:16,
 fontFamily: 'Inter_900Black',
  },
  loginBtn:{
    marginTop:5,
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
   marginRight:10,
marginBottom:20
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
regTextOtpOne:{
  marginTop:20,
        textAlign:'center',
        fontWeight: 'bold',
        fontFamily: 'Inter_900Black',
              fontSize:18 
},
regTextOtp:{
  marginTop:10,
  marginBottom:25,
        textAlign:'center',
        fontWeight: 'bold',
        fontFamily: 'Inter_900Black',
              fontSize:18 
},
checkViewTerm:{
  alignItems:'center',
  flexDirection: 'row',
  justifyContent: 'center',
  borderColor:'#e3e3e3',
  borderWidth:1,
  marginBottom:20,
  width:'91%',
  alignSelf:'center',
paddingVertical:4,
borderRadius: 10,
},
checkboxTerm: {
  marginVertical:6,
marginHorizontal:10
},
termBtn:{
marginTop:5
},
termText:{
  color:'rgb(40,167,69)',
  fontSize:14,
},
serviceText:{
  marginLeft:65,
  fontSize:18,
},

ImagePickerBtn:{
  alignSelf:'center',
    backgroundColor: 'rgb(40,167,69)',
borderColor:'rgb(40,167,69)',
  width: 250,
 height:40,
  alignItems: 'center',
   justifyContent: 'center',
   marginRight:10,
marginBottom:20,
borderRadius:10
},

imagePickerText:{
  color:'#fff',
  fontSize:16,
  fontWeight:'bold'
},

imageText:{
  alignSelf:'center',
  marginVertical:6,
  fontSize:14,
  fontFamily: 'Inter_900Black',
  color:'rgb(40,167,100)',
},
textInSelf:{
  alignSelf:'center',
  // Overall container styling
backgroundColor: '#fff',
borderWidth: 1,
borderColor: '#ccc',
padding: 10,
paddingVertical:6,
margin: 6,
// Text styling
fontSize: 16,
color: '#000',
marginBottom:20,
width:300,
marginHorizontal: 50,
height:100
},

regTextReg:{
  marginTop:20,
        textAlign:'center',
        fontWeight: 'bold',
        fontFamily: 'Inter_900Black',
              fontSize:24 
},
regTextRegister:{
  marginTop:20,
  marginBottom:30,
        textAlign:'center',
        fontFamily: 'Inter_900Black',
              fontSize:16 ,
              color:'#424242'
},

})