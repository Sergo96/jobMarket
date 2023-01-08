import { tColor, tSize, tTextType, tTypographyType } from './types';

export const propsHandler = (
    componentType: tTypographyType,
    align?: string,
    size?: tSize,
    weight?: number,
    color?: tColor,
    type?: tTextType
) => {
    switch (componentType) {
        case 'h1':
            return {
                align,
                size,
            };
        case 'h2':
            return {
                size,
                weight,
                align,
                color,
            };
        case 'h3':
            return {
                color,
            };
        case 'h4':
            return {
                color,
                weight,
                type,
            };
        case 'caption':
            return {
                align,
                size,
                color,
            };
        case 'p':
            return {
                align,
                color,
            };
    }
};
