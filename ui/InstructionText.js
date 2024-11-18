import { Text, StyleSheet } from "react-native"
import Colors from "../constants/colors"

export default function InstructionText({children, style}){
    return (
        <Text style={[styles.gameSetupHeaderText, style]}>{children}</Text> //styles on the right have priority over styles on the left. Imitating CSS
    )
}

const styles = StyleSheet.create({
    gameSetupHeaderText: {
        color: Colors.secondary500,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-sans'
    },
})