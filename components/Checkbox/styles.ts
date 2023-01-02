import styled from 'styled-components';
import { View } from 'react-native';

export const CheckboxContainer = styled(View)`
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: 95%;
    margin-top: 5px;
    margin-horizontal: 5px;
`;

export const CheckboxTitleContainer = styled(View)`
    font-size: 16px;
    color: ${({ theme: { elements } }) => {
        return elements.WHITE_PRIMARY;
    }};
    margin-left: 5px;
    font-weight: 600;
`;
