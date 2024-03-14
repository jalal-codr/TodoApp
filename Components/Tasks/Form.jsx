import React, { useState } from 'react'
import { View,TextInput,StyleSheet, Button, Alert } from 'react-native'

function Form({navigation}) {
    

  return (
    <View>
        <TextInput
            style={styles.textBox}
            placeholder="Task Tittle"
            onChangeText={text=>setTittle(text)}
            defaultValue={""}
        />
        <Button title='Create' onPress={()=>{
            Alert.alert(tittle)

        }}/>
    </View>
  )
}

export default Form
const styles = StyleSheet.create({
    textBox:{
        marginTop:10,
        width:350,
        height:40,
        borderColor:'black',
        borderWidth:1,
        },
})
