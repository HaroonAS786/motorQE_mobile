import { StyleSheet } from 'react-native'
import { themeColors } from '../../config/colors'
import { SCREEN_WIDTH } from '../../config/typography'


export const getStyles = () => StyleSheet.create({

    container: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 16
    },
    footerView: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    headerView: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    btnContainer: {
        justifyContent: 'flex-end',
        backgroundColor: themeColors.white,
        width: SCREEN_WIDTH,
        paddingHorizontal: 16,
        paddingVertical: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },

})