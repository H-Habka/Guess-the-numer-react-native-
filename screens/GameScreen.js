import { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import tw from "tailwind-react-native-classnames";
import TitleText from "../components/TitleText";
import { lockAsync, OrientationLock } from "expo-screen-orientation";

const GameScreen = ({ onGameOver, selectedNumber }) => {
    useEffect(() => {
        lockAsync(OrientationLock.PORTRAIT);
        return () => {
            lockAsync(OrientationLock.DEFAULT);
        };
    }, []);

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(99);
    const [guess, setGuess] = useState(
        Math.floor(Math.random() * (end - start)) + start
    );
    const [numberOfGuesses, setNumberOfGuesses] = useState(1);
    const [gameover, setGameover] = useState(false);

    const handleLessPress = () => {
        if (guess <= selectedNumber) {
            Alert.alert("😡😡😡", "dont cheat", [
                { text: "Ok", style: "destructive" },
            ]);
            return;
        }

        setEnd(guess - 1);
        setGuess(
            (lastGuess) =>
                Math.floor(Math.random() * (lastGuess - 1 - start)) + start
        );
        setNumberOfGuesses((lastValue) => lastValue + 1);
    };

    const handleGreaterPress = () => {
        if (guess >= selectedNumber) {
            Alert.alert("😡😡😡", "dont cheat", [
                { text: "Ok", style: "destructive" },
            ]);
            return;
        }

        setStart(guess + 1);
        setGuess(
            (lastGuess) =>
                Math.floor(Math.random() * (end - lastGuess + 1)) + lastGuess
        );
        setNumberOfGuesses((lastValue) => lastValue + 1);
    };

    useEffect(() => {
        if (guess === selectedNumber) {
            onGameOver(numberOfGuesses);
        }
    }, [guess]);

    return (
        <View style={[tw`flex-1 mt-5`]}>
            <TitleText style={[tw`text-xl text-gray-700 text-center`]}>
                I Think 🤔🤔 Your Number is
            </TitleText>
            <View style={[tw`items-center justify-center mt-4`]}>
                <TitleText
                    style={[
                        tw`border-2 text-center rounded-xl text-2xl text-red-400 border-red-400 p-4`,
                    ]}
                >
                    {guess}
                </TitleText>
            </View>
            <TitleText style={[tw`text-xl text-gray-700 text-center mt-4`]}>
                is It True ?? 🙃🙃
            </TitleText>
            <View style={[tw`flex-row flex-wrap justify-center`]}>
                <View style={[tw`w-1/3 mx-1 mt-4 rounded-xl overflow-hidden`]}>
                    <Button onPress={handleLessPress} title="it's less" />
                </View>
                <View style={[tw`w-1/3 mx-1 mt-4 rounded-xl overflow-hidden`]}>
                    <Button
                        onPress={handleGreaterPress}
                        title="it's greater "
                        color="#aF2111"
                    />
                </View>
            </View>
        </View>
    );
};

export default GameScreen;
