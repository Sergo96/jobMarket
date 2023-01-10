import { FC, useLayoutEffect } from 'react';
import { LoginViaBtn, Wrapper } from '../../components';
import { signInViaButtons } from './data';
import { RootStackScreenProps } from '../../types';
import { Text, TouchableOpacity, View } from 'react-native';
import { FooterBoldText, FooterRegisterStyled, FooterStyled, LoginScreenContainer } from './styles';
import { AntDesign } from '@expo/vector-icons';

interface IProps extends RootStackScreenProps<'Login'> {}

export const LoginScreen: FC<IProps> = ({ navigation }) => {
    const onLoginButtonPress = (title: string) => {
        if (title === 'LoginViaEmail') navigation.navigate('LoginViaEmail');
    };

    const onRegisterPress = () => {
        navigation.navigate('GetLocation');
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
                        key={title}
                        onPress={() => onLoginButtonPress(route)}
                        Icon={icon}
                        title={''}
                    >
                        {title}
                    </LoginViaBtn>
                ))}
            </LoginScreenContainer>
            <FooterStyled>
                <FooterRegisterStyled>
                    <Text>
                        Don’t have an account?{' '}
                        <FooterBoldText onPress={onRegisterPress}>Register</FooterBoldText>{' '}
                    </Text>
                </FooterRegisterStyled>
            </FooterStyled>
        </View>
    );
};
