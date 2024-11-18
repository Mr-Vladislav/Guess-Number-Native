import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameSetup from './components/game/GameSetup';
import GamePlay from './components/game/GamePlay';
import GameOver from './components/game/GameOver';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState(0)
  const [currentScreen, setCurrentScreen] = useState('startScreen')
  const [numberOfGuesses, setNumberOfGuesses] = useState(1)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  const chooseNumber = (num) => {
    setSelectedNumber(num)
  }

  const reset = () => {
    setSelectedNumber(0);
    setCurrentScreen('startScreen');
    setNumberOfGuesses(1);
  }

  const increaseNumberOfGuesses = () => {
    setNumberOfGuesses(num => num + 1)
  }

  return (
    <>
    <StatusBar style='light'/>
    <LinearGradient colors={[Colors.primary700,Colors.secondary700]} style={styles.container}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.container} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.container}>
          {currentScreen === 'startScreen' ?
            <GameSetup selectNumber={chooseNumber} changeScreen={setCurrentScreen} />
          :
          currentScreen === 'gameScreen' ?
            <GamePlay selectedNumber={selectedNumber} changeScreen={setCurrentScreen} increaseNumberOfGuesses={increaseNumberOfGuesses}/>
          :
          currentScreen === 'gameOverScreen' ?
          <GameOver selectedNumber={selectedNumber} numOfGuess={numberOfGuesses} reset={reset}/>
          :
          ''
          }
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.15
  }
});