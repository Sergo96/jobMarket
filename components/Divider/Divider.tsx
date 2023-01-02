import styled from 'styled-components';
import { View } from 'react-native';

export const Divider = styled(View)<{ size?: number }>`
    height: ${({ size = 50 }) => {
        return `${size}px`;
    }};
    min-height: ${({ size = 50 }) => {
        return `${size}px`;
    }};
`;
