const mainPallet = {
    primary: '#0C53AB',
    secondary:'#FB5722',
    error: '#E31C1C',
    success: '#1EB35A',
    warning: '#FFBF00',
    white: '#ffffff',
    black: '#000000',
    label: '#5E5E5E',
    green: '#06B618'
}


const colors = {

    primary50: '#C5C0FF',
    primary100: '#d1d6ff',
    primary120: '#F3EEFF',
    primary200: '#bbc2ff',
    primary300: '#9ca6ff',
    primary400: '#8995ff',
    primary500: mainPallet.primary,
    primary600: '#616fe8',
    primary700: '#4c57b5',
    primary800: '#3b438c',
    primary900: '#2d336b',

    error50: '#fce8e8',
    error100: '#f6b9b9',
    error200: '#f29797',
    error300: '#ec6767',
    error400: '#e94949',
    error500: mainPallet.error,
    error600: '#cf1919',
    error700: '#a11414',
    error800: '#7d0f0f',
    error900: '#5f0c0c',

    success50: '#e9f7ef',
    success100: '#b9e7cc',
    success200: '#98dcb3',
    success300: '#68cc90',
    success400: '#4bc27b',
    success500: mainPallet.success,
    success600: '#1ba352',
    success700: '#157f40',
    success800: '#116232',
    success900: '#0d4b26',

    warning: mainPallet.warning,
    warning50: '#F5F5DC',

    info: "#1AA7EC",
    info50: "#daf0ff",

    white50: '#ffffff',
    white100: '#ffffff',
    white200: '#ffffff',
    white300: '#ffffff',
    white400: '#ffffff',
    white500: '#ffffff',
    white600: '#e8e8e8',
    white700: '#b5b5b5',
    white800: '#8c8c8c',
    white900: '#6b6b6b',

    black50: '#e8e8e8',
    black80: '#272727',
    black100: '#b8b8b8',
    black200: '#969696',
    black300: '#666666',
    black400: '#484848',
    black500: '#1a1a1a',
    black600: '#181818',
    black700: '#121212',
    black800: '#0e0e0e',
    black900: '#0b0b0b',
}

const themeColors = {
    ...colors,
    primary: mainPallet.primary,
    secondary: mainPallet.secondary,
    collapsibleBackground: colors.primary100,
    white: mainPallet.white,
    black: mainPallet.black,
    orange: mainPallet.orange,
    green: mainPallet.green,
    background: mainPallet.black,
    dangerFlashBackground: colors.error400,
    lightBackground: colors.white500 + "33",
    tab: mainPallet.primary,
    font: mainPallet.white,
    fontLight: colors.black100,
    buttonPrimary: colors.primary500,
    buttonDisabled: colors.white600,
    buttonDisabledText: colors.black200,
    error: mainPallet.error,
    success: mainPallet.success,
    modalBackground: colors.black400,
    label: mainPallet.label,
    applyOpacityOn: (color, opacity) => `${color}${opacity}`
}

export {
    themeColors
}