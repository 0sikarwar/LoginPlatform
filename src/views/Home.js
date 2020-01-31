import React, { useEffect, useState, useContext } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import AppContext from '../context'

const Home = () => {
    const [mainContext, dispatch] = useContext(AppContext)
    const [userData, setUserData] = useState({})
    useEffect(() => {
        if (mainContext.user.userData) {
            setUserData(mainContext.user.userData)
        }
    }, [mainContext.user.userData]);

    const {
        fs20,
        w100p,
        h100p,
        alignCenter
    } = styles;
    return (
        <View style={[w100p, h100p, alignCenter]}>
            <Text style={[fs20]}>Welcome {userData.firstName} {userData.lastName}</Text>
        </View>
    )
}

export default Home;