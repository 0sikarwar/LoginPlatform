import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import styles from '../styles'
const  MenuIcon  = require('../assests/menu.png')
const Header = props =>{
  const { fs20, pt10, pb10, fw800, taCenter, taMiddle, bgPrimary } = styles
  return (
    <View style={[pt10, pb10, bgPrimary]}>
      <Text style={[fs20,fw800, taCenter, taMiddle]}>
        {"Header"}
      </Text>
    </View>
  )
}
export const LeftButton = props => {
  const {pl10} = styles
  return (
    <TouchableOpacity {...props} style={[pl10]}>
      <Image source={MenuIcon} style={{ width: 40, height: 40 }} tintColor='black' />
    </TouchableOpacity>
  )
}
export default Header
