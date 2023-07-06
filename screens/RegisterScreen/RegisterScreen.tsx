import React, { FC, useLayoutEffect } from 'react';
import { RootStackScreenProps } from '../../types';
import { Divider, MainButton, MainContainerStyled, MainInput } from '../../components';
import { NavbarOptions } from '../../classes';
import { PasswordSection } from './PasswordSection/PasswordSection';

interface IProps extends RootStackScreenProps<'RegisterScreen'> {}

export const RegisterScreen: FC<IProps> = ({ navigation }) => {
    const options = new NavbarOptions('Registration', true, 'center');

    useLayoutEffect(() => {
        navigation.setOptions(options);
    }, [navigation]);

    const onRegisterPress = () => {
        navigation.replace('Root');
    };

    return (
        <MainContainerStyled>
            <MainInput placeholder="Full Name" />
            <Divider size={20} />
            <MainInput placeholder="Email" />
            <Divider />
            <PasswordSection />
            <Divider />
            <MainInput placeholder="Your Skills" />
            <Divider />
            <MainButton onPress={onRegisterPress}>Register</MainButton>
        </MainContainerStyled>
    );
};
