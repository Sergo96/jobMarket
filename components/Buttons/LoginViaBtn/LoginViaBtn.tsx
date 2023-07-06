import { FC, ReactNode } from 'react';
import { ButtonProps, Text, View } from 'react-native';
import { LoginViaStyled, LoginViaText, LoginButtonText } from './styles';
import { Typography } from '../../Typography';

interface IProps extends ButtonProps {
    children: string;
    Icon: ReactNode;
}

export const LoginViaBtn: FC<IProps> = ({ children, Icon, ...props }) => {
    return (
        <LoginViaStyled {...props}>
            {Icon}
            <LoginViaText>
                <Typography textType={'p'} children={children} />
            </LoginViaText>
        </LoginViaStyled>
    );
};
