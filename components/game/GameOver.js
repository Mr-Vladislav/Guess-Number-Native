import { View, Text, StyleSheet, Image, Dimensions, useWindowDimensions, ScrollView } from "react-native"
import Header from "../Header"
import CustomButton from "./CustomButton"
import Colors from "../../constants/colors"

export default function GameOver({selectedNumber, numOfGuess, reset}){
    const {height, width} = useWindowDimensions()

let imageSize = 300;

if(width < 380){
    imageSize = 150;
}

if(height < 400){
    imageSize = 80;
}

const updatedStyles = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
}

return (
    <ScrollView style={styles.screen}>
        <View style={styles.GameOverContainer}>
            <Header text="GAME OVER!" />
            <View style={[styles.imageContainer, updatedStyles]}>
                <Image style={styles.image} source={require('../../assets/images/success.png')}/>
            </View>
            <Text style={styles.text}>Your phone needed <Text style={styles.highlightedText}>{numOfGuess}</Text> rounds to guess the number <Text style={styles.highlightedText}>{selectedNumber}</Text></Text>
            <CustomButton onPress={reset}>Start New Game</CustomButton>
        </View>
    </ScrollView>)
}

// const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },

    GameOverContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageContainer: {
        // width: screenWidth < 380 ? 150 : 300,
        // height: screenWidth < 380 ? 150 : 300,
        // borderRadius: screenWidth < 380 ? 75 : 150,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: Colors.primary800,
        marginHorizontal: 'auto',
        marginVertical: 36,
    },

    image: {
        width: '100%',
        height: '100%'
    },

    text: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },

    highlightedText: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})