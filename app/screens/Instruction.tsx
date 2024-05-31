import { FC } from 'react';
import { Text, View } from 'react-native';
import { useAppSelector } from "@/app/store/hook";

const Instruction: FC = () => {
    const myUser = useAppSelector((state) => state.myUser.user);

    return (
        <View>
            <Text>Instruction</Text>
            <Text>myUser: {myUser?.lastName}</Text>
        </View>
    );
};

export default Instruction;
