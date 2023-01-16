import { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RootStackScreenProps } from '../../types';
import {
    MainInput,
    PasswordInput,
    Divider,
    MainButton,
    RegisterFooter,
    HeaderSection,
} from '../../components';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

interface IProps extends RootStackScreenProps<'LoginViaEmail'> {}

export const LoginViaEmail: FC<IProps> = ({ navigation }) => {
    const email = useRef('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Sign In',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={navigation.goBack}>
                    <AntDesign name={'arrowleft'} size={24} color={'black'} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const onRegisterPress = () => {
        navigation.navigate('GetLocation');
    };

    const signIn = () => {
        setLoading(true);
        const correctEmail = email.current.trim();
        signInWithEmailAndPassword(auth, correctEmail, password)
            .then(userCredential => {
                // Signed in
                const user = userCredential.user;
                // ...
                setLoading(false);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage: string = error.message;
                setErrorMessage('Wrong Email or Password');
            })
            .finally(() => setLoading(false));
    };

    return (
        <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={90}
                style={{ backgroundColor: 'white', flex: 1, justifyContent: 'space-around' }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ paddingLeft: 30, paddingRight: 30 }}>
                        <HeaderSection title={'Sign In'} subTitle={''} />
                        <MainInput
                            onChangeText={text => (email.current = text)}
                            isError={!!errorMessage}
                            placeholder={'Email'}
                        />
                        <Divider size={20} />
                        <PasswordInput
                            show={true}
                            onTextDelete={() => {}}
                            placeholder={'Password'}
                            isError={!!errorMessage}
                            onChangeText={text => setPassword(text)}
                        />
                        <Divider size={25} />
                        <Text style={{ color: 'red' }}>{errorMessage}</Text>
                        <Divider size={25} />
                        <MainButton loading={loading} disabled={loading} onPress={signIn}>
                            Sign In
                        </MainButton>
                        <Divider size={25} />
                        <RegisterFooter onRegisterPress={onRegisterPress} />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
