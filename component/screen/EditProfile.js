import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker';

import { MultipleSelectList } from 'react-native-dropdown-select-list'


const windowHeight=Dimensions.get('screen').height

const EditProfile = () => {


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

  
const location={
  'Addis Ababa': ['Lebu','Kaliti','Megenagna'],
  'Jimma':[ 'Ajip','Saris','Qochi' ]
}

  return (
    <View style={styles.container}>



 
      <View
        style={{
          marginHorizontal: 20, flex:1
        }}>
       <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={require('../assets/user2.png')}
                style={{height: 80, width: 80}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginBottom: 20, fontSize: 18, fontWeight: 'bold'}}>
           Abenezer Habtamu
          </Text>
          {/* <Text>{user.uid}</Text> */}
        </View>


<ScrollView showsHorizontalScrollIndicator={false}  showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 ,  }}  horizontal={false}>


        <View style={styles.action}>
          
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            value={fname}
             onChangeText={(fname)=>setFname(fname)} 
          />
        </View>
        <View style={styles.action}>
          
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            value={lname}
            onChangeText={(lname)=>setLname(lname)}
          />
        </View>
        <View style={styles.action}>
          
          <TextInput
            placeholder="Age"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            value={age} 
            onChangeText={(age)=>setAge(age)}
          />
        </View>
        <View style={styles.action}>

        <Picker
  selectedValue={selectedState}
  value={selectedState}
   onChange={(itemValue)=>setSelectedState(itemValue)}
   style={styles.textInputDrop}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedState(itemValue)
  }>
    <Picker.Item label="Choose City" value="" />
  <Picker.Item label="Addis Ababa" value="Addis Ababa" />
  <Picker.Item label="Jimma" value="Jimma" />
</Picker>
        </View>
        <View style={styles.action}>

          
{
  selectedState && <Picker
  value={selectedArea}
    onChange={(itemValue)=>setSelectedArea(itemValue)}
  selectedValue={selectedArea}
  style={styles.textInput}
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
          
       
        </View>
        <View style={styles.action}>

        <Picker
  selectedValue={religion}
  value={religion}
   onChange={(itemValue)=>setReligion(itemValue)} 
   style={styles.textInput}
  onValueChange={(itemValue, itemIndex) =>
    setReligion(itemValue)
  }>
    <Picker.Item label="Religion" value="" />
  <Picker.Item label="Orthodox" value="Orthodox" />
  <Picker.Item label="Muslim" value="Muslim" />
  <Picker.Item label="Protestante" value="Protestant" />
</Picker>
          
        </View>
        <View style={styles.action}>

        <Picker
value={language} 
onChange={(itemValue)=>setLanguage(itemValue)} 
  selectedValue={language}
  style={styles.textInput}
  onValueChange={(itemValue, itemIndex) =>
    setLanguage(itemValue)
  }>
    <Picker.Item label="Language" value="" />
  <Picker.Item label="Amharic" value="Amharic" />
  <Picker.Item label="Oromifa" value="Oromifa" />
  <Picker.Item label="Tigregna" value="Tigregna" />
</Picker>
          

        </View>
        <View style={styles.action}>
          <Picker
value={empState} 
onChange={(itemValue)=>setEmpState(itemValue)}
  selectedValue={empState}
  style={styles.textInput}
  onValueChange={(itemValue, itemIndex) =>
    setEmpState(itemValue)
  }>
    <Picker.Item label="Employement Type" value="" />
  <Picker.Item label="Full Time" value="Full Time" />
  <Picker.Item label="Part Time" value="Part Time" />
</Picker>

        </View>
        <View style={styles.action}>

        <Picker
value={salaryState}
 onChange={(itemValue)=>setSalaryState(itemValue)} 
  selectedValue={salaryState}
  style={styles.textInput}
  onValueChange={(itemValue, itemIndex) =>
    setSalaryState(itemValue)
  }>
    <Picker.Item label="Monthly Expected Salary" value="" />
  <Picker.Item label="1000-2000" value="1000-2000" />
  <Picker.Item label="2000-3000" value="2000-3000" />
  <Picker.Item label="Nigotiable" value="Nigotiable" />
</Picker>
  
        </View>
        <View style={styles.action}>

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
          
          
        </View>
        <View style={styles.action}>

        <Picker
value={eduState} 
onChange={(itemValue)=>setEduState(itemValue)} 
  selectedValue={eduState}
  style={styles.textInput}
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

         
        </View>
        <View style={styles.action}>
        <Picker
value={expState}
 onChange={(itemValue)=>setExpState(itemValue)}
  selectedValue={expState}
  style={styles.textInput}
  onValueChange={(itemValue, itemIndex) =>
    setExpState(itemValue)
  }>
    <Picker.Item label="Experience " value="" />
  <Picker.Item label="More Than 5 Years" value="More Than 5 Years" />
  <Picker.Item label="More Than 2 Years" value="More Than 2 Years" />
  <Picker.Item label="More Than 1 Years" value="More Than 1 Years" />
  <Picker.Item label="I don't Have any" value="None" />
</Picker>


          
        </View>
        <View style={styles.action}>
          
        <Picker
value={classState}
 onChange={(itemValue)=>setClassState(itemValue)}
  selectedValue={classState}
  style={styles.textInput}
  onValueChange={(itemValue, itemIndex) =>
    setClassState(itemValue)
  }>
    <Picker.Item label="Do You Take Class" value="" />
  <Picker.Item label="Yes" value="Yes" />
  <Picker.Item label="No" value="No" />
</Picker>
        </View>
        <View style={styles.action}>

        <Picker
value={child}
 onChange={(itemValue)=>setChild(itemValue)}
  selectedValue={child}
  style={styles.textInput}
  onValueChange={(itemValue, itemIndex) =>
    setChild(itemValue)
  }>
    <Picker.Item label="Do you have children? " value="" />
  <Picker.Item label="Yes" value="Yes" />
  <Picker.Item label="No" value="No" />
</Picker>
        
        </View>
        <View style={styles.action}>
          
        <Picker
value={live} 
onChange={(itemValue)=>setLive(itemValue)}
  selectedValue={live}
  style={styles.textInput}
  onValueChange={(itemValue, itemIndex) =>
    setLive(itemValue)
  }>
    <Picker.Item label="Live In Or Live Out " value="" />
  <Picker.Item label="Live In" value="Live In" />
  <Picker.Item label="Live Out" value="Live Out" />
</Picker>

        </View>
        <View style={styles.action}>
          <TextInput
            multiline
            numberOfLines={3}
            placeholder="About Me"
            placeholderTextColor="#666666"
            value={self} 
            onChangeText={(itemValue)=>setSelf(itemValue)}
            autoCorrect={true}
            style={[styles.textInput, {height: 40}]}
          />
        </View>
   
</ScrollView>   

        <TouchableOpacity style={styles.buttonContainer} >
      <Text style={styles.buttonText}>Update Profile</Text>
    </TouchableOpacity>


        <TouchableOpacity style={[styles.buttonContainer,{marginBottom:20}]} >
      <Text style={styles.buttonText}>Delete Profile</Text>
    </TouchableOpacity>
       
      </View>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    width: '100%',
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#2e64e5',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#333333',
    height:50
  },
  textInputDrop: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#333333',
    padding:0
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    
  },
})