import { FC, ReactNode } from 'react';
import { StyledWrapper } from './styles';

interface IProps {
    children: ReactNode;
}

export const Wrapper: FC<IProps> = ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>;
};
