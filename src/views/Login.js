import React, {useState, useEffect,useContext} from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import Input from '../components/Input';
import styles from '../styles';
import { validateEmail } from '../utils';
import AppContext from  '../context'
import { registerUser, loginUser, resetUserData } from '../context/actions/user';
import { changeTheme } from '../context/actions';
const LoginView = (props) => {
  const [username, setUserName] = useState(props.route.params.username || '');
  const [password, setPassword] = useState('');
  const [mainContext, dispatch] =  useContext(AppContext)
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
    primaryButton,
    primaryButtonText,
    w100p
  } = styles;
  useEffect(() => {
    setUserName(props.route.params.username || '');
  }, [props.route.params.username]);

  useEffect(() => {
    if (mainContext.user.loginErrMsg) {
      Alert.alert('Oh snap', mainContext.user.loginErrMsg);
    }
    if (mainContext.user.loggedIn) {
      props.navigation.navigate('Home');
    }
  }, [JSON.stringify(mainContext.user)])

  const _handleInputChange = (value, name) => {
    if (name === 'username') {
      setUserName(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const validateInputs = () => {
    if (!password) {
      Alert.alert('Oh snap', `Password is required`);
      return false;
    }
    if (!validateEmail(username)) {
      Alert.alert('Oh snap', `Incorrect email address`);
      return false;
    }
    return true;
  };

  const _handleSubmit = () => {
    if (validateInputs()) {
      dispatch(resetUserData())
      const userData = {
        username,
        password,
      }
      dispatch(loginUser(userData,dispatch))
    }
   
  };
  console.log("JSON.stringify(mainContext.user)", JSON.stringify(mainContext.user) )
  const _handleSignupClick = () => {
    props.navigation.navigate('Signup', {
      username: username,
    });
  };
  return (
    <View style={[w100p]}>
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
          secureTextEntry={true}
        />
      <TouchableOpacity onPress={_handleSubmit} style={[primaryButton]}>
        <Text style={[primaryButtonText]}>Log In</Text>
      </TouchableOpacity>
      </View>
      <Text style={[cblue, taCenter]} onPress={_handleSignupClick}>
        Don't have account Signup
      </Text>
    </View>
  );
};

export default LoginView;
