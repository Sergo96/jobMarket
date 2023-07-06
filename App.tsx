import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainContainerStyled } from './components';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles';
import { Text, View } from 'react-native';
import { RegisterContext, tRegisterType, registerForm, AuthProvider } from './context';
import { useState } from 'react';
import { useFonts } from 'expo-font';

export default function App() {
    const [registerData, setRegisterData] = useState<tRegisterType>(registerForm);
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    const [loaded] = useFonts({
        InterLight: require('./assets/fonts/Inter-Light.ttf'),
        InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
        InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    if (!isLoadingComplete) {
        return <Text>Loading...</Text>;
    } else {
        return (
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    <RegisterContext.Provider value={{ registerData, setRegisterData }}>
                        <SafeAreaProvider>
                            <Navigation colorScheme={colorScheme} />
                            <StatusBar />
                        </SafeAreaProvider>
                    </RegisterContext.Provider>
                </AuthProvider>
            </ThemeProvider>
        );
    }
}
