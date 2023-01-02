import { Image } from 'react-native';

export const signInViaButtons = [
    {
        title: 'Continue via Google',
        icon: (
            <Image
                source={require('../../assets/images/google.png')}
                style={{ width: 24, height: 24 }}
            />
        ),
        route: '',
    },
    {
        title: 'Continue via Facebook',
        icon: (
            <Image
                source={require('../../assets/images/facebook.png')}
                style={{ width: 24, height: 24 }}
            />
        ),
        route: '',
    },
    {
        title: 'Sign In via Email or Phone',
        icon: (
            <Image
                source={require('../../assets/images/email.png')}
                style={{ width: 24, height: 24 }}
            />
        ),
        route: 'LoginViaEmail',
    },
];
