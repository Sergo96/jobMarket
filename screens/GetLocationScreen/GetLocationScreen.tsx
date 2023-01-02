import { FC, SetStateAction, useLayoutEffect, useState } from 'react';
import { Pressable, Text, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { RootStackScreenProps } from '../../types';
import { GetLocationContainer, LocationIconContainer } from './styles';
import { MainButton, Wrapper, Divider, MainInput } from '../../components';
import * as Location from 'expo-location';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import { LocationObject } from 'expo-location';
import { tCountry, useRegisterContext } from '../../context';

interface IProps extends RootStackScreenProps<'GetLocation'> {}

export const GetLocationScreen: FC<IProps> = ({ navigation }) => {
    const [countryCode, setCountryCode] = useState<CountryCode>('AM');
    const [country, setCountry] = useState<Country | null>(null);
    const { registerData, setRegisterData } = useRegisterContext();
    const onSelect = (country: Country) => {
        setCountryCode(country.cca2);
        setCountry(country);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Get Location',
            headerBackTitleVisible: false,
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={navigation.goBack}>
                    <AntDesign name={'arrowleft'} size={24} color={'black'} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const onLocationAddHandler = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return;
        let location = await Location.getCurrentPositionAsync({});
        if (country?.name) {
            setRegisterData(prevState => ({
                ...prevState,
                coordinates: {
                    lat: '' + location.coords.latitude,
                    log: '' + location.coords.longitude,
                },
                country: country as tCountry,
            }));
            navigation.navigate('RegisterScreen');
        } else {
            alert('Need to add Location');
        }
    };

    return (
        <Wrapper>
            <GetLocationContainer>
                <LocationIconContainer>
                    <Ionicons name={'md-location'} size={40} />
                </LocationIconContainer>
                <Divider />
                <Text>Click on FLAG to add your Location</Text>
                <Divider size={20} />
                <Pressable style={{ borderStyle: 'solid', backfaceVisibility: 'hidden' }}>
                    <CountryPicker
                        {...{
                            countryCode,
                            onSelect,
                        }}
                        visible
                    />
                </Pressable>
                <Divider size={20} />
                <MainInput value={country?.name as string} editable={false} />
                <Divider />
                <MainButton onPress={onLocationAddHandler}>Add Your Location</MainButton>
            </GetLocationContainer>
        </Wrapper>
    );
};
