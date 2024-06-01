import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncStorage = async (key: string, data: string) => {
    try {
        await AsyncStorage.setItem(key, data);
    } catch (error) {
        console.error(error);
    }
};

export const getAsyncStorage = async (key: string) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const removeAsyncStorage = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error(error);
    }
}
