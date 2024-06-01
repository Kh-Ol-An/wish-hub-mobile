import { FC } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { useAppDispatch } from '@/app/store/hook';
import { login } from '@/app/store/my-user/thunks';
import { IUser } from '@/app/models/IUser';

type Inputs = {
    firstName: IUser['firstName']
    email: IUser['email']
    password: string
    lang: 'en'
}

const Auth: FC = () => {
    const dispatch = useAppDispatch();

    const {
        control,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            // firstName: '',
            email: '',
            password: '',
            lang: 'en',
        },
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        // console.log('onSubmit: ', data);
        await dispatch(login(data));
    };

    return (
        <View>
            <Text>Auth</Text>

            <Controller
                control={control}
                name="email"
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
            />
            {errors.email && <Text>{errors.email.message}</Text>}

            <Controller
                control={control}
                name="password"
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
            />
            {errors.password && <Text>{errors.password.message}</Text>}

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};

export default Auth;
