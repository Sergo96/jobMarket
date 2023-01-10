import React, { FC, ReactNode } from 'react';
import {
    TouchableOpacity,
    Text,
    Touchable,
    TouchableOpacityProps,
    ActivityIndicator,
} from 'react-native';
import styled from 'styled-components';

interface IProps extends TouchableOpacityProps {
    children: string | ReactNode;
    background?: string;
    loading?: boolean;
}

const StyledButton = styled(TouchableOpacity)<{ background?: string; disabled?: boolean }>`
    background-color: ${({ background, disabled, theme: { elements } }) => {
        if (disabled) return elements.BUTTON_DISABLE;
        return background || elements.BUTTON_PRIMARY;
    }};
    color: white;
    font-size: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    height: 48px;
`;

const StyledText = styled(Text)<{ disabled?: boolean }>`
    font-family: InterMedium;
    line-height: 18px;
    font-size: 16px;
    color: ${({ disabled, theme: { elements } }) => {
        if (disabled) return elements.TEXT_PRIMARY;
        return elements.WHITE_PRIMARY;
    }};
`;

export const MainButton: FC<IProps> = ({ children, background, disabled, loading, ...props }) => (
    <StyledButton onPress={() => {}} background={background} disabled={disabled} {...props}>
        {loading ? <ActivityIndicator /> : <StyledText disabled={disabled}>{children}</StyledText>}
    </StyledButton>
);
