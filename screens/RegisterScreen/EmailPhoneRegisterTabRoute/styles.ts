import styled from 'styled-components';
import { StyleProp, Text, TextStyle, ViewStyle } from 'react-native';

export const TermsAgreeText = styled(Text)`
    font-family: 'InterRegular';
    color: #737373;
    font-size: 11px;
`;

export const containerStyle: StyleProp<ViewStyle> = {
    borderRadius: 8,
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#DBDBDB',
    shadowColor: 'transparent',
};
export const textContainerStyle: StyleProp<ViewStyle> = {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
};
export const textInputStyle: StyleProp<TextStyle> = { height: '100%' };
export const countryPickerButtonStyle: StyleProp<ViewStyle> = {
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
};
