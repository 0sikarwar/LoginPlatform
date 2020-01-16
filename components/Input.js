import React from 'react'
import {View, TextInput} from 'react-native'

const Input = props =>{
  const _handleChange = (value)=>{
    props.onChange(value, props.name)
  }
  return (
    <View>
      <TextInput
        value ={props.value}
        onChangeText={_handleChange}
        {...props}
      />
    </View>
  )
}

export default Input;