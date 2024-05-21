import { FC } from 'react';
import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { IMenuItem, TNav } from '@/app/layout/bottom-menu/types';

interface IProps {
    item: IMenuItem;
    nav: TNav;
    currentRoute: string | undefined;
}

const MenuItem: FC<IProps> = ({ item, nav, currentRoute }) => {
    const isActive = currentRoute === item.path;

    return (
        <Pressable onPress={() => nav(item.path)}>
            <AntDesign
                name={item.iconName as string}
                size={24}
                color={isActive ? 'blue' : 'gray'}
            />
        </Pressable>
    );
};

export default MenuItem;
