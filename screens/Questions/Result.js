import React, { useContext, useState, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	RefreshControl,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { resultContext } from "../../App";
import { LoginContext } from "../../Functions/LoginProvider";
import ComputeResult from "../../Functions/ComputeResult";
import RandomResult from "../../Functions/RandomResult";
import ErrorPage from "./ErrorPage";

const Result = () => {
	const navigation = useNavigation();
	const { answer } = useContext(resultContext);
	const { user, isLoggedIn, token } = useContext(LoginContext);
	const [refreshing, setRefreshing] = useState(false);
	const [finalAnswers, setFinalAnswers] = useState([]);
	const [prefinalAnswer, setPrefinalAnswer] = useState(null);
	const [successCondition, setSuccessCondition] = useState(true);

	useEffect(() => {
		const computedResults = ComputeResult(answer);
		console.log(computedResults);
		if (!computedResults || computedResults.length === 0) {
			setSuccessCondition(false);
		} else {
			setFinalAnswers(computedResults);
			const randomResult = RandomResult(computedResults);
			if (randomResult) {
				setPrefinalAnswer(randomResult["Food Name"]);
			} else {
				setSuccessCondition(false);
			}
		}
	}, [answer]);

	const SaveExit = async () => {
		try {
			const body = { answer: answer, result: prefinalAnswer };
			const response = await axios.post(
				`http://127.0.0.1:8000/backend/user/history/create/${user.username}/`,
				body,{
					headers: {
                    'Authorization': `Token ${token}`,
					'Content-Type': 'application/json'
                }
			}
			);
			console.log(response.data);
		} catch (error) {
			alert(error);
		}
	};

	const onRefresh = () => {
		setRefreshing(true);
		if (finalAnswers.length > 0) {
			const randomResult = RandomResult(finalAnswers);
			setPrefinalAnswer(randomResult["Food Name"]);
		}
		setTimeout(() => {
			setRefreshing(false);
		}, 1000);
	};

	return (
		<View style={Styles.container}>
			{successCondition ? (
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
						{prefinalAnswer
							? `What about ${prefinalAnswer} for today's lunch?`
							: "No suggestion available."}
					</Text>
					<Text style={Styles.subtext}>
						Pull down for another random suggestion!{" "}
					</Text>
					<TouchableOpacity
						onPress={() => navigation.navigate("Recommendation")}
						style={Styles.button}
					>
						<View />
						<Text style={Styles.buttonText}>
							Restaurant Recommendation
						</Text>
					</TouchableOpacity>
					{!isLoggedIn ? (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("HomePage");
							}}
							style={Styles.button}
						>
							<Text style={Styles.buttonText}>Exit</Text>
						</TouchableOpacity>
					) : (
						<TouchableOpacity
							onPress={() => {
								SaveExit();
								navigation.navigate("HomePage");
							}}
							style={Styles.button}
						>
							<Text style={Styles.buttonText}>Save & Exit</Text>
						</TouchableOpacity>
					)}
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
		marginTop: 10,
	},
	buttonText: {
		color: "#fff",
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},
});
