import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

interface MessageProps {
    isUser: boolean;
}

export const MessageContainer = styled(View)<MessageProps>`
    align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
    background-color: ${({ isUser }) => (isUser ? 'green' : 'lightgrey')};
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 8px;
`;

export const InputContainer = styled(View)`
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
`;

export const Input = styled(TextInput)`
    flex: 1;
    background-color: ${({ theme: { elements } }) => {
        return elements.BACKGROUND_GREY;
    }};
    border-radius: 8px;
    padding: 8px;
`;

export const SendButton = styled(TouchableOpacity)`
    background-color: ${({ theme: { elements } }) => {
        return elements.LOADER_SPINNER_ORANGE;
    }};
    padding: 8px 16px;
    border-radius: 8px;
    margin-left: 8px;
`;

export const SendButtonText = styled(Text)`
    color: ${({ theme: { elements } }) => {
        return elements.WHITE_PRIMARY;
    }};
`;
