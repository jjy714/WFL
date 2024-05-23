import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SubmitButton from "../../components/SubmitButton";
import BinaryButton from "../../components/BinaryButton";
import OptionButton from "../../components/OptionButton";

const Question3 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSelected, setSelected] = useState(false);

  const optionFactors = {
    option1: 'Hot',
    option2: 'Cold'
  }

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleSubmission = (value) =>{
    setSelected(value);
  };

  return (
    <View style={Styles.container}>      
      <Text style={Styles.HomeText}> Would you like your food Hot or Cold? </Text>

      <View style={Styles.optionsContainer}>
      <OptionButton 
        optionFactors={optionFactors['option1']} 
        setSelectedValue={handleSelectOption} 
        setSelected={handleSubmission}
      />
      <OptionButton 
        optionFactors={optionFactors['option2']} 
        setSelectedValue={handleSelectOption} 
        setSelected={handleSubmission}
      />
      </View>

      <SubmitButton 
	  	title="NEXT"
        question={'Question3'}
        onSubmit={isSelected} 
        answer={selectedOption} 
        nextPage={'Question4'}
        style={Styles.submitButton} 
      />
    </View>
  );
};

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

export default Question3;
