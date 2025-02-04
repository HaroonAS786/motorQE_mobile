import { StyleSheet } from 'react-native'
import { themeColors } from '../../config/colors'

export const getStyles = () => StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        backgroundColor:themeColors.primary
    },

})