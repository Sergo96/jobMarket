import { FC, useLayoutEffect, useState } from 'react';
import { RootStackScreenProps } from '../../types';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, useWindowDimensions } from 'react-native';

import { EmailPhoneRegisterTabRoute } from './EmailPhoneRegisterTabRoute';
interface IProps extends RootStackScreenProps<'RegisterScreen'> {}

export const RegisterScreen: FC<IProps> = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Registration',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={navigation.goBack}>
                    <AntDesign name={'arrowleft'} size={24} color={'black'} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const onEmailSendHandler = () => {
        navigation.navigate('CreatePassword');
    };

    return <EmailPhoneRegisterTabRoute onEmailSendHandler={onEmailSendHandler} />;
};
