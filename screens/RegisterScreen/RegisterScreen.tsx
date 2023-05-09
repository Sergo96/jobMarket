import { FC, useEffect, useLayoutEffect } from 'react';
import { RootStackScreenProps } from '../../types';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { EmailPhoneRegisterTabRoute } from './EmailPhoneRegisterTabRoute';
// import { auth } from '../../firebase';
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

    useEffect(() => {
        // return auth.onAuthStateChanged(authUser => {
        //     if (authUser) {
        //         navigation.replace('Root');
        //     }
        // });
    }, []);

    const onEmailSendHandler = () => {
        navigation.navigate('CreatePassword');
    };

    return <EmailPhoneRegisterTabRoute onEmailSendHandler={onEmailSendHandler} />;
};
