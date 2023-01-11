import styled from 'styled-components';
import { Text, View } from 'react-native';

export const FooterStyled = styled(View)`
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
    background-color: ${({ theme: { elements } }) => elements.WHITE_PRIMARY};
`;

export const FooterRegisterStyled = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 40px;
    background-color: ${({ theme: { elements } }) => elements.STROKE_BACKGROUND_COLOR};
`;

export const FooterBoldText = styled(Text)`
    color: ${({ theme: { elements } }) => elements.ICON_BLUE};
`;
