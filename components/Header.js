import { View, Platform } from "react-native";
import tw from "tailwind-react-native-classnames";
import { StatusBar } from "expo-status-bar";
import TitleText from "./TitleText";

const Header = ({ title }) => {
    return (
        <View
            style={[
                tw`w-full pt-6 pb-3 `,
                {
                    backgroundColor:
                        Platform.OS === "android" ? "#596475" : "white",
                },
            ]}
        >
            <TitleText style={[tw`text-center text-2xl`, { color: "#FDE8E9" }]}>
                {title}
            </TitleText>
            <StatusBar style="light" />
        </View>
    );
};

export default Header;
