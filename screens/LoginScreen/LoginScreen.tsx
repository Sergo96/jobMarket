import { FC, useEffect, useLayoutEffect } from 'react';
import { LoginViaBtn, RegisterFooter, Divider } from '../../components';
import { signInViaButtons } from './data';
import { RootStackScreenProps } from '../../types';
import { Text, View } from 'react-native';
import { FooterBoldText, FooterRegisterStyled, FooterStyled, LoginScreenContainer } from './styles';
import { auth } from '../../firebase';

interface IProps extends RootStackScreenProps<'Login'> {}

export const LoginScreen: FC<IProps> = ({ navigation }) => {
    const onLoginButtonPress = (title: string) => {
        console.log('click');
        if (title === 'LoginViaEmail') navigation.navigate('LoginViaEmail');
    };

    const onRegisterPress = () => {
        navigation.navigate('GetLocation');
    };

    useEffect(() => {
        return auth.onAuthStateChanged(authUser => {
            if (authUser) {
                navigation.replace('Root');
            }
        });
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: 'center',
        });
    }, [navigation]);
    return (
        <View style={{ height: '100%' }}>
            <LoginScreenContainer>
                {signInViaButtons.map(({ icon, title, route }, index) => (
                    <LoginViaBtn
                        key={title}
                        onPress={() => onLoginButtonPress(route)}
                        Icon={icon}
                        title={''}
                    >
                        {title}
                    </LoginViaBtn>
                ))}
            </LoginScreenContainer>
            <RegisterFooter onRegisterPress={onRegisterPress} />
            <Divider />
        </View>
    );
};
