import { FC, useLayoutEffect, useState } from 'react';
import { Divider, HeaderSection, MainButton, MainInput } from '../../components';
import { KeyboardAvoidingView, Platform, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RootStackScreenProps } from '../../types';
import { useRegisterContext } from '../../context';
import { createUserWithEmailAndPassword, updateProfile, UserCredential } from 'firebase/auth';
import { auth } from '../../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IProps extends RootStackScreenProps<'NicknameScreen'> {}

export const NicknameScreen: FC<IProps> = ({ navigation }) => {
    const { registerData, setRegisterData } = useRegisterContext();
    const [loading, setLoading] = useState<boolean>(false);
    const { nickname, email, passwordConfirmation, fullName } = registerData;

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

    const storeData = async (value: any) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@storage_Key', jsonValue);
        } catch (e) {
            // saving error
        }
    };

    const storeTokenData = async (value: string) => {
        try {
            await AsyncStorage.setItem('@accessToken', value);
        } catch (e) {
            // saving error
        }
    };

    const onRegisterPress = () => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, passwordConfirmation)
            .then((authUser: UserCredential) => {
                updateProfile(authUser.user, {
                    displayName: fullName,
                }).then(res => console.log({ res }));
                const token = authUser.user.getIdToken();
                const obj = authUser.user.toJSON();
                storeData(obj).then(r => console.log({ r }));
                token.then(res => storeTokenData(res));
                navigation.replace('Root');
            })
            .catch(error => alert(error))
            .finally(() => setLoading(false));
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
