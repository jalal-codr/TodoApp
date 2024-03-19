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
      <Text>Profile page</Text>
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
    input: {
      flex: 1,
      margin: 2,
    },
  });
  
