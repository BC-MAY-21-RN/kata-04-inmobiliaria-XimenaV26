import { StyleSheet } from 'react-native'


export const style = StyleSheet.create({
    containerBox: {
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 28,
        padding: 15,
        width: '100%',
        backgroundColor: '#E2F9F5'

    },
    image: {
        width: '29%',
        height: 100,
        backgroundColor: 'red',
        borderRadius: 15
    },
    titleView:{
        width: '69%',
        marginLeft: 15,
        marginBottom: 80,
    },
    title:{
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
    },
    direction:{
        flexDirection: 'row',
    },
    iconDirection:{
        marginRight: 7
    },
    directionText:{
        fontSize: 15,
        fontWeight: '500'
    },
    description:{
        marginTop: 3,
        flexDirection: 'row',
        marginRight: 15
    }



})