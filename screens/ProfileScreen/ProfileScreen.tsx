import { Divider, MainButton, Typography, Wrapper } from '../../components';
import { RootTabScreenProps } from '../../types';
import { useContext, useLayoutEffect } from 'react';
import { AuthContext } from '../../context';
import { NavbarOptions } from '../../classes';
import { DetailsContainer, ProfileImage, ProfileInnerContainer } from './styles';

export function ProfileScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    const { userToken, signOut, signIn } = useContext(AuthContext);
    const profileOptions = new NavbarOptions('Profile', true, 'center');

    useLayoutEffect(() => {
        navigation.setOptions(profileOptions);
    }, []);

    const signOutUser = () => {
        navigation.navigate('Login');
    };

    return (
        <Wrapper>
            <ProfileInnerContainer>
                <ProfileImage source={require('./profileFoto.jpeg')} />
                <DetailsContainer>
                    <Typography textType={'h1'} children={'John Doe'} />
                    <Divider size={15} />
                    <Typography
                        textType={'h4'}
                        children={'Software Engineer | React Native Developer'}
                    />
                    <Divider size={10} />
                    <Typography textType={'h3'} children={'San Francisco'} />
                </DetailsContainer>
                <Divider size={10} />
                <MainButton onPress={signOutUser}>Click</MainButton>
                <Divider size={10} />
                <MainButton onPress={signOutUser}>Edit</MainButton>
            </ProfileInnerContainer>
        </Wrapper>
    );
}
