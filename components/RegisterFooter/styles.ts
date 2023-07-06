import styled from 'styled-components';
import { Text, View } from 'react-native';

export const FooterStyled = styled(View)`
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100px;
    justify-content: center;
    background-color: ${({ theme: { elements } }) => elements.HEADER_BACKGROUND};
`;

export const FooterRegisterStyled = styled(View)`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 40px;
    background-color: ${({ theme: { elements } }) => elements.HEADER_BACKGROUND};
`;

export const FooterBoldText = styled(Text)`
    color: ${({ theme: { elements } }) => elements.WHITE_PRIMARY};
`;
