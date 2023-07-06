import { Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const ChatItem = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    padding: 16px;
    background-color: ${({ theme: { elements } }) => {
        return elements.BUTTON_PRIMARY_BACKGROUND;
    }};
    margin-bottom: 8px;
    border-radius: 15px;
`;

export const UserImage = styled(Image)`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 12px;
`;
