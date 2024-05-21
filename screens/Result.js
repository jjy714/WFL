import React, { useContext, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    RefreshControl,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { resultContext } from "../App";
import ComputeResult from "../Functions/ComputeResult";
import RandomResult from "../Functions/RandomResult";
import ErrorPage from "./ErrorPage";

const Result = () => {
    const navigation = useNavigation();
    const { answer } = useContext(resultContext);
    const [refreshing, setRefreshing] = useState(false); 
    let SuccessCondition = true;

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000); 
    };
    const computedResults = ComputeResult(answer);
    if (!computedResults || computedResults.length === 0){
        SuccessCondition = false;
    }
    let prefinalAnswer;
    if (SuccessCondition) {
        const randomResult = RandomResult(computedResults);
        if (randomResult) {
            prefinalAnswer = randomResult["Food Name"];
        } else {
            SuccessCondition = false;
        }
    }
    if (prefinalAnswer === undefined) {
        SuccessCondition = false;
    }
   
    return (
        <View style={Styles.container}>
            {SuccessCondition ? (
                <ScrollView
                    contentContainerStyle={Styles.container}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            title="Pull down to Refresh"
                        />
                    }
                >
                    <Text style={Styles.HomeText}>
                        {prefinalAnswer ? `What about ${prefinalAnswer} for today's lunch?` : 'No suggestion available.'}
                    </Text>
                    <Text style={Styles.subtext}>
                        Pull down for another random suggestion!{" "}
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Recommendation")}
                        style={Styles.button}
                    >
                        <Text style={Styles.buttonText}>Restaurant Recommendation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("HomePage")}
                        style={Styles.button}
                    >
                        <Text style={Styles.buttonText}>Home</Text>
                    </TouchableOpacity>
                </ScrollView>
            ) : (
                <ErrorPage />
            )}
        </View>
    );
};

export default Result;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2bb66", 
    },
    HomeText: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtext: {
        fontSize: 20,
        fontWeight: "regular",
        textAlign: "center",
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
