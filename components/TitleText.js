import { Text, StyleSheet } from "react-native";

const TitleText = ({ children, style }) => {
    let customStyles = {};
    if(style){
        style.map((item) => (customStyles = { ...customStyles, ...item }));
    }

    return (
        <Text style={{ ...styles.text, ...customStyles }}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: "edu-bold",
    },
});

export default TitleText;
