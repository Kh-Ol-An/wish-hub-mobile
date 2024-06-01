import { FC, useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useAppSelector } from "@/app/store/hook";

const Home: FC = () => {
    const myUser = useAppSelector((state) => state.myUser.user);

    const [accessToken, setAccessToken] = useState<string | null | undefined>(null);
    const [refreshToken, setRefreshToken] = useState<string | null | undefined>(null);

    // useEffect(() => {
    //     const test = async () => {
    //         const tokenA = await getToken('accessToken');
    //         setAccessToken(tokenA);
    //         const tokenR = await getToken('refreshToken');
    //         setRefreshToken(tokenR);
    //     };
    //     test();
    // }, []);

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
