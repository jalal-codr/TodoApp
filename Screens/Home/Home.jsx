import React, { useState } from 'react'
import { Alert,View,Text,StyleSheet, TextInput,Button,TouchableOpacity } from 'react-native'
import NewTask from '../../Components/Tasks/NewTask'
import Form from '../../Components/Tasks/Form'

function Home() {
    const [formState,setFormState] = useState(false);
    const [tittle, setTittle] = useState()

    const createTask = ()=>{
        if(formState){
            setFormState(false);
        }
        else{
            setFormState(true);
        }
    } 

    const renderForm = ()=>{
        if(formState){
            return(
                <View>
                <TextInput
                    style={styles.textBox}
                    placeholder="Task Tittle"
                    onChangeText={text=>setTittle(text)}
                    defaultValue={""}
                />
                <Button title='Create' onPress={()=>{
                    Alert.alert(tittle)
                    setFormState(false)
        
                }}/>
            </View>
            )
        }
    }

  return (
    <View style={styles.container}>
        {
            renderForm()
        }
        <View style={styles.newTask}>
            <TouchableOpacity onPress={createTask}>
                <NewTask />
            </TouchableOpacity>
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
        marginTop:580,
        marginRight:280
    },
    textBox:{
        marginTop:10,
        width:350,
        height:40,
        borderColor:'black',
        borderWidth:1,
        },
}) 
