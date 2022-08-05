import { useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import tw from "tailwind-react-native-classnames";

const data = [
    "hasan",
    "hossien",
    "hamada",
    "hanen",
    "samah",
    "salma",
    "samera",
    "saosan",
    "sanaa",
    "homam",
    "hamed",
    "hidara",
];

const TestScreen = () => {
    const [dataArray, setDataArray] = useState([]);

    const onTextChangeHandler = (text) => {
        let filterdData = [];
        if (text.indexOf("@") >= 0) {
            filterdData = data;
            if (text.split("@")[1].length) {
                filterdData = data.filter((item) =>
                    item.startsWith(text.split("@")[1].trim())
                );
            }
        } else {
            filterdData = [];
        }
        setDataArray(filterdData);
        console.log(filterdData);
    };

    return (
        <View style={[tw`border flex-1`]}>
            <View style={[tw`border flex-1`]}>
                <Text></Text>
            </View>
            <View style={[tw` flex-1 w-10/12 mx-auto`]}>
                <View style={[tw`relative`]}>
                    <TextInput
                        style={[tw`border w-full  mt-4 p-2`]}
                        onChangeText={onTextChangeHandler}
                    />
                    <FlatList
                        style={[tw`absolute w-full max-h-44`, { bottom: 45 }]}
                        keyExtractor={(item, idx) => idx}
                        data={dataArray}
                        renderItem={({ item }) => {
                            return (
                                <Text
                                    style={[
                                        tw`border border-red-500 p-1 bg-blue-400`,
                                    ]}
                                >
                                    {item}
                                </Text>
                            );
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default TestScreen;
