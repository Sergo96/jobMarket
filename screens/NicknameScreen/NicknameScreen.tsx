import { FC, useLayoutEffect } from 'react';
import { Divider, MainButton, MainInput, Typography, Wrapper } from '../../components';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RootStackScreenProps } from '../../types';
import { useRegisterContext } from '../../context';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

interface IProps extends RootStackScreenProps<'AddBirthDateScreen'> {}

export const NicknameScreen: FC<IProps> = ({ navigation }) => {
    const { registerData, setRegisterData } = useRegisterContext();
    const {
        nickname,
        email,
        passwordConfirmation,
        fullName,
        birthDate,
        isChecked,
        country,
        coordinates,
        phoneNumber,
    } = registerData;
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

    const onRegisterPress = () => {
        createUserWithEmailAndPassword(auth, email, passwordConfirmation)
            .then(authUser => {
                updateProfile(authUser.user, {
                    displayName: fullName,
                });
                navigation.replace('Root');
            })
            .catch(error => alert(error));
    };
    return (
        <Wrapper>
            <Divider size={60} />
            <Typography textType={'h1'} align={'center'}>
                What is your Nickname and Full Name?
            </Typography>
            <Divider size={8} />
            <Typography textType={'p'} align={'center'}>
                We don’t share this information with other users.
            </Typography>
            <Divider size={30} />
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
            <MainButton disabled={!nickname.length} onPress={onRegisterPress}>
                Register
            </MainButton>
        </Wrapper>
    );
};
