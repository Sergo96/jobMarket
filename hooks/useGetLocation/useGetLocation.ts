import { SetStateAction, useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';

export const useGetLocation = () => {
    const [location, setLocation] = useState<LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<SetStateAction<string> | null>(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    return {
        location,
        errorMsg,
    };
};
