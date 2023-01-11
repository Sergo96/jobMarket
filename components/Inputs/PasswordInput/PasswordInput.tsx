import { FC, useState } from 'react';
import { TextInputProps, View } from 'react-native';
import { InnerInput, StyledMainPasswordInput } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { tNoop } from '../../../interfaces';

interface IProps extends TextInputProps {
    isError?: boolean;
    show: boolean;
    onTextDelete: tNoop;
}

export const PasswordInput: FC<IProps> = ({ show, onTextDelete, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    const iconName = showPassword ? 'eye-outline' : 'eye-off-sharp';
    const { isError } = props;

    return (
        <StyledMainPasswordInput isError={isError}>
            <InnerInput {...props} secureTextEntry={!showPassword} />
            <Ionicons name={'close-sharp'} size={24} onPress={() => onTextDelete()} />
            <Ionicons
                name={iconName}
                size={24}
                onPress={() => setShowPassword(prevState => !prevState)}
            />
        </StyledMainPasswordInput>
    );
};
