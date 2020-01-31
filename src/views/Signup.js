import React, {useState, useEffect, useContext} from 'react';
import {View, Text, Button, Alert, TouchableOpacity} from 'react-native';
import Input from '../components/Input';
import styles from '../styles';
import {validateEmail} from '../utils';
import AppContext from  '../context'
import { registerUser, resetUserData } from '../context/actions/user';
const Signup = (props) => {
  const [mainContext, dispatch] =  useContext(AppContext)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUserName] = useState(props.route.params.username || '');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
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
    primaryButtonText,
    primaryButton
  } = styles;
  useEffect(() => {
    setUserName(props.route.params.username || '');
  }, [props.route.params.username]);
  useEffect(() => {
    if (mainContext.user.registerErrMsg) {
      Alert.alert('Oh snap', mainContext.user.registerErrMsg);
    }
  }, [mainContext.user.registerErrMsg])
  console.log("mainContext signup",mainContext)
  const _handleInputChange = (value, name) => {
    switch (name) {
      case 'username':
        setUserName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'password2':
        setPassword2(value);
        break;
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
    }
  };

  const validateInputs = () => {
    if (!firstName || !lastName || !password || !password2) {
      Alert.alert('Oh snap', `All field required`);
      return false;
    }
    if (!validateEmail(username)) {
      Alert.alert('Oh snap', `Incorrect email ${username}`);
      return false;
    }
    if (password !== password2) {
      Alert.alert('Oh snap', `Password did not match`);
      return false;
    }
    return true;
  };

  const _handleSubmit = () => {
    if (validateInputs()) {
      dispatch(resetUserData())
      const newUser = {
        firstName,
        lastName,
        username,
        password
      }
      dispatch(registerUser(newUser, dispatch))
    }
  };

  const _handleSigninClick = () => {
    props.navigation.navigate('Login', {
      username: username,
    });
  };

  return (
    <View style={[]}>
      <View style={[pl20, pr20, pt20, pb20]}>
        <Text style={[defaultLable]}>Enter firstName</Text>
        <Input
          style={defaultInput}
          placeholder={'<> firstName'}
          onChange={_handleInputChange}
          name="firstName"
          value={firstName}
        />
        <Text style={[defaultLable, mt20]}>Enter lastName</Text>
        <Input
          style={defaultInput}
          placeholder={'<> lastName'}
          onChange={_handleInputChange}
          name="lastName"
          value={lastName}
        />
        <Text style={[defaultLable, mt20]}>Enter username or email id</Text>
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
          secureTextEntry={true}
        />
        <Text style={[defaultLable, mt20]}>Re-enter Password</Text>
        <Input
          style={defaultInput}
          placeholder={'<> Password'}
          onChange={_handleInputChange}
          name="password2"
          value={password2}
          secureTextEntry={true}
        />
      <TouchableOpacity onPress={_handleSubmit} style={[primaryButton]}>
        <Text style={[primaryButtonText]}>Register</Text>
      </TouchableOpacity>
      </View>
      <Text style={[cblue, taCenter]} onPress={_handleSigninClick}>
        Already have account Login
      </Text>
    </View>
  );
};

export default Signup;
