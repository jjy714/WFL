import React, { useEffect } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { resultContext } from "../App";
import { useContext } from "react";

const SubmitButton = ({title, question, onSubmit, answer, nextPage }) => {
    // const useContext // use context
	const navigation = useNavigation();
    const {updateAnswers} = useContext(resultContext)
	
	const updateHistory = 0;

    const handlePress = () => {
		console.log("Next Page:", nextPage);
        if (onSubmit) {
            console.log(answer)
            updateAnswers(question, answer)
			navigation.navigate(nextPage);
		} else {
			alert("option not selected");
		}
	};

	return (
		<TouchableOpacity style={styles.button} onPress={handlePress}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

export default SubmitButton;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 1,
		marginTop: 20,
		marginBottom: 5,
		backgroundColor: "#f2bb66", // 배경색상 추가
	},
	title: {
		fontSize: 35,
		fontWeight: "bold",
		marginBottom: 30,
		color: "#333", // 글자색상 추가
	},
	button: {
		flex: 0,
		backgroundColor: "#3498db", // 버튼 배경색상 추가
		paddingVertical: 15,
		paddingHorizontal: 30,
		borderRadius: 10,
		marginBottom: 75,
	},
	buttonText: {
		color: "#fff", // 버튼 글자색상 추가
		fontSize: 24,
		fontWeight: "bold",
	},
});
