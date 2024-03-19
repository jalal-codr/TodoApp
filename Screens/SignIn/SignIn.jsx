import React, { useState } from 'react';
import { Button,Icon, Input, Layout, Text } from '@ui-kitten/components';
import { TouchableWithoutFeedback, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../FirbaseConfig'

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
        <View>
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
  },
  form:{
    height:300,
    marginTop:180,
    backgroundColor:'white',
    borderColor:100,
  },
  btn:{
    margin: 2,  
  },
  txt:{
    color:'black'
  },

});