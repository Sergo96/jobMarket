import styled from 'styled-components';
import { View, Image } from 'react-native';

export const ProfileInnerContainer = styled(View)`
    flex: 1;
    align-items: center;
    background-color: ${({ theme: { elements } }) => elements.WHITE_PRIMARY};
`;

export const ProfileImage = styled(Image)`
    width: 150px;
    height: 150px;
    border-radius: 75px;
    margin-bottom: 20px;
`;

export const DetailsContainer = styled(View)`
    align-items: center;
`;
