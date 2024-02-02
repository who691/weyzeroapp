import { Image, StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'

import {
    DrawerContentScrollView,
    DrawerItem,
  } from '@react-navigation/drawer';

  import { MaterialIcons } from '@expo/vector-icons';
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  import { Ionicons } from '@expo/vector-icons';
  import { Entypo } from '@expo/vector-icons';

  import { FontAwesome } from '@expo/vector-icons';


const DrawerContainor = (props) => {

   // const { signOut, toggleTheme } = React.useContext(AuthContext);

  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>

      <View style={styles.drawerContent}>

                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15 , alignItems:'center' }}>

                            <View style={styles.circleImage}>
                            <Image 
                            resizeMode="contain"
                            style={{height:50,}}
                                source={require('../assets/slpash/avatar-removebg-preview.png')}
                                size={50}
                            />
                            </View>
                           
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Text style={styles.title}>Abenezer Habtamu</Text>
                                <Text style={styles.caption}>@abenezer</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Edit Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Entypo name="news"
                                color={color}
                              size={size}
                               />
                            )}
                            label="What is New"
                            onPress={() => {props.navigation.navigate('News')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <FontAwesome name="legal" size={size} color={color} />
                            )}
                            label="Terms And Conditions"
                            onPress={() => {props.navigation.navigate('Term')}}
                        />

                        { /* <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        /> */}
                       
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('Support')}}
                        />
                    </View>
                    
                </View>

      </DrawerContentScrollView>

    <View style={styles.bottomDrawerSection}>
    <DrawerItem 
                    icon={({color, size}) => (
                        <MaterialIcons
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
    </View>

    </View>
  )
}

export default DrawerContainor

const styles = StyleSheet.create({

    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },

      circleImage:{
       height:70,
       width:70,
       borderRadius:35,
       backgroundColor:'gray',
       alignItems:'center',
       justifyContent:'center'
      },

      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
   

})