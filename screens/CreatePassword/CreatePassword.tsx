import { FC, useLayoutEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import {
    PasswordInput,
    Wrapper,
    Divider,
    MainButton,
    Typography,
    MainInput,
} from '../../components';
import { AntDesign } from '@expo/vector-icons';
import { RootStackScreenProps } from '../../types';
import { PasswordRequirements } from './PasswordRequirements';
import { useRegisterContext } from '../../context';
import { passwordValidator } from '../../helpers';

interface IProps extends RootStackScreenProps<'CreatePassword'> {}

export const CreatePassword: FC<IProps> = ({ navigation }) => {
    const { registerData, setRegisterData } = useRegisterContext();
    const { password, passwordConfirmation, fullName } = registerData;
    const passwordValidated = passwordValidator(password, passwordConfirmation);
    const disabledButton =
        Object.values(passwordValidated).every(item => item) && !!fullName.length;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Create Name and Password',
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
        <SafeAreaView>
            <Wrapper>
                <Typography textType={'h1'} align={'center'}>
                    Create Name and Password
                </Typography>
                <Divider size={17} />
                <MainInput
                    placeholder={'Your Name and Surname'}
                    value={fullName}
                    onChangeText={text =>
                        setRegisterData(prevState => ({
                            ...prevState,
                            fullName: text,
                        }))
                    }
                />
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
            </Wrapper>
        </SafeAreaView>
    );
};
