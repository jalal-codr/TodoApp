import React from 'react'
import { View,StyleSheet } from 'react-native';
import { Button} from '@ui-kitten/components';
import AntDesign from 'react-native-vector-icons/AntDesign'

function GoogleAuth() {
    const googleLog = () => <AntDesign color='white' name="google" size={25}  />;
  return (
    <View>
    <Button
        style={styles.button}
        status='primary'
        accessoryLeft={googleLog}
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
