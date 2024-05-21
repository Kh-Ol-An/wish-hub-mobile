import Auth from '@/app/screens/Auth';
import Home from '@/app/screens/Home';
import Settings from '@/app/screens/Settings';
import Instruction from '@/app/screens/Instruction';
import { IRoute } from '@/app/navigation/navigation.types';

export const privateRoutes: IRoute[] = [
    {
        name: 'Home',
        component: Home,
    },
    {
        name: 'Settings',
        component: Settings,
    },
];

export const unauthenticatedRoutes: IRoute[] = [
    {
        name: 'Auth',
        component: Auth,
    },
];

export const publicRoutes: IRoute[] = [
    {
        name: 'Instruction',
        component: Instruction,
    },
];
