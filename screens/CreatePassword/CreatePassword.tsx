import { FC, useLayoutEffect } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { PasswordInput, Divider, MainButton, Typography } from '../../components';
import { AntDesign } from '@expo/vector-icons';
import { RootStackScreenProps } from '../../types';
import { PasswordRequirements } from './PasswordRequirements';
import { useRegisterContext } from '../../context';
import { passwordValidator } from '../../helpers';

interface IProps extends RootStackScreenProps<'CreatePassword'> {}

export const CreatePassword: FC<IProps> = ({ navigation }) => {
    const { registerData, setRegisterData } = useRegisterContext();
    const { password, passwordConfirmation } = registerData;
    const passwordValidated = passwordValidator(password, passwordConfirmation);
    const disabledButton = Object.values(passwordValidated).every(item => item);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Create Password',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={navigation.goBack}>
                    <AntDesign name={'arrowleft'} size={24} color={'black'} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const onPressHandler = () => {
        navigation.navigate('AddBirthDateScreen');
    };

    return (
        <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={90}
                style={{ padding: 30, backgroundColor: 'white' }}
            >
                <TouchableWithoutFeedback
                    onPress={() => Keyboard.dismiss()}
                    style={{ backgroundColor: 'white' }}
                >
                    <View>
                        <Typography textType={'h1'} align={'center'}>
                            Create Password
                        </Typography>
                        <Divider size={17} />
                        <PasswordInput
                            value={password}
                            onChangeText={text =>
                                setRegisterData(prevState => ({
                                    ...prevState,
                                    password: text,
                                }))
                            }
                            placeholder={'Password'}
                            show={true}
                            onTextDelete={() => {}}
                        />
                        <Divider size={17} />
                        <PasswordInput
                            placeholder={'Repeat Password'}
                            show={true}
                            value={passwordConfirmation}
                            onChangeText={text =>
                                setRegisterData(prevState => ({
                                    ...prevState,
                                    passwordConfirmation: text,
                                }))
                            }
                            onTextDelete={() => {}}
                        />
                        <Divider size={17} />
                        <PasswordRequirements {...passwordValidated} />
                        <Divider size={17} />
                        <MainButton onPress={onPressHandler} disabled={!disabledButton}>
                            Continue
                        </MainButton>
                        <View style={{ height: 100 }} />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
