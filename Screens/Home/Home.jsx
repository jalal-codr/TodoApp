import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import NewTask from '../../Components/Tasks/NewTask'

function Home() {
  return (
    <View style={styles.container}>
        <Text>Hello world</Text>
        <View style={styles.newTask}>
            <NewTask />
        </View>
        
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    newTask:{
        marginTop:640,
        marginRight:280
    },
}) 
