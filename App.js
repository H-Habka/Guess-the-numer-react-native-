import { View, Text, Dimensions } from "react-native";
import tw from "tailwind-react-native-classnames";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import TestScreen from "./TestScreen";

const loadFonts = () => {
    return Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        "edu-regular": require("./assets/fonts/EduVICWANTBeginner-Regular.ttf"),
        "edu-bold": require("./assets/fonts/EduVICWANTBeginner-Bold.ttf"),
    });
};

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [useSelectedNumber, setUseSelectedNumber] = useState();
    const [totalGuesses, setTotalGuesses] = useState();
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await loadFonts();
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    const gameStartHandler = (selectedNumber) => {
        setUseSelectedNumber(selectedNumber);
    };

    const gameOverHandler = (numberOfGuess) => {
        setTotalGuesses(numberOfGuess);
    };

    const restartTheGame = () => {
        setUseSelectedNumber(undefined);
        setTotalGuesses(undefined);
    };

    // console.log(Dimensions.get("window").fontScale)
    // console.log(Dimensions.get("window").height)
    // console.log(Dimensions.get("window").width)
    // console.log(Dimensions.get("window").scale)

    // console.log('sssssssssssssssss')

    // console.log(Dimensions.get("screen").fontScale)
    // console.log(Dimensions.get("screen").height)
    // console.log(Dimensions.get("screen").width)
    // console.log(Dimensions.get("screen").scale)

    // let content = <StartGameScreen startGame={gameStartHandler} />;
    let content = <TestScreen />

    // if ((useSelectedNumber || useSelectedNumber === 0) && !totalGuesses) {
    //     content = (
    //         <GameScreen
    //             onGameOver={gameOverHandler}
    //             selectedNumber={useSelectedNumber}
    //         />
    //     );
    // } else if (totalGuesses) {
    //     content = (
    //         <GameOverScreen
    //             restartTheGame={restartTheGame}
    //             totalGuesses={totalGuesses}
    //             useSelectedNumber={useSelectedNumber}
    //         />
    //     );
    // } else {
    //     content = <StartGameScreen startGame={gameStartHandler} />;
    // }

    return (
        <View style={[tw`justify-start flex-1`]} onLayout={onLayoutRootView}>
            <Header title="Guess a Number" />
            {content}
        </View>
    );
}


