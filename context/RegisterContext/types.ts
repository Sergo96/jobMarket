export type tPhoneNumber = {
    number: string;
    code: string;
};

export type tCountry = {
    callingCode: string[];
    cca2: string;
    currency: string[];
    flag: string;
    name: string;
    region: string;
    subregion: string;
};

export type tRegisterType = {
    email: string;
    phoneNumber: tPhoneNumber;
    password: string;
    passwordConfirmation: string;
    fullName: string;
    nickname: string;
    birthDate: string;
    isChecked: boolean;
    country?: tCountry;
    coordinates: {
        lat: string;
        log: string;
    };
};
