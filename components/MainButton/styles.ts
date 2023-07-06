import styled from 'styled-components';
import { TouchableOpacity, Text } from 'react-native';

export const StyledButton = styled(TouchableOpacity)<{ background?: string; disabled?: boolean }>`
    background-color: ${({ background, disabled, theme: { elements } }) => {
        if (disabled) return elements.BUTTON_DISABLE;
        return background || elements.HEADER_BACKGROUND;
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

export const StyledText = styled(Text)<{ disabled?: boolean }>`
    font-family: InterMedium;
    line-height: 18px;
    font-size: 17px;
    color: ${({ disabled, theme: { elements } }) => {
        if (disabled) return elements.TEXT_PRIMARY;
        return elements.WHITE_PRIMARY;
    }};
`;
