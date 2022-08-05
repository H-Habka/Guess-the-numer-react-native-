import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";

const CustomInputField = ({ label,value, setValue ,style}) => {
    const [focusState, setFocusState] = useState(false);

    return (
        <View style={[tw`p-2`,style]}>
            <Text
                style={[
                    tw`absolute text-gray-400`,
                    (focusState || value) ? Styles.inputOnFouces : Styles.inputOnUnFouces,
                ]}
            >
                {label}
            </Text>
            <TextInput
                style={[tw`border-b-2 text-xl my-5`]}
                onFocus={() => setFocusState(true)}
                onBlur={() => setFocusState(false)}
                onChangeText={(text) => setValue(text)}
                value={value}
                secureTextEntry={(label==='Password')?true:false}
                
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    inputOnFouces: {
        top: 0,
        left: 12,
        fontSize: 20,
    },
    inputOnUnFouces: {
        top: "40%",
        left: 14,
        fontSize: 18,
    },
});

export default CustomInputField;
