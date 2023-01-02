import { FC } from 'react';
import { TextInputProps } from 'react-native';
import { StyledMainInput } from './styles';

interface IProps extends TextInputProps {
    isError?: boolean;
}

export const MainInput: FC<IProps> = props => {
    const { isError } = props;
    return <StyledMainInput isError={isError} {...props} />;
};
