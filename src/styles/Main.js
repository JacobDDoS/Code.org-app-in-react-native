import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    homeLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        marginBottom: 50
    },
    buttonGroup: {
        justifyContent: 'center',
        alignItems: 'center', 
    },
    button: {
        margin: 13,
        width: 140,
        height: 60,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: '900',
        color: "white", 
        textAlign: 'center'
    },
    image: {
        width: 220,
        height: 240
    }
})