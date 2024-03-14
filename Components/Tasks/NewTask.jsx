import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Alert,Text, TouchableOpacity, View } from 'react-native'


function NewTask() {
    const MyIcon = () => <Ionicons name="create-outline" size={50}  />;

    const createTask = ()=>{
        Alert.alert("Hello World")
    } 
  return (
    <TouchableOpacity onPress={createTask}>
        <View>
            {
                MyIcon()
            }
            <Text>New Task</Text>
        </View>
    </TouchableOpacity>

  )
}

export default NewTask
