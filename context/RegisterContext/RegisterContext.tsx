import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { tCountry, tRegisterType } from './types';
import { noop } from '../../helpers';

const country: tCountry = {
    callingCode: [],
    cca2: '',
    currency: [],
    flag: '',
    name: '',
    region: '',
    subregion: '',
};

export const registerForm = {
    email: '',
    phoneNumber: { number: '', code: '' },
    password: '',
    passwordConfirmation: '',
    fullName: '',
    nickname: '',
    birthDate: '',
    isChecked: false,
    country,
    coordinates: {
        lat: '',
        log: '',
    },
};

export type RegisterFormContent = {
    registerData: tRegisterType;
    setRegisterData: Dispatch<SetStateAction<tRegisterType>>;
};

export const RegisterContext = createContext<RegisterFormContent>({
    registerData: registerForm,
    setRegisterData: () => noop(),
});

export const useRegisterContext = () => useContext(RegisterContext);
