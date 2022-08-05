import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    ScrollView,
    KeyboardAvoidingView
} from "react-native";
import tw from "tailwind-react-native-classnames";
import TitleText from "../components/TitleText";
import RegularText from "../components/RegularText";

const StartGameScreen = ({ startGame }) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(0);

    const handleResetButtonPress = () => {
        setEnteredValue("");
        setConfirmed(false);
    };

    const handleConfirmButtonPress = () => {
        let numberSelected = parseInt(enteredValue);
        if (isNaN(numberSelected)) {
            Alert.alert(
                "you make a mistake",
                "number must be between 0 and 99",
                [
                    {
                        text: "OK",
                        style: "destructive",
                        onPress: handleResetButtonPress,
                    },
                ]
            );
            return;
        }
        setSelectedNumber(numberSelected);
        setConfirmed(true);
        setEnteredValue("");
        Keyboard.dismiss();
    };

    let AfterConfirming = () => {
        return (
            <View style={[tw`border-2 w-10/12 mx-auto mt-2 py-3 rounded-2xl`]}>
                <RegularText
                    style={[tw`mt-2 text-xl text-center w-10/12 mx-auto`]}
                >
                    You Selected
                </RegularText>
                <View style={[tw`items-center justify-center mt-2`]}>
                    <TitleText
                        style={[
                            tw`border-2 text-center rounded-xl text-2xl text-red-400 border-red-400 p-4`,
                        ]}
                    >
                        {selectedNumber}
                    </TitleText>
                </View>
                <View
                    style={[tw`w-4/6 mx-auto mt-4 rounded-xl overflow-hidden `]}
                >
                    <Button
                        title="Let's Get Started"
                        color="#2277dd"
                        onPress={startGame.bind(this, selectedNumber)}
                    />
                </View>
            </View>
        );
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={20}>
                    <View  style={[tw`flex-1 `]}>
                        <TitleText style={[tw`text-center text-2xl pb-4`]}>
                            Start a new Game!
                        </TitleText>
                        <View
                            style={[
                                tw`border-2 border-gray-600 py-4 w-10/12 mx-auto rounded-xl `,
                            ]}
                        >
                            <View style={[tw``]}>
                                <RegularText style={[tw`text-center text-xl`]}>
                                    Select Number
                                </RegularText>
                                <TextInput
                                    value={enteredValue}
                                    onChangeText={(value) => {
                                        setEnteredValue(value);
                                    }}
                                    keyboardType="number-pad"
                                    maxLength={2}
                                    style={[
                                        tw`text-center text-xl font-semibold mt-4 text-gray-900 border-b mx-auto `,
                                    ]}
                                />
                            </View>
                            <View
                                style={[
                                    tw`flex-row w-4/5 mx-auto justify-between mt-4`,
                                ]}
                            >
                                <View
                                    style={[
                                        tw`flex-1 mx-1 rounded overflow-hidden`,
                                    ]}
                                >
                                    <Button
                                        title="Reset"
                                        color="#ee2222"
                                        onPress={handleResetButtonPress}
                                    />
                                </View>
                                <View
                                    style={[
                                        tw`flex-1 mx-1 rounded overflow-hidden`,
                                    ]}
                                >
                                    <Button
                                        disabled={confirmed ? true : false}
                                        title="Confirm"
                                        color="#22aaff"
                                        onPress={handleConfirmButtonPress}
                                    />
                                </View>
                            </View>
                        </View>
                        {confirmed && <AfterConfirming />}
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
};

export default StartGameScreen;
