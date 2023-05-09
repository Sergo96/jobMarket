import { createContext, useState, useEffect, ReactNode, FC } from 'react';
import { accessTokenManager } from '../../helpers';

type AuthContextType = {
    userToken: string | null;
    signIn: (token: string) => void;
    signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({
    userToken: '',
    signIn: () => {},
    signOut: () => {},
});

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [userToken, setUserToken] = useState<string>('');

    useEffect(() => {
        accessTokenManager.getAccessToken().then(token => setUserToken(token as string));
    }, [userToken]);

    const signIn = (token: string) => {
        // Save the user's token to Async Storage
        accessTokenManager.setAccessToken(token);
        setUserToken(token);
    };

    const signOut = () => {
        accessTokenManager.clearAccessToken();
        setUserToken('');
    };

    return (
        <AuthContext.Provider value={{ userToken, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
