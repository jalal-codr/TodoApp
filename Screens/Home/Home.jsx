import React, { useState } from 'react'
import {Image,View,StyleSheet,TouchableOpacity, Alert} from 'react-native'
import { Datepicker,Input, Layout,Text,Button  } from '@ui-kitten/components';
import checkList from '../../assets/Checklist.png'
import logo from '../../assets/icon.png'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DateTimePicker from '@react-native-community/datetimepicker';
import Form from '../../Components/Tasks/Form';

function Home() {
  const plusIcon = () => <AntDesign color='white' name="pluscircle" size={45}  />;
  const sendIcon = () => <Ionicons color='white' name="send" size={20}  />;
  const cancleIcon = () => <MaterialIcons color='white' name="cancel" size={25}  />;
  const calendarIcon = () => <EvilIcons color='white' name="calendar" size={25}  />;
  const timerIcon = () => <MaterialCommunityIcons color='white' name="timer" size={25}  />;

  const [check,setCheck] = useState(false)
  const [taskName,setTaskName] = useState('')
  const  [description,setDescription] = useState('')
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setTime(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode('time');
  };



  const plusBtnClick = ()=>{
    setCheck(true)
  }
  const cancleBtnClick = ()=>{
    setCheck(false)
  }

  const render = ()=>{
    if(check){
      return(<>
      <View style={styles.taskView}>
      <View style={styles.cancleIcon} ><TouchableOpacity onPress={cancleBtnClick} >{cancleIcon()}</TouchableOpacity></View>
      <Input
      placeholder='Task name'
      value={taskName}
      onChangeText={value => setTaskName(value)}
    />
    <Input
        multiline={true}
        style={styles.description}
        value={description}
        onChange={nextValue => setDescription(nextValue)}
        textStyle={styles.inputTextStyle}
        placeholder='Description'
        // {...multilineInputState}
      />
      <Datepicker
        label='Due date'
        // caption='Caption'
        placeholder='Pick Date'
        date={date}
        onSelect={nextDate => setDate(nextDate)}
        accessoryRight={calendarIcon()}
      />
      <View>
      <View style={styles.timeLogo}>
       <TouchableOpacity onPress={showTimepicker}>{timerIcon()}</TouchableOpacity>
      </View >
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
    <Button accessoryRight={sendIcon()} style={styles.taskBtn} onPress={() => Alert.alert("Btn pressed")}>
        CREATE
    </Button>
      </View>
      </>)
    }else{
      return(<>
          <View style={styles.photoView}>
          <Image source={checkList}></Image>
          <Text style={styles.h_Text} >What do you want to do today ?</Text>
          <Text style={styles.p_text}>Tap the + to add a new task</Text>
          </View>
          <View style={styles.plusIcon} >
            <TouchableOpacity onPress={plusBtnClick}>
            {
              plusIcon()
            }
            </TouchableOpacity>
          </View>
      </>)
    }
  }

   

  return (
    <Layout  style={styles.layout}>
      <View style={styles.nav}>
        <Text style={styles.text}>Hi Jalal</Text>
        <Image style={styles.userLogo} source={logo}></Image>
      </View>
      {
        render()
      }

    </Layout>
  )
}

export default Home

const styles = StyleSheet.create({
  layout:{
      alignItems: 'center',
      height:900
    },
  nav:{
    flexDirection:'row',
    width:400,
    marginTop:50
  },
  userLogo:{
    width:50,
    height:50,
    borderRadius:20,
    marginLeft:280
  },
  photoView:{
    marginTop:100,
  },
  text:{
    marginLeft:15,
    marginTop:15
  },
  h_Text:{
    fontSize:20,
  },
  p_text:{
    marginLeft:40,
    marginTop:10,
  },
  plusIcon:{
    marginTop:150,
  },
  inputTextStyle: {
    minHeight: 64,
  },
  cancleIcon:{
    marginBottom:5,
  },
  taskView:{
    marginTop:80,
  },
  timeLogo:{
    marginTop:10,
  },
  taskBtn:{
    marginTop:10,
  },
  description:{
    marginTop:10,
  }
})

