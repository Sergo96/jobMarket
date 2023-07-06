import styled from 'styled-components';
import { Text } from 'react-native';
import { tColor, tSize, tTextType } from './types';

export const StyledLevelOneTypography = styled(Text)<{
    align?: string;
    size?: tSize;
}>`
    font-family: InterMedium;
    font-size: ${({ size }) => {
        return size === 'large' ? '48px' : '24px';
    }};
    font-weight: 600;
    color: ${({ theme: { elements } }) => {
        return elements.TEXT_PRIMARY;
    }};
    text-align: ${({ align }) => {
        return align ? align : 'left';
    }};
`;

export const TitleLevelTwo = styled(Text)<{
    size?: tSize;
    weight?: number;
    align?: string;
    color?: string;
}>`
    font-weight: ${({ weight }) => {
        return weight ? weight : 500;
    }};
    font-size: ${({ size }) => {
        return size === 'large' ? '40px' : '18px';
    }};
    color: ${({ color, theme: { elements } }) => {
        return color ?? elements.WHITE_PRIMARY;
    }};
    text-align: ${({ align }) => {
        return align ? align : 'left';
    }};
`;

export const TitleLevelThree = styled(Text)<{ color?: tColor }>`
    font-weight: 500;
    font-size: 18px;
    color: ${({ color, theme: { elements } }) => {
        return color === 'primary' ? elements.TEXT_PRIMARY : elements.TEXT_DARK_GRAY;
    }};
`;

export const TitleLevelFour = styled(Text)<{
    color?: tColor;
    weight?: number;
    type?: tTextType;
}>`
    display: flex;
    align-items: center;
    font-weight: ${({ weight }) => {
        return weight ? weight : 600;
    }};
    font-size: 16px;
    line-height: 15px;
    color: ${({ color, theme: { elements } }) => {
        return color ? color : elements.TEXT_PRIMARY;
    }};
    span {
        display: inline-flex;
        align-items: center;
        margin-right: 4px;
    }
    ${({ type }) =>
        type === 'ellipsis' &&
        `width: 100%; overflow: hidden; display: inline-block; text-overflow: ellipsis; white-space: nowrap;`};
`;

export const Paragraph = styled(Text)<{
    align?: string;
    size?: tSize;
    color?: string;
}>`
    font-family: InterMedium;
    font-weight: 400;
    font-size: ${({ size }) => {
        return size === 'small' ? '13px' : '14px';
    }};
    color: ${({ color, theme: { elements } }) => {
        return color ? color : elements.TEXT_GRAY;
    }};
    text-align: ${({ align }) => {
        return align ? align : 'left';
    }};
`;

export const Caption = styled(Text)<{ align?: string; color?: string }>`
    font-family: InterMedium;
    font-weight: 400;
    font-size: 11px;
    line-height: 18px;
    text-align: ${({ align }) => {
        return align ? align : 'left';
    }};
    color: ${({ color, theme: { elements } }) => {
        return color === 'grey' ? elements.TEXT_DARK_GRAY : elements.TEXT_PRIMARY;
    }};
`;
