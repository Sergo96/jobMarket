import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const StyledMainContainer = styled(View)`
    flex: 1;
    padding: 30px;
    background-color: ${({ theme: { elements } }) => elements.PRIMARY_BACKGROUND};
    height: 100%;
`;

interface iProps {
    children: any;
}

export const MainContainerStyled: FC<iProps> = ({ children }) => {
    return <StyledMainContainer>{children}</StyledMainContainer>;
};
