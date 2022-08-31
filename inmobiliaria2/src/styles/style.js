import { StyleSheet } from 'react-native'


export const style = StyleSheet.create({
    containerBox: {
        alignItems: 'center',
        flexDirection: 'row',
        //borderColor: 'black',
        //borderWidth: 1,
        borderRadius: 10,
        marginBottom: 25,
        padding: 10,
        width: '100%',
        backgroundColor: '#F3FEFC'

    },
    image: {
        width: '29%',
        height: 100,
        backgroundColor: 'red',
        borderRadius: 15,

    },
    titleView:{
        width: '69%',
        marginLeft: 15,
    },
    title:{
        fontSize: 23,
        fontWeight: '600',
        color: 'black',
    },
    direction:{
        flexDirection: 'row',
        marginTop: 5
    },
    iconDirection:{
        marginRight: 7
    },
    directionText:{
        fontSize: 15,
        fontWeight: '500'
    },
    description:{
        marginTop: 4,
        flexDirection: 'row',
        marginRight: 15
    },
    priceTitle:{
        fontSize: 21,
        fontWeight: '700',
        color: 'black'
    },
    heartIcon:{
        marginLeft: 100,
    },
    califation:{
        borderColor: 'black',
        borderWidth: 1,
    }




})