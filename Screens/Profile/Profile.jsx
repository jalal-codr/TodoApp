import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native';
import { Input,Layout,Text} from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import SignIn from '../SignIn/SignIn';

function Profile({navigation}) {
  const[user,setUser]=useState();


  useEffect(()=>{
    if(!user){
      navigation.navigate("SignIn")
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
  
