import React, { useState } from 'react';
import { Button,Divider, Input, Layout, Text } from '@ui-kitten/components';
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../FirbaseConfig'
import GoogleAuth from '../../Components/Buttons/GoogleAuth';

function SignUp({navigation}) {
    const [email, setEmail] = useState('');
    const [pswd,setPswd] = useState('');
    const [confPswd,setConfPswd] = useState('');


  const createUser = async()=>{
    try{
      if(email && pswd==confPswd){
        const response = await createUserWithEmailAndPassword(auth,email,pswd);
        if(response){
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
      <Input
        value={confPswd}
        style={styles.input}
        placeholder='Confirm Password'
        onChangeText={nextValue => setConfPswd(nextValue)}
      />
      <Button onPress={createUser} style={styles.btn} >
        SignUp
      </Button>
      <Divider style={styles.divider}/>
      <GoogleAuth></GoogleAuth>
    </View>
    </Layout>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    input: {
      margin: 2,
      marginBottom:30
    },
    form:{
      height:240,
      marginTop:200,
      // backgroundColor:'white',
      borderColor:100,
    },
    btn:{
      margin: 2,  
    },
    divider:{
      marginBottom:30,
      height:2,
      marginTop:20
    }
  
  });
