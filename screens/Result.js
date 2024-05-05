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
	const [refreshing, setRefreshing] = useState(false); // State to manage refreshing

	// Function to handle refresh
	const onRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		});
	};

	const finalAnswer = RandomResult(ComputeResult(answer))["Food Name"];
	let SuccessCondition = true;
	if (finalAnswer == null) {
		SuccessCondition = false;
	}
	return (
		<View>
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
						What about {finalAnswer} for today's lunch?
					</Text>
					<Text style={Styles.subtext}>
						{" "}
						Pull down for another random suggestion!{" "}
					</Text>
					<View style={{ marginTop: 70 }} />
					<TouchableOpacity
						onPress={() => navigation.navigate("Home")}
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
		padding: 1,
		marginBottom: 30,
		backgroundColor: "#f2bb66", // 배경색상 추가
	},
	HomeText: {
		fontSize: 25,
		fontWeight: "bold",
		textAlign: "center",
	},
	subtext: {
		fontSize: 20,
		fontWeight: "italic",
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
