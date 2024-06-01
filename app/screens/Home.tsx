import { FC, useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useAppSelector } from "@/app/store/hook";
import { setAsyncStorage, getAsyncStorage } from "@/app/utils/useAsyncStorage";

const Home: FC = () => {
    const myUser = useAppSelector((state) => state.myUser.user);

    const [accessToken, setAccessToken] = useState<string | null | undefined>(null);
    const [refreshToken, setRefreshToken] = useState<string | null | undefined>(null);

    useEffect(() => {
        const test = async () => {
            const tokenA = await getAsyncStorage('accessToken');
            setAccessToken(tokenA);
            const tokenR = await getAsyncStorage('refreshToken');
            setRefreshToken(tokenR);

            await setAsyncStorage('test', 'test message')
            const a = await getAsyncStorage('test')
            console.log('addddddddddddddddddd: ', a)
        };
        test();
    }, []);

    return (
        <View>
            <Text>Home</Text>
            <Text>myUser: {myUser?.firstName}</Text>
            <Text>accessToken: {accessToken}</Text>
            <Text>refreshToken: {refreshToken}</Text>
        </View>
    );
};

export default Home;
