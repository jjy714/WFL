
import { Button, StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import { useState } from "react";
import { createContext } from "react";
import { LoginProvider } from "./Functions/LoginProvider";


export const resultContext = createContext();
export const defaultAnsFromQuestions = {
	Question1: "",
	Question2: "",
	Question3: "",
	Question4: "",
	Question5: "",
};

export default function Home() {
	
	const [answer, setAnswer] = useState(defaultAnsFromQuestions);

	const updateAnswers = (question, answer) => {
		setAnswer(prevState => ({
		  ...prevState,
		  [question]: answer
		}));
	  };
	  
	return (
		<View style={styles.container}>
			<LoginProvider>
			<resultContext.Provider value={{ answer, updateAnswers }}>
				<Navigation />
			</resultContext.Provider>
			</LoginProvider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f2bb66",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
	},
});
