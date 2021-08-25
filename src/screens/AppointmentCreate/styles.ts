import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    label:{
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32
    },
    select:{
        width: '100%',
        flexDirection: 'row',
        height: 68,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: theme.colors.secondary50,
        paddingRight: 24,
        overflow:   'hidden'
    },
    selectBody:{
        flex: 1,
        alignItems: 'center',
    },
    image:{
        width: 64,
        height: 68,
        borderRadius: 8,
        backgroundColor: theme.colors.secondary40,
        borderColor: theme.colors.secondary50,
        borderWidth: 1
    }, 
    field:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    column:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider:{
        marginRight: 4,
        fontFamily: theme.fonts.text500,
        fontSize: 15,
        color: theme.colors.highlight
    },
    caracteresLimit:{
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight
    },
    footer:{
        marginVertical: 20,
        // marginBottom: 56
    }
})
