import { Pressable } from 'react-native';
import { FC, ReactNode } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CheckboxContainer, CheckboxTitleContainer } from './styles';

interface IProps {
    isChecked: boolean;
    onPress: () => void;
    title: ReactNode;
}

export const CheckBox: FC<IProps> = ({ isChecked, onPress, title }) => {
    const iconName = isChecked ? 'checkbox-marked' : 'checkbox-blank-outline';

    return (
        <CheckboxContainer>
            <Pressable onPress={onPress}>
                <MaterialCommunityIcons name={iconName} size={24} color="#000" />
            </Pressable>
            <CheckboxTitleContainer>{title}</CheckboxTitleContainer>
        </CheckboxContainer>
    );
};
