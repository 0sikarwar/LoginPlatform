import React, {useState, useEffect} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import Input from '../components/Input';
import styles from '../styles';
import { primaryButtonColor } from '../styles/color';
import {validateEmail} from '../utils';
const Signup = (props) => {
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
  } = styles;
  useEffect(() => {
    setUserName(props.route.params.username || '');
  }, [props.route.params.username]);

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
      Alert.alert('Logged In', `UserName ${username} Password ${password}`);
    }
  };

  const _handleSignupClick = () => {
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
      </View>
      <Button onPress={_handleSubmit} title="Sign up" color={primaryButtonColor} />
      <Text style={[cblue, taCenter, mt15]} onPress={_handleSignupClick}>
        Already have account Login
      </Text>
    </View>
  );
};

export default Signup;
