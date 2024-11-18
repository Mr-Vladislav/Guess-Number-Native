import { View, Text, StyleSheet, Pressable } from "react-native"
import Colors from "../../constants/colors"

export default function CustomButton({children, ...props}){
    return (
        <View style={styles.buttonOuterContainer}>
        <Pressable style={(pressed)=> pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} {...props} android_ripple={{color: Colors.primary600}}>
            
                <Text style={styles.buttonText}>{children}</Text>
            
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 30,
        margin: 5,
        overflow: 'hidden',
    },

    buttonInnerContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'rgb(199, 33, 124)',
        elevation: 2
    },

    buttonText: {
        color: 'white',
        textAlign: 'center'
    },

    pressed: {
       opacity: 0.75, 
    }
})