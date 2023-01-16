import styled from 'styled-components';
import { View } from 'react-native';

export const RoundGrayContainer = styled(View)`
    border-radius: 800px;
    height: 110px;
    width: 110px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme: { elements } }) => {
        return elements.INPUTS_DEFAULT_BORDER;
    }};
`;
