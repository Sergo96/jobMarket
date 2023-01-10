import { FC, useEffect, useRef, useState } from 'react';
import { RegisterScreenWrapperStyled } from '../styles';
import {
    CheckBox,
    Divider,
    HeaderSection,
    MainButton,
    MainInput,
    Wrapper,
} from '../../../components';
import PhoneInput from 'react-native-phone-number-input';
import { TermsAgreeText } from './styles';
import { useRegisterContext } from '../../../context';
import firebase from 'firebase/compat';
import { validateEmail } from '../../../helpers';
import { tNoop } from '../../../types';

interface IProps {
    onEmailSendHandler: () => void;
}

export const EmailPhoneRegisterTabRoute: FC<IProps> = ({ onEmailSendHandler }) => {
    const phoneInput = useRef<PhoneInput | null>(null);
    const { registerData, setRegisterData } = useRegisterContext();

    const isDisabled = (isChecked: boolean, validEmail: boolean): boolean => {
        return !(isChecked && validEmail);
    };

    return (
        <RegisterScreenWrapperStyled>
            <Wrapper>
                <HeaderSection
                    title={'Enter Your Email'}
                    subTitle={'For registration we need email'}
                />
                <Divider size={24} />
                <MainInput
                    value={registerData.email}
                    onChangeText={text =>
                        setRegisterData(prevState => ({
                            ...prevState,
                            email: text,
                        }))
                    }
                    placeholder={'Enter Your Email'}
                    textContentType={'emailAddress'}
                />
                <Divider size={24} />
                <CheckBox
                    isChecked={registerData.isChecked}
                    onPress={() =>
                        setRegisterData(prev => ({
                            ...prev,
                            isChecked: !prev.isChecked,
                        }))
                    }
                    title={
                        <TermsAgreeText
                            onPress={() =>
                                setRegisterData(prev => ({
                                    ...prev,
                                    isChecked: !prev.isChecked,
                                }))
                            }
                        >
                            I agree to Terms of Service and acknowledge that you have read our
                            Privacy Policy to learn how we collect, use, and share your data.
                        </TermsAgreeText>
                    }
                />
                <Divider size={32} />
                <MainButton
                    disabled={isDisabled(registerData.isChecked, validateEmail(registerData.email))}
                    onPress={() => onEmailSendHandler()}
                >
                    Continue
                </MainButton>
            </Wrapper>
        </RegisterScreenWrapperStyled>
    );
};
