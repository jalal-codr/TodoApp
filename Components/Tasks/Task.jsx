import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'

function Task({data}) {
    const DoneIcon = () => <Ionicons name="checkmark-done" size={35}  />;
    const DeleteIcon = () => <AntDesign name="delete" size={35}  />;
  return (
    <View>
        <Text>Task Name</Text>

        <View style={styles.iconDiv} >
            <View style={styles.doneIcon}>
            <TouchableOpacity>{DoneIcon()}</TouchableOpacity>
            </View>

            <View style={styles.deleteIcon}>
            <TouchableOpacity  >{DeleteIcon()}</TouchableOpacity>
            </View>
        
       
        </View>
        
        
    </View>
  )
}

export default Task
const styles = StyleSheet.create({
    text:{

    },
    iconDiv:{
        backgroundColor:"orange",
        width:350,
    },
    doneIcon:{
        backgroundColor:'blue',
        width:40,
    },
    deleteIcon:{
        backgroundColor:"red",
        width:40,
        marginLeft:310,
        marginTop:-34,
    },
})
