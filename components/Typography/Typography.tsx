import { FC, ReactNode, cloneElement, ReactElement, DetailedReactHTMLElement } from 'react';
import {
    StyledLevelOneTypography,
    TitleLevelTwo,
    TitleLevelThree,
    TitleLevelFour,
    Caption,
    Paragraph,
} from './styles';
import { tColor, tSize, tTextType, tTypographyType } from './types';
import { tNoop } from '../../interfaces';
import { TextProps } from 'react-native';

interface IProps extends TextProps {
    textType: tTypographyType;
    children: string | ReactNode;
    align?: string;
    size?: tSize;
    weight?: number;
    color?: tColor;
    type?: tTextType;
    onPress?: tNoop;
}

type tObjRendering = {
    [arg: string]: ReactElement<any, any>;
};

export const Typography: FC<IProps> = ({ textType, children, ...props }) => {
    const componentMap: tObjRendering = {
        h1: <StyledLevelOneTypography {...props}>{children}</StyledLevelOneTypography>,
        h2: <TitleLevelTwo {...props}>{children}</TitleLevelTwo>,
        h3: <TitleLevelThree {...props}>{children}</TitleLevelThree>,
        h4: <TitleLevelFour {...props}>{children}</TitleLevelFour>,
        caption: <Caption {...props}>{children}</Caption>,
        p: <Paragraph {...props}>{children}</Paragraph>,
    };

    const Component: JSX.Element = componentMap[textType];
    return Component;
};
