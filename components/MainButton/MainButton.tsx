import React, { FC, ReactNode } from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { StyledButton, StyledText } from './styles';
import { elements } from '../../styles';

interface IProps extends TouchableOpacityProps {
    children: string | ReactNode;
    background?: string;
    loading?: boolean;
}

export const MainButton: FC<IProps> = ({ children, background, disabled, loading, ...props }) => {
    return (
        <StyledButton background={background} disabled={disabled} {...props}>
            {loading ? (
                <ActivityIndicator />
            ) : (
                <StyledText disabled={disabled}>{children}</StyledText>
            )}
        </StyledButton>
    );
};
