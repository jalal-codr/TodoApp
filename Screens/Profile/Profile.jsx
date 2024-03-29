import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native';
import { Input,Layout,Text} from '@ui-kitten/components';
import { StyleSheet,Image } from 'react-native';
import{onAuthStateChanged} from 'firebase/auth'
import { auth } from '../../FirbaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Profile({navigation}) {
  const[user,setUser]=useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });


    // Clean up subscription on unmount
    unsubscribe();
}, []);



  useEffect(()=>{
    if(!user){
      navigation.navigate("SignIn")
    }
  },[])


  useEffect(()=>{
    if(user){
      console.log(user.email);
    }
  },[])
    
  return (
    <>
    <Layout style={styles.container}>
      <SafeAreaView>
      <Text style={styles.text}>Profile page</Text>
      </SafeAreaView>
    </Layout>
    </>
  )
}

export default Profile
const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    text: {
      marginTop:100,
    },
  });
  
