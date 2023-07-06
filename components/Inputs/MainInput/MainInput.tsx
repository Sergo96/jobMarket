import { FC } from 'react';
import { TextInputProps } from 'react-native';
import { StyledMainInput } from './styles';
import { elements } from '../../../styles';

interface IProps extends TextInputProps {
    isError?: boolean;
}

export const MainInput: FC<IProps> = props => {
    const { isError } = props;

    return (
        <StyledMainInput
            isError={isError}
            placeholderTextColor={elements.INPUT_PLACEHOLDER_COLOR}
            {...props}
        />
    );
};
