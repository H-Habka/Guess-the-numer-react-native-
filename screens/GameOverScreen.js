import { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    Button,
    Dimensions,
    ScrollView,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import RegularText from "../components/RegularText";
import TitleText from "../components/TitleText";

const GameOverScreen = ({
    restartTheGame,
    useSelectedNumber,
    totalGuesses,
}) => {
    const [screenWidth, setScreenWidth] = useState(
        Dimensions.get("window").width
    );

    useEffect(() => {
        const handleOrienationChange = () => {
            setScreenWidth(Dimensions.get("window").width);
        };
        let eventListener = Dimensions.addEventListener("change", handleOrienationChange);

        return () => {
            eventListener.remove()
        };
    }, []);

    return (
        <ScrollView>
            <View style={[tw`p-4 flex-1`]}>
                <TitleText style={[tw`text-4xl text-center mb-3`]}>
                    GameOver
                </TitleText>
                <View
                    style={[
                        tw`mx-auto rounded-full overflow-hidden`,
                        {
                            width:
                                screenWidth < 400
                                    ? screenWidth * 0.9
                                    : screenWidth * 0.5,
                            height:
                                screenWidth < 400
                                    ? screenWidth * 0.9
                                    : screenWidth * 0.5,
                        },
                    ]}
                >
                    <Image
                        // source={require("../assets/success.png")}
                        source={{
                            uri: "https://hips.hearstapps.com/clv.h-cdn.co/assets/16/49/gettyimages-492392636-1.jpg",
                        }}
                        style={[tw`w-full h-full`]}
                        resizeMode="cover"
                        fadeDuration={400}
                    />
                </View>
                <RegularText style={[tw`text-2xl text-center mt-4`]}>
                    You Guess the Number in: {totalGuesses} Efforts
                </RegularText>
                <RegularText style={[tw`text-2xl text-center mt-4 mb-8`]}>
                    The Number Was : {useSelectedNumber}
                </RegularText>
                <View
                    style={[tw`mx-auto`,{
                        width:
                            screenWidth < 400
                                ? screenWidth * 0.9
                                : screenWidth * 0.5,
                    }]}
                >
                    <Button onPress={restartTheGame} title="Play Again" />
                </View>
            </View>
        </ScrollView>
    );
};

export default GameOverScreen;
