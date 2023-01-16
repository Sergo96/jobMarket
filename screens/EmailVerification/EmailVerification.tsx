import { FC, useEffect, useLayoutEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { RootStackScreenProps } from '../../types';
import { HeaderSection, Wrapper, Divider, RoundGrayContainer, Typography } from '../../components';
import { auth } from '../../firebase';
import { sendEmailVerification } from 'firebase/auth';
import { ResendCounter } from './ResendCounter';

interface IProps extends RootStackScreenProps<'EmailVerification'> {}

export const EmailVerification: FC<IProps> = ({ navigation, route }) => {
    let user = auth.currentUser;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Email Verification',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
        });
    }, [navigation]);

    useEffect(() => {
        if (auth.currentUser) {
            sendEmailVerification(auth.currentUser).then(res => {
                // Email verification sent!
                // ...
                console.log(res);
            });
        }
    }, []);

    // useEffect(() => {
    //     if (user?.emailVerified !== null) {
    //         console.log(user?.emailVerified);
    //         if (user?.emailVerified === true) {
    //             navigation.replace('Root');
    //         }
    //     }
    // }, [user?.emailVerified]);

    const resendVerificationHandler = () => {
        if (auth.currentUser) {
            sendEmailVerification(auth.currentUser).then(res => {
                // Email verification sent!
                // ...
                console.log(res);
            });
        }
    };

    return (
        <Wrapper>
            <HeaderSection title={'Verify your Email'} subTitle={''} />
            <Divider size={25} />
            <View style={{ alignItems: 'center' }}>
                <RoundGrayContainer>
                    <Octicons size={25} name={'unverified'} color={'red'} />
                </RoundGrayContainer>
            </View>

            <Divider size={25} />
            <Typography textType={'h2'} align={'center'}>
                Unverified
            </Typography>
            <Divider size={25} />
            <ResendCounter
                navigation={navigation}
                route={route}
                onResendPress={resendVerificationHandler}
            />
        </Wrapper>
    );
};
