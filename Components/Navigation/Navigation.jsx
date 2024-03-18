import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home/Home'
import Task from '../Tasks/Task';
import Footer from './Footer';
import SignIn from '../../Screens/SignIn/SignIn';


const Stack = createBottomTabNavigator();


function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator tabBar={props=> <Footer {...props}/>} screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Task' component={Task}/>
        <Stack.Screen name='SignIn' component={SignIn} />
      </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation
