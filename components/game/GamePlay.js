import { View, Text, StyleSheet, Alert, FlatList, Dimensions, useWindowDimensions } from "react-native"
import { useEffect, useState } from "react"
import Header from "../Header"
import CustomButton from "./CustomButton"
import Error from "./Error"
import Colors from "../../constants/colors"
import Card from "../../ui/Card"
import InstructionText from "../../ui/InstructionText"
import { Ionicons } from  '@expo/vector-icons'

export default function GamePlay({selectedNumber, changeScreen, increaseNumberOfGuesses}){
    const [guessedNumber, setGuessedNumber] = useState(Math.floor(Math.random() * 99) + 1)
    const [guessingObject, setGuessingObject] = useState({
        min: 1,
        max: 99,
    })
    const [guesses, setGuesses] = useState([])
    // const [showError, setShowError] = useState(false)
    const {width, height} = useWindowDimensions();

    useEffect(()=>{
        if(selectedNumber === guessedNumber){
            changeScreen('gameOverScreen')
        } else {
            setGuesses(guesses => [{number: guessedNumber, key: guessedNumber}, ...guesses])
        }
    },[guessedNumber, selectedNumber, changeScreen])

      const handleMore = () => {
        if(selectedNumber > guessedNumber){
            setGuessingObject((curObject) => {
                return {
                ...curObject,
                min: guessedNumber + 1
                }
            })

            increaseNumberOfGuesses()

            const newGuessedNumber = Math.floor(Math.random() * (guessingObject.max - guessedNumber)) + guessedNumber + 1


            setGuessedNumber(newGuessedNumber)           
        } else {
            Alert.alert("Don't lie!", "You know that this is wrong...",[{ text: "Sorry", style: "cancel"}])
            // toggleShowError()
        }
      }

      const handleLess = () => {
        if(selectedNumber < guessedNumber){
            setGuessingObject((curObject) => {
                return {
                ...curObject,
                max: guessedNumber - 1
                }
            })

            increaseNumberOfGuesses()

            const newGuessedNumber = Math.floor(Math.random() * (guessedNumber - guessingObject.min)) + guessingObject.min

               setGuessedNumber(newGuessedNumber) 
        
        } else {
            Alert.alert("Don't lie!", "You know that this is wrong...",[{ text: "Sorry", style: "cancel"}])
            // toggleShowError()
        }
      }

    //   const toggleShowError = () => {
    //     setShowError(show => !show)
    // }

    let content = (
        <>
            <View style={styles.numberContainer}>
                <Text style={styles.numberText}>{guessedNumber}</Text>
            </View>
            <Card>
                <InstructionText style={styles.instructionsText}>Higher or lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonInnerContainer}>
                        <CustomButton onPress={handleLess}>
                            <Ionicons name="remove" size={24} color="white" />
                        </CustomButton>
                    </View>
                    <View style={styles.buttonInnerContainer}>
                        <CustomButton onPress={handleMore}>
                            <Ionicons name="add" size={24} color="white" />
                        </CustomButton>
                    </View>
                </View>
            </Card>
        </>
    )

    if(width > 500){
        content = (
            <>
                <View style={styles.buttonsContainerWide}>
                    <View style={styles.buttonInnerContainer}>
                        <CustomButton onPress={handleLess}>
                            <Ionicons name="remove" size={24} color="white" />
                        </CustomButton>
                    </View>
                    <View style={styles.numberContainer}>
                        <Text style={styles.numberText}>{guessedNumber}</Text>
                    </View>
                    <View style={styles.buttonInnerContainer}>
                        <CustomButton onPress={handleMore}>
                            <Ionicons name="add" size={24} color="white" />
                        </CustomButton>
                    </View>
                </View>
                
            </>
        )
    }

    return (
        <View style={styles.gamePlayContainer}> 
            <Header text="Opponent's Guess" />
            {content}
            <View style={styles.listContainer}>
                <FlatList data={guesses} renderItem={(itemData) => {return <View style={styles.guessRound}><Text>#{guesses.length - itemData.index}</Text><Text style={styles.guessRoundText}>Opponent's Guess: {itemData.item.number}</Text></View>}} alwaysBounceVertical={false}/>
            </View>
            {/* <Error shown={showError} title="Don't lie!" text="You know that this is wrong..." buttonText="Sorry" onPress={toggleShowError} /> */}
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    gamePlayContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 24,
        marginTop: 50,
    },

    numberContainer: {
        borderWidth: 4,
        borderColor: Colors.secondary500,
        padding: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        margin: deviceWidth < 380 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center'
    },

    numberText: {
        color: Colors.secondary500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontFamily: 'open-sans-bold'
    },

    instructionsText:{
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    buttonInnerContainer: {
        flex: 1,
    },

    listContainer: {
        flex: 1,
        padding: 16
    },

    guessRound: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.secondary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },

    guessRoundText: {
        fontFamily: 'open-sans'
    }
})
