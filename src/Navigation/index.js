import React, { useEffect, useContext } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList,   DrawerItem } from '@react-navigation/drawer';
import LoginNavigator from './LoginNavigator'
import HomeNavigator from './HomeNavigator'
import AppContext from '../context'
import { getLoggedInUser } from '../utils/user';

const Drawer = createDrawerNavigator();
const Navigation = () => {
  const [mainContext, dispatch] = useContext(AppContext)
  useEffect(() => {getLoggedInUser(dispatch);}, [])
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeNavigator}/>
        <Drawer.Screen name="Login" component={LoginNavigator}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
const Hide = () => null
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

export default Navigation;
