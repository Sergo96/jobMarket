import styled from 'styled-components';
import { TextInput } from 'react-native';

export const StyledMainInput = styled(TextInput)<{ isError?: boolean }>`
    font-family: InterRegular;
    font-weight: 400;
    border-radius: 8px;
    height: 48px;
    width: 100%;
    font-size: 17px;
    color: ${({ theme: { elements } }) => elements.WHITE_PRIMARY};
    background: ${({ theme: { elements } }) => elements.INPUTS_DEFAULT_COLOR};
    border: 1px solid
        ${({ theme: { elements }, isError }) => {
            if (isError) return elements.ERROR;
            return elements.INPUTS_DEFAULT_BORDER;
        }} !important;
    padding: 0 12px;
`;
