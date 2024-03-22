import React, { useState } from 'react'
import {Image,View,StyleSheet} from 'react-native'
import { ApplicationProvider, Layout,Text,SafeAreaProvider } from '@ui-kitten/components';
import checkList from '../../assets/Checklist.png'
import logo from '../../assets/icon.png'

function Home() {
   

  return (
    <Layout  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.nav}>
        <Text>Index</Text>
        <Image style={styles.userLogo} source={logo}></Image>
      </View>

      <View style={styles.photoView}>
      <Image source={checkList}></Image>
      <Text>What do you want to do today ?</Text>
      </View>
    </Layout>
  )
}

export default Home

const styles = StyleSheet.create({
  nav:{
    flexDirection:'row',
    width:400
  },
  userLogo:{
    width:50,
    height:50,
    borderRadius:20,
    marginLeft:310
  },
  photoView:{
    marginTop:20,
  },
})

