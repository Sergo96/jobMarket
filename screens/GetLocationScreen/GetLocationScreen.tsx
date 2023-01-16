import { FC, useEffect, useLayoutEffect, useState } from 'react';
import { Pressable, Text, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { RootStackScreenProps } from '../../types';
import { GetLocationContainer } from './styles';
import { MainButton, Wrapper, Divider, MainInput, RoundGrayContainer } from '../../components';
import * as Location from 'expo-location';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import { tCountry, useRegisterContext } from '../../context';
import { useIsFirstRender } from '../../hooks';

interface IProps extends RootStackScreenProps<'GetLocation'> {}

export const GetLocationScreen: FC<IProps> = ({ navigation }) => {
    const [countryCode, setCountryCode] = useState<CountryCode>('AM');
    const [country, setCountry] = useState<Country | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const { registerData, setRegisterData } = useRegisterContext();
    const isFirst = useIsFirstRender();

    const onSelect = (country: Country) => {
        setCountryCode(country.cca2);
        setCountry(country);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Get Location',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={navigation.goBack}>
                    <AntDesign name={'arrowleft'} size={24} color={'black'} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const onLocationAddHandler = async () => {
        setLoading(true);
        try {
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
                setLoading(false);
                navigation.navigate('RegisterScreen');
            } else {
                alert('Need to add Location');
            }
        } catch (e) {
            alert(e);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isFirst && country === null) {
            onSelect({
                callingCode: ['93'],
                cca2: 'AF',
                currency: ['AFN'],
                flag: 'flag-af',
                name: 'Afghanistan',
                region: 'Asia',
                subregion: 'Southern Asia',
            });
        }
    }, [isFirst, country?.name]);

    return (
        <Wrapper>
            <GetLocationContainer>
                <RoundGrayContainer>
                    <Ionicons name={'md-location'} size={40} />
                </RoundGrayContainer>
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
                <MainButton disabled={loading} loading={loading} onPress={onLocationAddHandler}>
                    Add Your Location
                </MainButton>
            </GetLocationContainer>
        </Wrapper>
    );
};
