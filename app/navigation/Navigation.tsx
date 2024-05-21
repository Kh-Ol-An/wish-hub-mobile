import { FC, useEffect, useState } from 'react';
import { useNavigationContainerRef } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { privateRoutes, publicRoutes, unauthenticatedRoutes } from '@/app/navigation/routes';
import { TypeRootStackParamList } from '@/app/navigation/navigation.types';
import { useAuth } from '@/app/hooks/useAuth';
import BottomMenu from '@/app/layout/bottom-menu/BottomMenu';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const Navigation: FC = () => {
    const user = useAuth();

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
                    {user ? (
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
            {user && currentRoute && <BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />}
        </>
    );
};

export default Navigation;
