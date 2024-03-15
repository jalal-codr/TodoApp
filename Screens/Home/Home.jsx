import React, { useState } from 'react'
import { Alert,View,Text,StyleSheet, TextInput,Button,TouchableOpacity } from 'react-native'
import NewTask from '../../Components/Tasks/NewTask'
import Form from '../../Components/Tasks/Form'
import Task from '../../Components/Tasks/Task';
import Footer from '../../Components/Navigation/Footer';

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
                <TextInput
                    style={styles.textBox}
                    placeholder="Task desciption"
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
        <Task/>
        {
            renderForm()
        }
        <View style={styles.newTask}>
            <TouchableOpacity onPress={createTask}>
                <NewTask />
            </TouchableOpacity>
        </View>
        <Footer/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        width:390,
        height:200,
    },
    newTask:{
        marginTop:0,
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
