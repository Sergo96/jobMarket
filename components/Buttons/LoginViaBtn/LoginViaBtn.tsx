import { FC, ReactNode } from 'react';
import { ButtonProps, Text, View } from 'react-native';
import { LoginViaStyled, LoginViaText } from './styles';

interface IProps extends ButtonProps {
    children: string;
    Icon: ReactNode;
}

export const LoginViaBtn: FC<IProps> = ({ children, Icon, ...props }) => {
    return (
        <LoginViaStyled {...props}>
            {Icon}
            <LoginViaText>
                <Text>{children}</Text>
            </LoginViaText>
        </LoginViaStyled>
    );
};
