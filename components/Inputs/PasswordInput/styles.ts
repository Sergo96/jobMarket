import styled from 'styled-components';
import { TextInput, View } from 'react-native';

export const StyledMainPasswordInput = styled(View)<{ isError?: boolean }>`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    height: 48px;
    width: 100%;
    color: ${({ theme: { elements } }) => elements.TEXT_PRIMARY};
    background: ${({ theme: { elements } }) => elements.INPUTS_DEFAULT_COLOR};
    border: 1px solid
        ${({ theme: { elements }, isError }) => {
            if (isError) return elements.ERROR;
            return elements.INPUTS_DEFAULT_BORDER;
        }} !important;
    padding: 0 12px;
`;

export const InnerInput = styled(TextInput)`
    font-family: InterRegular;
    font-weight: 400;
    background-color: transparent;
    height: 100%;
    width: 80%;
    font-size: 14px;
`;
