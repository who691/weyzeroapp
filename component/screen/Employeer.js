import { StyleSheet, Text, View ,ScrollView  , Dimensions ,StatusBar, TextInput, Image ,TouchableOpacity , ImageBackground} from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Employeer = () => {
  return (


    <View>
       <ScrollView  >
     <View style={styles.workerss}>

<Text style={styles.workerText}>
   Available Workers
</Text>

<View style={styles.workerLine} />


<Text style={styles.workerTextt}>
    All of out listed workers are in ethiopia and waiting for you to contact them
</Text>

<View style={styles.workers}>
    <Image resizeMode='contain'   style={styles.workersImg} source={require('../assets/user2.png')}/>
    <Text style={styles.workersName} >
     Meaza degu
    </Text>
    <Text style={styles.workersage} >
    24 years old
    </Text>
    <Text style={styles.workersarea} >
     Addis Ababa, Alem Bank
    </Text>
    <Text style={styles.workersservice} >
     Female Tutor
    </Text>


    <TouchableOpacity  onPress={()=>navigation.navigate('home')} style={styles.btnWorker}>
<Text style={styles.textWorkThreee}>
   View Profile
</Text>
 </TouchableOpacity>

</View>
<View style={styles.workers}>
    <Image resizeMode='cover'  style={styles.workersImg} source={require('../assets/user2.png')}/>
    <Text style={styles.workersName} >
     Selamawit Ageze
    </Text>
    <Text style={styles.workersage} >
    34 years old
    </Text>
    <Text style={styles.workersarea} >
     Addis Ababa, Saris
    </Text>
    <Text style={styles.workersservice} >
     Female Tutor
    </Text>


    <TouchableOpacity  onPress={()=>navigation.navigate('home')} style={styles.btnWorker}>
<Text style={styles.textWorkThreee}>
   View Profile
</Text>
 </TouchableOpacity>

</View>
<View style={styles.workers}>
    <Image resizeMode='cover'  style={styles.workersImg} source={require('../assets/user2.png')}/>
    <Text style={styles.workersName} >
     Adonay Bekele
    </Text>
    <Text style={styles.workersage} >
    20 years old
    </Text>
    <Text style={styles.workersarea} >
     Addis Ababa, Bole
    </Text>
    <Text style={styles.workersservice} >
     Sales
    </Text>


    <TouchableOpacity  onPress={()=>navigation.navigate('home')} style={styles.btnWorker}>
<Text style={styles.textWorkThreee}>
   View Profile
</Text>
 </TouchableOpacity>

</View>
<View style={styles.workers}>
    <Image resizeMode='cover'  style={styles.workersImg} source={require('../assets/user2.png')}/>
    <Text style={styles.workersName} >
     Rahel Daniel
    </Text>
    <Text style={styles.workersage} >
    26 years old
    </Text>
    <Text style={styles.workersarea} >
     Addis Ababa, Bole
    </Text>
    <Text style={styles.workersservice} >
     Waitress
    </Text>


    <TouchableOpacity  onPress={()=>navigation.navigate('home')} style={styles.btnWorker}>
<Text style={styles.textWorkThreee}>
   View Profile
</Text>
 </TouchableOpacity>

</View>
<View style={styles.workers}>
    <Image resizeMode='cover'  style={styles.workersImg} source={require('../assets/user2.png')}/>
    <Text style={styles.workersName} >
     Mahlet Gizachew
    </Text>
    <Text style={styles.workersage} >
    34 years old
    </Text>
    <Text style={styles.workersarea} >
     Addis Ababa, Kebena
    </Text>
    <Text style={styles.workersservice} >
     Cleaning
    </Text>


    <TouchableOpacity  onPress={()=>navigation.navigate('home')} style={styles.btnWorker}>
<Text style={styles.textWorkThreee}>
   View Profile
</Text>
 </TouchableOpacity>

</View>
<View style={styles.workers}>
    <Image resizeMode='cover'  style={styles.workersImg} source={require('../assets/user2.png')}/>
    <Text style={styles.workersName} >
     Bezawit Elias
    </Text>
    <Text style={styles.workersage} >
    24 years old
    </Text>
    <Text style={styles.workersarea} >
     Addis Ababa, Bole
    </Text>
    <Text style={styles.workersservice} >
     Female Tutor
    </Text>


    <TouchableOpacity  onPress={()=>navigation.navigate('home')} style={styles.btnWorker}>
<Text style={styles.textWorkThreee}>
   View Profile
</Text>
 </TouchableOpacity>

</View>
<View style={styles.workers}>
    <Image resizeMode='cover'  style={styles.workersImg} source={require('../assets/user2.png')}/>
    <Text style={styles.workersName} >
     Eden Genene
    </Text>
    <Text style={styles.workersage} >
    24 years old
    </Text>
    <Text style={styles.workersarea} >
     Addis Ababa, Kolfe Keranio
    </Text>
    <Text style={styles.workersservice} >
     Female Tutor
    </Text>


    <TouchableOpacity  onPress={()=>navigation.navigate('home')} style={styles.btnWorker}>
<Text style={styles.textWorkThreee}>
   View Profile
</Text>
 </TouchableOpacity>

</View>
<View style={styles.workers}>
    <Image resizeMode='cover'  style={styles.workersImg} source={require('../assets/user2.png')}/>
    <Text style={styles.workersName} >
     Rodas Alema
    </Text>
    <Text style={styles.workersage} >
    20 years old
    </Text>
    <Text style={styles.workersarea} >
     Addis Ababa, Alem Bank
    </Text>
    <Text style={styles.workersservice} >
     Female Tutor
    </Text>


    <TouchableOpacity  onPress={()=>navigation.navigate('home')} style={styles.btnWorker}>
<Text style={styles.textWorkThreee}>
   View Profile
</Text>
 </TouchableOpacity>

</View>



<TouchableOpacity  onPress={()=>navigation.navigate('home')} style={styles.btnWorkerFind}>
<Text style={styles.textWorkThreeee}>
  Find More Workers
</Text>
 </TouchableOpacity>

</View>
</ScrollView>




    </View>


  )
}

export default Employeer

const styles = StyleSheet.create({
    workerss:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30
    },
   workerText:{
       fontSize: 40,
       fontWeight: 'bold',
        color:'gray',
        marginTop:30
   },

   workerLine:{
    alignSelf: 'center',
    height: 2,
    width: 250,
    backgroundColor: 'gray',    
    marginTop:15,
    marginBottom:15 ,
},

   workerTextt:{
       fontSize: 20,
       fontWeight: 'bold',
       marginHorizontal:20,
       textAlign:'center',
       marginTop:18,
       color:'gray'
   },
   workers:{
       width: windowWidth - 100,
       height:300,
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
   workersName:{
       fontSize: 22,
       fontWeight: 'bold',
       color: '#424242',
       
   },
   workersage:{
       fontSize: 18,
       fontWeight: 'bold',
       color: '#999',
       marginTop:5
   },
   workersarea:{
       fontSize: 18,
       fontWeight: 'bold',
       color: '#999',
   },
   workersservice:{
       fontSize: 18,
       fontWeight: 'bold',
       color: '#999',
   },
   workersImg:{
    width:50,
    height: 50,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom:20
   },

   textWorkerThreee:{
       color: '#e3e3e3',
         fontSize: 20,
         marginHorizontal:10,
         fontWeight: '800',
         fontFamily: 'Roboto',
         textAlign: 'center',
        
        },
   textWorkerThreeee:{
       color: '#e3e3e3',
         fontSize: 20,
         marginHorizontal:10,
         fontWeight: '800',
         fontFamily: 'Roboto',
         textAlign: 'center',
       
        },

        btnWorker:{
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
        btnWorkerFind:{
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