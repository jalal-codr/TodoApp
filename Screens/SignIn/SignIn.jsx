import React, { useState } from 'react';
import { Button,Icon, Input, Layout, Text } from '@ui-kitten/components';
import { TouchableWithoutFeedback, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../FirbaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';
import GoogleAuth from '../../Components/Buttons/GoogleAuth';
import { Divider } from '@ui-kitten/components';

const AlertIcon = (props) => (
  <Icon {...props} name='alert-circle-outline' />
);

function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [pswd,setPswd] = useState('');
  const [confPswd,setConfPswd] = useState('');


  const signIn = async ()=>{
    try{
      if(email && pswd){
        const response = await signInWithEmailAndPassword(auth,email,pswd);
        if(response){
          // await AsyncStorage.setItem('user',response);
          navigation.navigate('Profile');
        }
      }
    }
    catch(err){
      console.log(err.message)
    }
  } 
  
  return (
    <Layout style={styles.container}>
      <View style={styles.form}>
        <View style={styles.txt_view} >
          <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
            <Text style={styles.txt} >
              SignUp?
            </Text>
          </TouchableOpacity>
        </View>
        <Input
          value={email}
          style={styles.input}
          placeholder='Email'
          onChangeText={nextValue => setEmail(nextValue)}
        />
        <Input
          value={pswd}
          style={styles.input}
          placeholder='Password'
          onChangeText={nextValue => setPswd(nextValue)}
        />
        <Button style={styles.btn} onPress={signIn} >
          SignIn
        </Button>
        <Divider style={styles.divider} ></Divider>
        <GoogleAuth/>
      </View>
    </Layout>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    margin: 2,
    marginBottom:20,
  },
  form:{
    height:220,
    marginTop:200,
    // backgroundColor:'white',
    borderColor:100,
  },
  btn:{
    margin: 2,  
    marginBottom:50
  },
  txt:{
    color:'white'
  },
  txt_view:{
    // backgroundColor:"blue",
    width:60,
    marginLeft:350,
    marginBottom:20,
  },
  divider:{
    marginBottom:20,
    height:2
  }

});