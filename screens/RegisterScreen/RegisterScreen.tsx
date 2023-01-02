import { FC, useLayoutEffect, useState } from 'react';
import { RootStackScreenProps } from '../../types';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, useWindowDimensions } from 'react-native';

interface IProps extends RootStackScreenProps<'RegisterScreen'> {}

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { EmailPhoneRegisterTabRoute } from './EmailPhoneRegisterTabRoute';

const renderScene = SceneMap({
    first: () => <EmailPhoneRegisterTabRoute isPhone={false} />,
    second: () => <EmailPhoneRegisterTabRoute isPhone />,
});

export const RegisterScreen: FC<IProps> = ({ navigation }) => {
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Email' },
        { key: 'second', title: 'Phone' },
    ]);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Registration',
            headerBackTitleVisible: false,
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={navigation.goBack}>
                    <AntDesign name={'arrowleft'} size={24} color={'black'} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={props => (
                <TabBar
                    indicatorStyle={{ backgroundColor: 'black' }}
                    style={{ backgroundColor: 'white' }}
                    labelStyle={{ color: 'black' }}
                    {...props}
                />
            )}
        />
    );
};
