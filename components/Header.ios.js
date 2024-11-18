// Ios specific

import { View, Text, StyleSheet, Platform } from "react-native"

export default function Header({text}){
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderColor: 'white',
        // borderWidth: Platform.OS === 'android' ? 2 : 0, // to determine if we are on android or ios or:
        // borderWidth: Platform.select({ios: 0, android: 2})
        borderWidth: 0, // because this is a platform specific component 
    },

    headerText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-sans-bold'
    }
})