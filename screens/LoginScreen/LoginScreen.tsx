import { FC, useEffect, useLayoutEffect } from 'react';
import { LoginViaBtn, RegisterFooter, Divider } from '../../components';
import { signInViaButtons } from './data';
import { RootStackScreenProps } from '../../types';
import { Text, View } from 'react-native';
import { FooterBoldText, FooterRegisterStyled, FooterStyled, LoginScreenContainer } from './styles';
// import { auth } from '../../firebase';

interface IProps extends RootStackScreenProps<'Login'> {}

export const LoginScreen: FC<IProps> = ({ navigation }) => {
    const onLoginButtonPress = (title: string) => {
        if (title === 'LoginViaEmail') navigation.navigate('LoginViaEmail');
    };

    const onRegisterPress = () => {
        navigation.navigate('RegisterScreen');
    };

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
                        key={title + index}
                        onPress={() => onLoginButtonPress(route)}
                        Icon={icon}
                        title={''}
                    >
                        {title}
                    </LoginViaBtn>
                ))}
            </LoginScreenContainer>
            <RegisterFooter onRegisterPress={onRegisterPress} />
        </View>
    );
};
