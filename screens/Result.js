import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { resultContext } from "../App";
import ComputeResult from "../Functions/ComputeResult";
import MakeResultPresentable from "../Functions/MakeResultPresentable";
import RandomResult from "../Functions/RandomResult";
import ComputeDessert from "../Functions/ComputeDessert";

const Result = () => {
    const navigation = useNavigation();
    const { answer } = useContext(resultContext);
    const finalAnswer = RandomResult(ComputeResult(answer))["Food Name"];
    const dessertAnswer = RandomResult(ComputeDessert(answer)["Food Name"]);
    let condition = false; // Use let instead of const

    if (answer[4] === 'Yes') {
        condition = true;
    }

    return (
        <View style={Styles.container}>
            {condition ? (
                <Text style={Styles.HomeText}>
                    {console.log(finalAnswer)}
                    How about {finalAnswer} for today's lunch? and {dessertAnswer} for dessert?
                </Text>
            ) : (
                <Text style={Styles.HomeText}>
                    {console.log(finalAnswer)}
                    How about {finalAnswer} for today's lunch?
                </Text>
            )}
            <View style={{ marginTop: 70 }} />
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={Styles.button}
            >
                <Text style={Styles.buttonText}>Home</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Result;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
        marginBottom: 30,
        backgroundColor: "#f2bb66", // 배경색상 추가
    },
    HomeText: {
        fontSize: 25,
        fontWeight: "bold",
        // flex: 1,
        textAlign: "center",
        // marginTop: "40%",
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        marginBottom: 50,
        color: "#333", // 글자색상 추가
    },
    button: {
        backgroundColor: "#3498db", // 버튼 배경색상 추가
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff", // 버튼 글자색상 추가
        fontSize: 24,
        fontWeight: "bold",
    },
});
