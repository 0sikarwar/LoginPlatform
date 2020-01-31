import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../views/Login';
import Signup from '../views/Signup';
import { LeftButton } from '../components/Header';
import { primaryThemeColor, primaryTextColor } from '../styles/color'

const Stack = createStackNavigator();

const RootNavigation = (props) => {
  return (
      <Stack.Navigator
        initialRouteName= "Login"
        screenOptions={{
          headerTintColor: primaryTextColor,
          headerStyle: {
            backgroundColor: primaryThemeColor,
          },
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={({ navigation }) => ({
            title: "Login",
            headerLeft: () => (
              <LeftButton
                title={"Menu"}
                onPress={()=>{props.navigation.openDrawer()}}
              />
            )
          })}
          initialParams={{}}
        />
        <Stack.Screen name="Signup" component={Signup} options={{}} />
      </Stack.Navigator>)
};

export default RootNavigation;
