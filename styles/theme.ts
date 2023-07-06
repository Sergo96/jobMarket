export const colors = Object.freeze({
    // Daybreak Blue
    blue1: '#E6F7FF',
    blue2: '#00B3FF',
    blue3: '#2E86F9',
    blue4: '#4A6DF5',
    blueDisc: '#7289da',

    blackLight: '#333333',

    // Neutral Color Palette
    gray1: '#FFFFFF',
    gray2: '#FAFAFA',
    gray3: '#F5F5F5',
    gray35: '#F3F3F3',
    gray4: '#E8E8E8',
    gray5: '#D9D9D9',
    gray6: '#F2F2F2',
    gray88: '#E6E6E6',
    gray95: '#01040D',
    gray10: '#000000',
    gray11: '#999999',
    gray12: '#737373',
    gray13: '#F8F8F8',
    gray14: '#DBDBDB',
    gray15: '#B4BAC1',
    gray16: '#B6B6B6',
    gray17: '#F6F7F8',
    gray18: '#4c4c4c',

    // dust red
    red1: '#fff1f0',
    red2: '#ffccc7',
    red3: '#ffa39e',
    red4: '#ff7875',
    red5: '#ff4d4f',
    red6: '#f5222d',
    red7: '#cf1322',
    red8: '#a8071a',
    red9: '#820014',
    red10: '#5c0011',
    red11: '#f81a25',
    red12: '#FF5A43',
    red13: '#ce4346',
    red14: '#D7503F',

    // volcano
    volcano1: '#fff2e8',
    volcano2: '#ffd8bf',
    volcano3: '#ffbb96',
    volcano4: '#ff9c6e',
    volcano5: '#ff7a45',
    volcano6: '#fa541c',
    volcano7: '#d4380d',
    volcano8: '#ad2102',
    volcano9: '#871400',
    volcano10: '#610b00',

    // sunset orange
    orange1: '#fff7e6',
    orange2: '#ffe7ba',
    orange3: '#ffd591',
    orange4: '#ffc069',
    orange5: '#ffa940',
    orange6: '#fa8c16',
    orange7: '#d46b08',
    orange8: '#ad4e00',
    orange9: '#873800',
    orange10: '#612500',
    orange11: '#E37E12',
    orange12: '#FEA545',

    // polar green
    green1: '#f6ffed',
    green2: '#d9f7be',
    green3: '#b7eb8f',
    green4: '#95de64',
    green5: '#73d13d',
    green6: '#52c41a',
    green7: '#389e0d',
    green8: '#237804',
    green9: '#135200',
    green10: '#092b00',
    green11: '#52C41A',
    green12: '#3FA368',

    blackBack: '#161a23',
    darBtnBack: '#404249',
    inputBck: '#383a41',
    inputPlaceholder: '#60626b',
});

export const elements = Object.freeze({
    TEXT_PRIMARY: colors.gray95,
    TEXT_ADDITION: colors.blackLight,
    MAIN_BLUE: colors.blue1,

    TEXT_DARK_NIGHT: colors.gray95,
    TEXT_DARK_GRAY: colors.gray12,
    TEXT_GRAY: colors.gray15,

    WHITE_PRIMARY: colors.gray1,
    BG: colors.gray3,

    GREY_INPUT: colors.gray3,
    BORDER_GREY: colors.gray4,
    BORDER_INACTIVE_GRAY: colors.gray6,
    BACKGROUND_GREY: colors.gray17,
    PRIMARY_BACKGROUND: colors.blackBack,

    BUTTON_PRIMARY: colors.gray10,
    BUTTON_PRIMARY_BACKGROUND: colors.darBtnBack,
    BUTTON_DISABLE: colors.gray88,
    BUTTON_PRIMARY_HOVER: colors.orange7,
    BUTTON_ADD_HOVER: colors.orange12,
    BUTTON_ADD_PRESSED: colors.orange11,
    BUTTON_BLUE_OUTLINE: colors.blue1,

    SUCCESS: colors.green6,
    PASSED: colors.green12,
    ERROR: colors.red12,
    SIMPLE_BLACK: colors.gray10,
    INFO: colors.blue4,

    INPUTS_DEFAULT_COLOR: colors.inputBck,
    INPUT_PLACEHOLDER_COLOR: colors.inputPlaceholder,
    INPUTS_DEFAULT_BORDER: colors.gray14,
    INPUT_FOCUS_BORDER: colors.gray16,

    ICON_LIGHT_BLUE: colors.blue2,
    ICON_BLUE: colors.blue3,
    ICON_RED: colors.red14,
    STROKE_BACKGROUND_COLOR: colors.gray17,

    LOADER_SPINNER_GRAY: colors.gray18,
    LOADER_SPINNER_ORANGE: colors.orange12,
    LOADER_SPINNER_RED: colors.red13,
    LOADER_SPINNER_GREEN: colors.green12,

    HEADER_BACKGROUND: colors.blueDisc,
});

type StyleTheme = {
    colors: { [key in keyof typeof colors]: string };
    elements: { [key in keyof typeof elements]: string };
};

export const theme: StyleTheme = {
    colors,
    elements,
};
