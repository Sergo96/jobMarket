import { FC, useEffect, useRef, useState } from 'react';
import { RegisterScreenWrapperStyled } from '../styles';
import { CheckBox, Divider, MainButton, MainInput, Wrapper } from '../../../components';
import PhoneInput, { isValidNumber, PhoneInputProps } from 'react-native-phone-number-input';
import {
    containerStyle,
    countryPickerButtonStyle,
    TermsAgreeText,
    textContainerStyle,
    textInputStyle,
} from './styles';
import { validateEmail } from '../../../helpers';
import { useRegisterContext } from '../../../context';

interface IProps {
    isPhone: boolean;
}

export const EmailPhoneRegisterTabRoute: FC<IProps> = ({ isPhone }) => {
    const phoneInput = useRef<PhoneInput | null>(null);
    const [number, setPhoneNumber] = useState('');
    const { registerData, setRegisterData } = useRegisterContext();
    return (
        <RegisterScreenWrapperStyled>
            <Wrapper>
                {isPhone ? (
                    <PhoneInput
                        ref={phoneInput}
                        defaultCode={registerData.country?.cca2 as PhoneInputProps['defaultCode']}
                        layout="first"
                        withDarkTheme
                        withShadow
                        autoFocus
                        containerStyle={containerStyle}
                        textContainerStyle={textContainerStyle}
                        textInputStyle={textInputStyle}
                        countryPickerButtonStyle={countryPickerButtonStyle}
                        onChangeFormattedText={text => setPhoneNumber(text)}
                    />
                ) : (
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
                )}
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
                    disabled={false}
                    onPress={() => {
                        const res = isValidNumber(number, 'AM');
                        alert(res);
                        alert(number);
                    }}
                >
                    Continue
                </MainButton>
            </Wrapper>
        </RegisterScreenWrapperStyled>
    );
};
