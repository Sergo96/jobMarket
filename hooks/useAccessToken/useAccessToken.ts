import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { accessTokenManager } from '../../helpers';

export const useAccessToken = (): string => {
    const [accessToken, setAccessToken] = useState<string>('');

    useEffect(() => {
        const fetchAccessToken = async (): Promise<void> => {
            try {
                const storedAccessToken = await accessTokenManager.getAccessToken();

                if (storedAccessToken !== null) {
                    setAccessToken(storedAccessToken);
                } else {
                    setAccessToken('');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchAccessToken();
    }, [accessToken]);

    return accessToken;
};
