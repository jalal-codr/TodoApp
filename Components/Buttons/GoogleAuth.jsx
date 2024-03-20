import axios from "axios";
import React, { useEffect, useState } from 'react'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { View,StyleSheet } from 'react-native';
import { Button} from '@ui-kitten/components';
import AntDesign from 'react-native-vector-icons/AntDesign'


const googleLog = () => <AntDesign color='white' name="google" size={25}  />;


WebBrowser.maybeCompleteAuthSession();

function GoogleAuth() {
    const[accessToken,setAccessToken] = useState();
    const [user,setUser]= useState();
    const [request,response,promptAsync] = Google.useIdTokenAuthRequest({
        clientId:" 769015319573-ojokhra55n2gvfo5njafkleh8a8th7h9.apps.googleusercontent.com",
        iosClientId:"769015319573-ugql51ah8l99os8cmsghi25k304q0223.apps.googleusercontent.com",
        androidClientId:"769015319573-lgmecmb9864q16lqiad9e5dh93m05v9r.apps.googleusercontent.com"
    })

    useEffect(()=>{
        if(response?.type==='success'){
            setAccessToken(response.authentication.accessToken);
            accessToken && fetchUserInfo();
        }
    },[response,accessToken])

    const fetchUserInfo = async()=>{
        try{
            const options = {
                method: "GET",
                url:"https://www.googleapis.com/userinfo/v2/me",
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                data:{email:user.email},
              };
              const userInfo = await axios.request(options);
              setUser(userInfo.json());
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <View>
    <Button
        style={styles.button}
        status='primary'
        accessoryLeft={googleLog}
        onPress={()=>{promptAsync()}}
    >
      SignIn with Google
    </Button>
    </View>
  )
}

export default GoogleAuth

const styles = StyleSheet.create({
    button: {
        margin: 2,
      },
});
