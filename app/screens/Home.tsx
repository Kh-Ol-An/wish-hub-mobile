import { FC } from 'react';
import { Text, View } from 'react-native';
import { useAppSelector } from "@/app/store/hook";

const Home: FC = () => {
    const myUser = useAppSelector((state) => state.myUser.user);

    return (
        <View>
            <Text>Home</Text>
            <Text>myUser: {myUser?.firstName}</Text>
        </View>
    );
};

export default Home;
