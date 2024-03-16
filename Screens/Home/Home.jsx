import React, { useState } from 'react'
import { Alert,View,StyleSheet, TextInput,Button,TouchableOpacity } from 'react-native'
import { ApplicationProvider, Layout,Text } from '@ui-kitten/components';
import Footer from '../../Components/Navigation/Footer';

function Home() {
   

  return (
    <Layout>
        <Text>Home Page</Text>
        <Footer/>
    </Layout>
  )
}

export default Home

const styles = StyleSheet.create({
   
}) 
