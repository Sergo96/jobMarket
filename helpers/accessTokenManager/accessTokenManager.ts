import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AccessTokenManager {
    setAccessToken: (token: string) => Promise<void>;
    getAccessToken: () => Promise<string | null>;
    clearAccessToken: () => Promise<void>;
}

export const accessTokenManager: AccessTokenManager = {
    setAccessToken: async (token: string): Promise<void> => {
        try {
            await AsyncStorage.setItem('accessToken', token);
        } catch (error) {
            console.error(error);
        }
    },
    getAccessToken: async (): Promise<string | null> => {
        try {
            const token = await AsyncStorage.getItem('accessToken');
            return token;
        } catch (error) {
            console.error(error);
            return null;
        }
    },
    clearAccessToken: async (): Promise<void> => {
        try {
            await AsyncStorage.removeItem('accessToken');
        } catch (error) {
            console.error(error);
        }
    },
};
