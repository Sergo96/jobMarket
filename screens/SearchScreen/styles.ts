import { View, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components';

export const TabContainer = styled(View)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const TabButton = styled(TouchableOpacity)<{ isActive: boolean }>`
    flex: 1;
    padding: 8px;
    border-width: 2px;
    border-color: ${({ isActive, theme: { elements } }) =>
        isActive ? elements.HEADER_BACKGROUND : elements.WHITE_PRIMARY};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin: 5px;
`;

export const ListContainer = styled(View)`
    flex: 1;
`;

export const MapContainer = styled(View)`
    flex: 1;
`;

export const UserImage = styled(Image)`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 12px;
`;
