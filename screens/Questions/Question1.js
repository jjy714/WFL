import React, { createContext, useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import SubmitButton from "../../components/SubmitButton";
import { RadioButton } from "react-native-paper";
import OptionButton from "../../components/OptionButton";
import { resultContext } from "../../App";

const Question1 = () => {
	const [selectedOption, setSelectedOption] = useState(null);
	const [isSelected, setSelected] = useState(false);

	const optionFactors = {
		option1: "Not spicy",
		option2: "Little spicy",
		option3: "Medium spicy(About Shin ramyen)",
		option4: "Very hot(About Buldak)",
	};

	const handleSelectOption = (option) => {
		setSelectedOption(option);
	};

	const handleSubmission = (value) => {
		setSelected(value);
	};

	return (
		<View style={Styles.container}>
			<Text style={Styles.HomeText}>
				How Spicy do you want your food?
			</Text>
			<OptionButton
				optionFactors={optionFactors["option1"]}
				setSelectedValue={handleSelectOption}
				setSelected={handleSubmission}
			/>
			<OptionButton
				optionFactors={optionFactors['option2']}
				setSelectedValue={handleSelectOption}
				setSelected={handleSubmission}
			/>
			<OptionButton
				optionFactors={optionFactors['option3']}
				setSelectedValue={handleSelectOption}
				setSelected={handleSubmission}
			/>
			<OptionButton
				optionFactors={optionFactors['option4']}
				setSelectedValue={handleSelectOption}
				setSelected={handleSubmission}
			/>
			<SubmitButton
				title = "Next"
				question={'Question1'}
				onSubmit={isSelected}
				answer={selectedOption}
				nextPage={"Question2"}
			/>
		</View>
	);
};

export default Question1;

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f2bb66",
		justifyContent: "center",
		alignItems: "center",
	},
	HomeText: {
		fontSize: 25,
		fontWeight: "bold",
		// flex: 1,
		textAlign: "center",
		marginTop: "40%",
	},
	questionText: {
		fontSize: 20,
		marginBottom: "10%",
		textAlign: "center",
	},
	NextBottom: {
		backgroundColor: "Blue",
		padding: 3,
		flex: 1,
		marginTop: "20%",
		width: "50%",
		alignSelf: "center",
		borderRadius: 10,
	},
	BottomText: {
		fontSize: 15,
		marginTop: 15,
		color: "black",
		textAlign: "center",
	},
	optionsContainer: {
		marginTop: 20,
		marginBottom: 20,
	},
});