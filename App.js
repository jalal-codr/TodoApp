import { StatusBar } from 'expo-status-bar';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import Home from './Screens/Home/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
      <Home/>
         {/* <NavigationContainer>
          <Stack.Navigator  initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home}/>
          </Stack.Navigator>
        </NavigationContainer> */}
    </Layout>
    </ApplicationProvider>


  );
}

