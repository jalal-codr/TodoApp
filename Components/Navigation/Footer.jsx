import React from 'react'
import { BottomNavigation,BottomNavigationTab, Text } from '@ui-kitten/components';
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

function Footer({ navigation, state }) {
  const homeIcon = () => <AntDesign name="home" size={35}  />;
  const userIcon = () => <AntDesign name="user" size={35}  />;
  const clockIcon = () => <AntDesign name="clockcircleo" size={35}  />;
  const calendarIcon = () => <EvilIcons name="calendar" size={35}  />;
  return (
    <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Home'/>
    <BottomNavigationTab title='Task'/>
    <BottomNavigationTab title='SignIn'/>
  </BottomNavigation>
  )
}

export default Footer

