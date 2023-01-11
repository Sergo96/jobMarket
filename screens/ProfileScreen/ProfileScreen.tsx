import { MainButton, Wrapper } from '../../components';

import { RootTabScreenProps } from '../../types';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@accessToken');
        const obj = await AsyncStorage.getItem('@storage_Key');
        if (value !== null) {
            // value previously stored
            return obj;
        }
    } catch (e) {
        // error reading value
    }
};
export function ProfileScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    const [token, setToken] = useState<string>('');
    const [objec, setObjec] = useState<any>();

    const signOutUser = () => {
        signOut(auth)
            .then(out => {
                // Sign-out successful.
                console.log({ out });
                navigation.replace('Login');
            })
            .catch(error => {
                // An error happened.
            });
    };

    useEffect(() => {
        getData().then(res => setObjec(res));
    }, []);
    return (
        <Wrapper>
            <Text>token: {objec}</Text>
            <MainButton onPress={signOutUser}>Click</MainButton>
        </Wrapper>
    );
}
