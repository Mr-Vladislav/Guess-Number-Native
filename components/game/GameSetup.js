import { View, StyleSheet, TextInput, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native"
import { useState } from "react"
import CustomButton from "./CustomButton"
import Header from "../Header"
import Error from "./Error"
import Colors from "../../constants/colors"
import Card from "../../ui/Card"
import InstructionText from "../../ui/InstructionText"

export default function GameSetup({selectNumber, changeScreen}){
    const [insertedNumber, setInsertedNumber] = useState('')
    // const [showError, setShowError] = useState(false)

    const { height, width } = useWindowDimensions()

    const updateNumber = (text) => {
        setInsertedNumber(text)
    }

    const clearField = () => {
        setInsertedNumber('')
    }

    // const toggleShowError = () => {
    //     setShowError(show => !show)
    // }

    const handleSelectNumber = () => {
        if(+insertedNumber >= 1 && +insertedNumber <= 99 && !isNaN(+insertedNumber)){
            selectNumber(+insertedNumber)
            changeScreen('gameScreen')
        } else {
            Alert.alert("Invalid number!","Number has to be a number between 1 and 99.",[{ text:"Okay", style:"destructive", onPress: clearField}])
            // toggleShowError()
            return
        }
    }

    const marginTopDistance = height < 400 ? 30 :  100

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.gameSetupContainer, {marginTop: marginTopDistance}]}>
                    <Header text='Guess My Number'/>
                    <Card>
                        <InstructionText>Enter a Number</InstructionText>
                        <TextInput style={styles.inputText} onChangeText={updateNumber} value={insertedNumber} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonInnerContainer}>
                                <CustomButton onPress={clearField}>Reset</CustomButton>
                            </View>
                            <View style={styles.buttonInnerContainer}>
                                <CustomButton onPress={handleSelectNumber}>Confirm</CustomButton>
                            </View>
                        </View>
                    </Card>
                    {/* <Error shown={showError} title="Invalid number!" text="Number has to be a number between 1 and 99." buttonText="Okay" onPress={toggleShowError} /> */}
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, //KeyboardAvoidingView + ScrollView method needed on ios
    },

    gameSetupContainer: {
        alignItems: 'center',
        justifyContent: 'start',
        flex: 1,
        width: '100%',
    },

    gameSetup: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: Colors.primary800,
        width: '90%',
        marginHorizontal: '5%',
        marginTop: 30,
        borderRadius: 10,
        elevation: 4, // adds shadow box for Android
        shadowColor: 'black', // adds shadow box for ios
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },

    gameSetupHeaderText: {
        color: Colors.secondary500,
        fontSize: 20,
        textAlign: 'center',
    },

    inputText: {
        width: 50,
        margin: 'auto',
        borderBottomWidth: 2,
        borderColor: Colors.secondary500,
        color: Colors.secondary500,
        fontSize: 32,
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    buttonInnerContainer: {
        flex: 1,
    },
})