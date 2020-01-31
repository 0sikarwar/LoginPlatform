import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/Home'
import { LeftButton } from '../components/Header';
import { primaryThemeColor, primaryTextColor } from '../styles/color'
const Stack = createStackNavigator();

const HomeNavigator = (props) => {
    return (
    <Stack.Navigator
    initialRouteName= "Home"
    screenOptions={{
      headerTintColor: primaryTextColor,
      headerStyle: {
        backgroundColor: primaryThemeColor,
      },
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              title: "Home",
              headerLeft: () => (
                <LeftButton
                  onPress={()=>{props.navigation.openDrawer()}}
                />
              )
            })}
            initialParams={{}}
      /> 
    </Stack.Navigator>
    )
  }
export default HomeNavigator;