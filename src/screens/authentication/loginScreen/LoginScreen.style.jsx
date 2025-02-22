import { StyleSheet } from 'react-native'
import { themeColors } from '../../../config/colors'
import { SCREEN_WIDTH } from '../../../config/typography'

export const getStyles = () => StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    fieldContainer: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 16
    },
    footerView: {
        flexDirection: 'row',
        justifyContent:'center'
    },
    headerView: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    footerView1: {
       
    },
    forgotPassLabel: {
        // alignSelf: 'flex-end'
    },
    needHelpLabelCon: {
        // flex:1,
        // position:'absolute',
        justifyContent: 'flex-end',
        backgroundColor: '#fff'
    },
    needHelpLabel: {
        textAlign: 'center',
        paddingBottom: 25
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

    googleSignIn:{
        backgroundColor:themeColors.white,
        borderWidth:1,
        borderColor:'lightgrey',
        borderRadius:8,
        padding:10
    }

})