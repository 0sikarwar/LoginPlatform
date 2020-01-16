import React from 'react'
import {View, Text, Dimensions} from 'react-native'
import styles from '../styles'

const Header = props =>{
  const {fs20, pt10, pb10, fw800, taCenter, taMiddle, bgPrimary, mtSatusBar} = styles
  return (
    <View style={[pt10, pb10, bgPrimary]}>
      <Text style={[fs20,fw800, taCenter, taMiddle]}>
        {"Header"}
      </Text>
    </View>
  )
}
export default Header
