import React, { useState } from 'react'
import {Image,View,StyleSheet,TouchableOpacity} from 'react-native'
import { ApplicationProvider, Layout,Text,SafeAreaProvider } from '@ui-kitten/components';
import checkList from '../../assets/Checklist.png'
import logo from '../../assets/icon.png'
import AntDesign from 'react-native-vector-icons/AntDesign'

function Home() {
  const plusIcon = () => <AntDesign color='white' name="pluscircle" size={45}  />;
   

  return (
    <Layout  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.nav}>
        <Text style={styles.text}>Hi Jalal</Text>
        <Image style={styles.userLogo} source={logo}></Image>
      </View>

      <View style={styles.photoView}>
      <Image source={checkList}></Image>
      <Text style={styles.h_Text} >What do you want to do today ?</Text>
      <Text style={styles.p_text}>Tap the + to add a new task</Text>
      </View>
      <View style={styles.plusIcon} >
        <TouchableOpacity>
        {
          plusIcon()
        }
        </TouchableOpacity>
      </View>
    </Layout>
  )
}

export default Home

const styles = StyleSheet.create({
  nav:{
    flexDirection:'row',
    width:400,
    marginTop:-0,
  },
  userLogo:{
    width:50,
    height:50,
    borderRadius:20,
    marginLeft:280
  },
  photoView:{
    marginTop:100,
  },
  text:{
    marginLeft:15,
    marginTop:15
  },
  h_Text:{
    fontSize:20,
  },
  p_text:{
    marginLeft:40,
    marginTop:10,
  },
  plusIcon:{
    marginTop:150,
  },
})

