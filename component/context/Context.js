import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';


export const CreateContext=createContext();

const Context = ({ children }) => {


  const [user,setUser]=useState();

  const rigister=async(email,password)=>{

    try {
      
      await createUserWithEmailAndPassword(auth,email,password)

    } catch (error) {
      console.log(error.message)
    }

  }

  const logIn=async(email,password)=>{

    try {
      
      await signInWithEmailAndPassword(auth,email,password)

    } catch (error) {
      console.log(error.message)
    }

  }


  const signout=async()=>{
    try {
      
      await signOut()

    } catch (error) {
      console.log(error.message)
    }
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  

  return (
    <CreateContext.Provider
    
    value={{
      user,
      setUser,
      rigister:rigister,
      logIn:logIn,
      signout:signout
     
    }}

    >
      { children }
    </CreateContext.Provider>
  )
}

export default Context

const styles = StyleSheet.create({})