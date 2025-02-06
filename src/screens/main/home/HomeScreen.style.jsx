import { StyleSheet } from 'react-native'
import { themeColors } from '../../../config/colors'
import { SCREEN_WIDTH } from '../../../config/typography'

export const getStyles = () => StyleSheet.create({

    container: {
        width:SCREEN_WIDTH,
        paddingHorizontal:16,
        justifyContent: 'flex-start'
    },
    btnContainer: {
        backgroundColor: themeColors.white,
        width: '50%',
        borderRadius: 100,
        alignSelf: 'center'
    },
    image: {
        width: '100%',
        // height: 250, // Adjust the height accordingly
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '50%', // Adjust opacity height
    },

})