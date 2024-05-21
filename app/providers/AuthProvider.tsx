import { FC, PropsWithChildren, useState, useEffect, Dispatch, SetStateAction, createContext } from 'react';
import * as Splash from 'expo-splash-screen';
import { IUser } from '@/app/models/IUser';

export type TUser = IUser | null;

interface IContext {
    user: TUser
    setUser: Dispatch<SetStateAction<TUser>>
}

let ignore = Splash.preventAutoHideAsync();

export const AuthContext = createContext<IContext>({} as IContext);

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [user, setUser] = useState<TUser>({} as TUser);

    useEffect(() => {
        let isMounted = false;

        const getUserFromStorage = async () => {
            if (isMounted) {
                // Check if user is logged in
                // setUser(user)
            }

            await Splash.hideAsync();
        };

        let ignore = getUserFromStorage();

        return () => {
            isMounted = false;
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
