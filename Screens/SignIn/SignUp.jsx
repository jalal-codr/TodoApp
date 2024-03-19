import React, { useState } from 'react';
import { Button,Icon, Input, Layout, Text } from '@ui-kitten/components';
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';

function SignUp({navigation}) {
    const [email, setEmail] = useState('');
    const [pswd,setPswd] = useState('');
    const [confPswd,setConfPswd] = useState('');
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
      <Button style={styles.btn} >
        SignIn
      </Button>
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
    },
    form:{
      height:300,
      marginTop:180,
      backgroundColor:'white',
      borderColor:100,
    },
    btn:{
      margin: 2,  
  }
  
  });
