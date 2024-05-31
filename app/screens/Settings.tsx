import { FC } from 'react';
import { Text, View } from 'react-native';
import { useAppSelector } from "@/app/store/hook";

const Settings: FC = () => {
    const myUser = useAppSelector((state) => state.myUser.user);

    return (
        <View>
            <Text>Settings</Text>
            <Text>email: {myUser?.email}</Text>
        </View>
    );
};

export default Settings;
