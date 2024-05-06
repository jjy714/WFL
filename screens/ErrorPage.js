import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { resultContext } from "../App";
import ComputeResult from "../Functions/ComputeResult";
import RandomResult from "../Functions/RandomResult";

const ErrorPage = () => {
    const navigation = useNavigation();
    return (
        <View style = {Styles.container}>
            <Text style={Styles.HomeText}>
                Messing around are we? HAHA. Just Joking. There's no food for that condtion. Try again!
            </Text>
            <View style={{ marginTop: 70 }} />
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={Styles.button}
            >
                <Text style={Styles.buttonText}>Try again</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ErrorPage;

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
        textAlign: "center",
    },
    subtext:{
        fontSize: 20,
        textAlign: 'center'   
    },
    button: {
        backgroundColor: "#3498db",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
});
