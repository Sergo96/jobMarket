import { FC } from 'react';
import { View } from 'react-native';
import { Typography, Divider } from '../../../components';
import { PasswordRequirement } from './PasswordRequirement';

interface IProps {
    eightChars: boolean;
    oneLowerCase: boolean;
    oneUpperCase: boolean;
    isMatched: boolean;
}

export const PasswordRequirements: FC<IProps> = ({
    eightChars,
    isMatched,
    oneLowerCase,
    oneUpperCase,
}) => {
    return (
        <>
            <Typography textType={'h4'}>Your password must have:</Typography>
            <Divider size={10} />
            <PasswordRequirement fulfilled={eightChars} requirement={'8 characters minimum'} />
            <Divider size={5} />
            <PasswordRequirement fulfilled={oneLowerCase} requirement={'1 lowercase letter'} />
            <Divider size={5} />
            <PasswordRequirement fulfilled={oneUpperCase} requirement={'1 uppercase letter'} />
            <Divider size={5} />
            <PasswordRequirement fulfilled={isMatched} requirement={'Should match'} />
        </>
    );
};
