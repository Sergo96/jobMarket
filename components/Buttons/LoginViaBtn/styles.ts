import styled from 'styled-components';
import { View, Text } from 'react-native';

export const LoginViaStyled = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid ${({ theme: { elements } }) => elements.BUTTON_PRIMARY};
    border-radius: 42px;
    white-space: nowrap;
    height: 50px;
    padding: 0 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    background-color: ${({ theme: { elements } }) => {
        return elements.WHITE_PRIMARY;
    }};
    margin-bottom: 12px;
`;

export const LoginViaText = styled(View)`
    display: flex;
    align-items: center;
    width: 95%;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;
