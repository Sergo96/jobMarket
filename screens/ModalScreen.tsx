import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Wrapper } from '../components';

export default function ModalScreen() {
    return (
        <Wrapper>
            <EditScreenInfo path="/screens/ModalScreen.tsx" />
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </Wrapper>
    );
}
