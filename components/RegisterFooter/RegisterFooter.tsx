import { FC } from 'react';
import { FooterRegisterStyled, FooterStyled } from './styles';
import { Text } from 'react-native';
import { tNoop } from '../../interfaces';
import { Typography } from '../Typography';
import { elements } from '../../styles';

interface IProps {
    onRegisterPress: tNoop;
}

export const RegisterFooter: FC<IProps> = ({ onRegisterPress }) => {
    return (
        <FooterStyled>
            <FooterRegisterStyled>
                <Typography
                    textType="h4"
                    children={'Don’t have an account? '}
                    color={elements.WHITE_PRIMARY}
                />
                <Typography
                    onPress={onRegisterPress}
                    color={elements.SUCCESS}
                    textType="h4"
                    children={'Register'}
                    size={'large'}
                />
            </FooterRegisterStyled>
        </FooterStyled>
    );
};
