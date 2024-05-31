import { FC, useEffect, useState } from 'react';
import { useNavigationContainerRef } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppSelector } from '@/app/store/hook';
import { privateRoutes, publicRoutes, unauthenticatedRoutes } from '@/app/navigation/routes';
import { TypeRootStackParamList } from '@/app/navigation/navigation.types';
import BottomMenu from '@/app/layout/bottom-menu/BottomMenu';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const Navigation: FC = () => {
    const myUser = useAppSelector((state) => state.myUser.user);

    const [currentRoute, setCurrentRoute] = useState<string | undefined>(undefined);

    const navRef = useNavigationContainerRef();

    useEffect(() => {
        setCurrentRoute(navRef.getCurrentRoute()?.name);

        const listener = navRef.addListener('state', () => setCurrentRoute(navRef.getCurrentRoute()?.name));

        return () => {
            navRef.removeListener('state', listener);
        }
    }, []);

    return (
        <>
            <NavigationContainer ref={navRef}>
                <Stack.Navigator>
                    {myUser ? (
                        privateRoutes.map((route) => (
                            <Stack.Screen key={route.name} name={route.name} component={route.component} />
                        ))
                    ) : (
                        unauthenticatedRoutes.map((route) => (
                            <Stack.Screen key={route.name} name={route.name} component={route.component} />
                        ))
                    )}
                    {publicRoutes.map((route) => (
                        <Stack.Screen key={route.name} name={route.name} component={route.component} />
                    ))}
                </Stack.Navigator>
            </NavigationContainer>
            {myUser && currentRoute && <BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />}
        </>
    );
};

export default Navigation;
