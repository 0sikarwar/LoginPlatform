import React, {useState, useEffect,useContext} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import Input from '../components/Input';
import styles from '../styles';
import { primaryButtonColor } from '../styles/color';
import { validateEmail } from '../utils';
import AppContext from  '../context'
import { registerUser } from '../context/actions/user';
import { changeTheme } from '../context/actions';
const LoginView = (props) => {
  const [username, setUserName] = useState(props.route.params.username || '');
  const [password, setPassword] = useState('');
  const {
    defaultInput,
    defaultLable,
    mt20,
    pl20,
    pr20,
    pt20,
    pb20,
    cblue,
    taCenter,
    mt15,
  } = styles;
  const [mainContext, dispatch] =  useContext(AppContext)
  console.log('mainContext',mainContext)
  useEffect(() => {
    setUserName(props.route.params.username || '');
  }, [props.route.params.username]);
  const _handleInputChange = (value, name) => {
    if (name === 'username') {
      setUserName(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const _handleSubmit = () => {
    dispatch(registerUser({ name: "test" }))
    dispatch(changeTheme())
    if (!validateEmail(username)) {
      Alert.alert('Oh snap', `Incorrect email ${username}`);
      return;
    }
    Alert.alert('Logged In', `UserName ${username} Password ${password}`);
  };
  const _handleSignupClick = () => {
    props.navigation.navigate('Signup', {
      username: username,
    });
  };
  return (
    <View style={[]}>
      <View style={[pl20, pr20, pt20, pb20]}>
        <Text style={[defaultLable]}>Enter username or email id</Text>
        <Input
          style={defaultInput}
          placeholder={'<> username/email'}
          onChange={_handleInputChange}
          name="username"
          value={username}
        />
        <Text style={[defaultLable, mt20]}>Enter Password</Text>
        <Input
          style={defaultInput}
          placeholder={'<> Password'}
          onChange={_handleInputChange}
          name="password"
          value={password}
        />
      </View>
      <Button onPress={_handleSubmit} title="Log in" color={primaryButtonColor} />
      <Text style={[cblue, taCenter, mt15]} onPress={_handleSignupClick}>
        Don't have account Signup
      </Text>
    </View>
  );
};

export default LoginView;
