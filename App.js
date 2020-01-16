import React from "react"
import Login from "./views/Login"
import Signup from "./views/Signup"
import Header from './components/Header'
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          header: () => (
            <Header/>
          )
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{}} initialParams={{}}/>
        <Stack.Screen name="Signup" component={Signup} options={{}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
