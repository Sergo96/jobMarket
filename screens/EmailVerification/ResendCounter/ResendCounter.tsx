import { FC, useEffect } from 'react';
import { MainButton, Typography, Divider } from '../../../components';
import useCountdown from '../../../hooks/useCountdown/useCountdown';
import { tNoop } from '../../../interfaces';
import { RootStackScreenProps } from '../../../types';
import { auth } from '../../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

interface IProps extends RootStackScreenProps<'EmailVerification'> {
    onResendPress: tNoop;
}

export const ResendCounter: FC<IProps> = ({ onResendPress, navigation }) => {
    const [count, { startCountdown, stopCountdown, resetCountdown }] = useCountdown({
        countStart: 60,
        intervalMs: 1000,
    });
    let user = auth.currentUser;

    useEffect(() => {
        startCountdown();
        if (count < 0) stopCountdown();
    }, [count]);

    const onButtonPress = () => {
        resetCountdown();
        onResendPress();
    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                const emailVerified = user.emailVerified;

                console.log({ emailVerified });

                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [user?.emailVerified, count]);
    return (
        <>
            <Typography textType={'p'} align={'center'}>
                You will be able to resend verification to your email in {count} seconds
            </Typography>
            <Divider size={24} />
            <MainButton disabled={count > 0} onPress={onButtonPress}>
                Resend Verification
            </MainButton>
        </>
    );
};
