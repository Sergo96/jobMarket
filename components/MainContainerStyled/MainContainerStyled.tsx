import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const StyledMainContainer = styled(View)`
    padding: 30px;
    color: ${({ theme: { elements } }) => elements.TEXT_GRAY};
`;

interface iProps {
    children: any;
}

export const MainContainerStyled: FC<iProps> = ({ children }) => {
    return <StyledMainContainer>{children}</StyledMainContainer>;
};
