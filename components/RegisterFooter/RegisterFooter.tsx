import { FC } from 'react';
import { FooterBoldText, FooterRegisterStyled, FooterStyled } from './styles';
import { Text } from 'react-native';
import { tNoop } from '../../interfaces';

interface IProps {
    onRegisterPress: tNoop;
}

export const RegisterFooter: FC<IProps> = ({ onRegisterPress }) => {
    return (
        <FooterStyled>
            <FooterRegisterStyled>
                <Text>
                    Don’t have an account?{' '}
                    <FooterBoldText onPress={onRegisterPress}>Register</FooterBoldText>{' '}
                </Text>
            </FooterRegisterStyled>
        </FooterStyled>
    );
};
