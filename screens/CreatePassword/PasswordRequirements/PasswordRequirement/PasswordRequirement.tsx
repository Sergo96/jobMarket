import { FC } from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Typography } from '../../../../components';
import { PasswordRequirementStyled } from './styles';
import firebase from 'firebase/compat';

interface IProps {
    fulfilled: boolean;
    requirement: string;
}

export const PasswordRequirement: FC<IProps> = ({ fulfilled, requirement }) => {
    const fulfilledColor = fulfilled ? 'green' : 'gray';
    const fulfilledIcon = fulfilled ? 'check' : 'close';
    return (
        <PasswordRequirementStyled>
            <AntDesign color={fulfilledColor} name={fulfilledIcon} style={{ marginRight: 5 }} />
            <Typography color={fulfilledColor} textType={'p'}>
                {requirement}
            </Typography>
        </PasswordRequirementStyled>
    );
};
