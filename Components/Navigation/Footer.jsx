import React from 'react'
import { BottomNavigationTab, Text } from '@ui-kitten/components';
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

function Footer() {
  const homeIcon = () => <AntDesign name="home" size={35}  />;
  const userIcon = () => <AntDesign name="user" size={35}  />;
  const clockIcon = () => <AntDesign name="clockcircleo" size={35}  />;
  const calendarIcon = () => <EvilIcons name="calendar" size={35}  />;
  return (
    <BottomNavigationTab
      title={evaProps => <Text {...evaProps}>USERS</Text>}
    />
    <BottomNavigationTab
    title={evaProps => <Text {...evaProps}>USERS</Text>}
  />
    
  )
}

export default Footer

