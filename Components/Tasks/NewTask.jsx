import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text, View } from 'react-native'


function NewTask() {
    const MyIcon = () => <Ionicons name="create-outline" size={50}  />;

  return (
        <View >
            {
                MyIcon()
            }
            <Text>New Task</Text>
        </View>
  )
}

export default NewTask
