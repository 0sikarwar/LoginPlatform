import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Header from '../components/Header';
import LoginPage from './LoginPage'
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Root">
        <Drawer.Screen name="Login" component={LoginPage}/>
        <Drawer.Screen name="Header" component={Header} options={{}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
