import { Dimensions, Platform, PixelRatio } from 'react-native';

export const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 420;

export function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}
const typography = {
    h1: normalize(32),
    h2: normalize(28),
    h3: normalize(26),
    h4: normalize(24),
    h5: normalize(22),
    h6: normalize(20),

    subtitle: normalize(18),

    body: normalize(16),
    body2: normalize(14),

    button: normalize(16),

    caption: normalize(12)
};

export { typography };