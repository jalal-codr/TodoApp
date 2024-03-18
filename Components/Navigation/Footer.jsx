import React from 'react'
import { BottomNavigation,BottomNavigationTab } from '@ui-kitten/components';
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

function Footer({ navigation, state }) {
  const homeIcon = () => <AntDesign color='white' name="home" size={25}  />;
  const userIcon = () => <AntDesign color='white' name="user" size={25}  />;
  const taskIcon = () => <FontAwesome color='white' name="tasks" size={25}  />;
  const calendarIcon = () => <EvilIcons color='white' name="calendar" size={25}  />;
  return (
    <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab icon={homeIcon} title='Home'/>
    <BottomNavigationTab icon={taskIcon} title='Task'/>
    <BottomNavigationTab icon={userIcon} title='SignIn'/>
  </BottomNavigation>
  )
}

export default Footer

