import React from 'react'
import { View,StyleSheet, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

function Footer() {
  const homeIcon = () => <AntDesign name="home" size={35}  />;
  const userIcon = () => <AntDesign name="user" size={35}  />;
  const clockIcon = () => <AntDesign name="clockcircleo" size={35}  />;
  const calendarIcon = () => <EvilIcons name="calendar" size={35}  />;
  return (
    <View style={styles.container}>
        <View><TouchableOpacity>{homeIcon()}</TouchableOpacity></View>
        <View><TouchableOpacity>{userIcon()}</TouchableOpacity></View>
        <View><TouchableOpacity>{clockIcon()}</TouchableOpacity></View>
        <View><TouchableOpacity>{calendarIcon()}</TouchableOpacity></View>
    </View>
  )
}

export default Footer
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    marginTop:550,
    backgroundColor:'blue',
    width:300,
    marginLeft:-50,
  },

})
