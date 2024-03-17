import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../Screens/Home/Home'


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation
