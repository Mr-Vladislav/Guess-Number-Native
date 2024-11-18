import { View, StyleSheet, Dimensions } from "react-native"
import Colors from "../constants/colors"

export default function Card({children}){
    return (
        <View style={styles.gameSetup}>{children}</View>
    )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    gameSetup: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: Colors.primary800,
        width: '90%',
        marginHorizontal: '5%',
        marginTop: deviceWidth < 380 ? 18 : 30,
        borderRadius: 10,
        elevation: 4, // adds shadow box for Android
        shadowColor: 'black', // adds shadow box for ios
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },

})