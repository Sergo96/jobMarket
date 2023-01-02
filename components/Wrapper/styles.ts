import styled from 'styled-components';
import { View } from 'react-native';

export const StyledWrapper = styled(View)`
    padding: 30px;
    background-color: ${({ theme: { elements } }) => {
        return elements.WHITE_PRIMARY;
    }};
    height: 100%;
`;
