import { FC, useContext, useLayoutEffect, useState } from 'react';
import { Divider, HeaderSection, MainButton, MainInput } from '../../components';
import { KeyboardAvoidingView, Platform, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RootStackScreenProps } from '../../types';
import { AuthContext, useRegisterContext } from '../../context';
// import { createUserWithEmailAndPassword, updateProfile, UserCredential } from 'firebase/auth';
// import { auth } from '../../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { apiClient } from '../../api/apiClient';
import { accessTokenManager } from '../../helpers';

interface IProps extends RootStackScreenProps<'NicknameScreen'> {}

export const NicknameScreen: FC<IProps> = ({ navigation }) => {
    const { registerData, setRegisterData } = useRegisterContext();
    const [loading, setLoading] = useState<boolean>(false);
    const { nickname, email, passwordConfirmation, fullName, birthDate } = registerData;
    const token = accessTokenManager.getAccessToken();
    const { userToken, signOut, signIn } = useContext(AuthContext);

    console.log('token', token);

    console.log('date', { birthDate });

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Nickname',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={navigation.goBack}>
                    <AntDesign name={'arrowleft'} size={24} color={'black'} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const onRegisterPress = async () => {
        try {
            console.log('click');
            console.log({ nickname, email, passwordConfirmation });
            console.log('env', process);
            setLoading(true);

            const res = await apiClient.post(`/user/register`, {
                username: nickname,
                email: email,
                password: passwordConfirmation,
                birthdate: birthDate,
            });
            console.log('inner');

            signIn(res.data.token);
            console.log({ res });
        } catch (err) {
            console.log({ err });
        } finally {
            setLoading(false);
        }
    };
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={90}
                style={{ padding: 30 }}
            >
                <Divider size={30} />
                <HeaderSection
                    title={'What is your Nickname and Full Name?'}
                    subTitle={'We don’t share this information with other users.\n'}
                />
                <Divider size={20} />
                <MainInput
                    value={fullName}
                    onChangeText={text =>
                        setRegisterData(prevState => ({
                            ...prevState,
                            fullName: text,
                        }))
                    }
                    placeholder={'Enter your full name'}
                />
                <Divider size={15} />
                <MainInput
                    value={nickname}
                    onChangeText={text =>
                        setRegisterData(prevState => ({
                            ...prevState,
                            nickname: text,
                        }))
                    }
                    placeholder={'Your Nickname'}
                />
                <Divider size={30} />
                <MainButton
                    loading={loading}
                    disabled={!nickname.length || !fullName.length || loading}
                    onPress={onRegisterPress}
                >
                    Register
                </MainButton>
                <View style={{ height: 100 }} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
