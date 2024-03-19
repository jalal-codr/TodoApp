import React from 'react'
import {StyleSheet, SafeAreaView}  from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home/Home'
import Tasks from '../../Screens/Tasks/Tasks';
import Footer from './Footer';
import Profile from '../../Screens/Profile/Profile';
import SignUp from '../../Screens/SignIn/SignUp';
import SignIn from '../../Screens/SignIn/SignIn';


const Stack = createBottomTabNavigator();


function Navigation() {
  return (
    <NavigationContainer  >
      <Stack.Navigator tabBar={props=> <Footer {...props}/>} screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Task' component={Tasks}/>
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation

