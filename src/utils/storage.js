import AsyncStorage from '@react-native-community/async-storage';

export const saveItem = async (key, value) =>{
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};
  
export const getItem = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            return JSON.parse(value)
        }
        return false;
    } catch (e) {
        console.log(e);
        return false;
    }
}