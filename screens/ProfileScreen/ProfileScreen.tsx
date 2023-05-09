import { MainButton, Wrapper } from '../../components';

import { RootTabScreenProps } from '../../types';
import { useContext, useState } from 'react';
import { Text } from 'react-native';
import { useAccessToken } from '../../hooks';
import { AuthContext } from '../../context';

export function ProfileScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    const [objec, setObjec] = useState<any>();
    const token = useAccessToken();
    const { userToken, signOut, signIn } = useContext(AuthContext);

    console.log({ userToken });

    const signOutUser = () => {
        signOut();
    };

    return (
        <Wrapper>
            <Text>token: {objec}</Text>
            <MainButton onPress={signOutUser}>Click</MainButton>
        </Wrapper>
    );
}
