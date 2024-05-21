import { FC } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IMenuItem, TNav } from '@/app/layout/bottom-menu/types';
import MenuItem from '@/app/layout/bottom-menu/MenuItem';

interface IProps {
    nav: TNav;
    currentRoute: string | undefined;
}

const menu: IMenuItem[] = [
    { iconName: 'home', path: 'Home' },
    { iconName: 'setting', path: 'Settings' },
    { iconName: 'infocirlceo', path: 'Instruction' },
];

const BottomMenu: FC<IProps> = (props) => {
    const { bottom } = useSafeAreaInsets();

    return (
        <View
            className="pt-5 px-3 flex-row justify-between items-center w-full"
            style={{ paddingBottom: bottom + 10 }}
        >
            {menu.map((item) => (
                <MenuItem key={item.path} item={item} {...props} />
            ))}
        </View>
    );
};

export default BottomMenu;
