import React, { useState } from 'react'
import { Alert,View,StyleSheet, TextInput,Button,TouchableOpacity } from 'react-native'
import { ApplicationProvider, Layout,Text } from '@ui-kitten/components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Footer from '../../Components/Navigation/Footer';

function Home() {
   

  return (
    <Layout  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Page</Text>
    </Layout>
  )
}

export default Home

const styles = StyleSheet.create({
   
}) 
