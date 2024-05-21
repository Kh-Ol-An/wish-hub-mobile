import { AntDesign } from '@expo/vector-icons';
import { TypeRootStackParamList } from '@/app/navigation/navigation.types';

export interface IMenuItem {
    iconName: keyof typeof AntDesign.glyphMap;
    path: keyof TypeRootStackParamList;
}

export type TNav = (name: keyof TypeRootStackParamList) => void;
