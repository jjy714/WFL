import React, { createContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { RadioButton } from "react-native-paper";
import BinaryButton from "../components/BinaryButton";
import OptionButton from "../components/OptionButton";

const Question5 = () => {
	const [selectedOption, setSelectedOption] = useState(null);
	const [isSelected, setSelected] = useState(false);

	const optionFactors = {
		option1: "Yes",
		option2: "No",
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
				Would you like soup with your food?
			</Text>
			<OptionButton
				optionFactors={optionFactors["option1"]}
				setSelectedValue={handleSelectOption}
				setSelected={handleSubmission}
			/>
			<OptionButton
				optionFactors={optionFactors["option2"]}
				setSelectedValue={handleSelectOption}
				setSelected={handleSubmission}
			/>
			<SubmitButton
				title = "SUBMIT"
				question={"Question5"}
				onSubmit={isSelected}
				answer={selectedOption}
				nextPage={"Result"}
			/>
		</View>
	);
};

export default Question5;

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f2bb66",
		justifyContent: "center",
		alignItems: "center",
	},
	HomeText: {
		fontSize: 30,
		textAlign: "center",
		marginTop: "40%",
		marginBottom: "10%",
		fontWeight: 'bold'
	},
	optionsContainer: {
		marginTop: 20,
		marginBottom: 20,
	},
	submitButton: {
		marginTop: 20, 
	},
});
