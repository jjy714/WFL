import React, { createContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import SubmitButton from "../../components/SubmitButton";
import { RadioButton } from 'react-native-paper'; 
import OptionButton from "../../components/OptionButton";

const Question2 = () => {


  const [selectedOption, setSelectedOption] = useState(null);
  const [isSelected, setSelected] = useState(false);


  const optionFactors = {
    option1: 'Korean',
    option2: 'Chinese',
    option3: 'Japanese',
    option4: 'Western',
    option5: 'etc'
  }

  const handleSelectOption = (option) => {
    setSelectedOption(option);
   
  };

  const handleSubmission = (value) =>{
    setSelected(value)
  }


  return (
    <View style={Styles.container}>      
      <Text style={Styles.HomeText}> Which Category of Food would you like? </Text>
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
      <OptionButton 
        optionFactors={optionFactors['option5']} 
        setSelectedValue={handleSelectOption} 
        setSelected={handleSubmission}
      />
      <SubmitButton 
      title = "NEXT"
      question={'Question2'}
        onSubmit={isSelected} 
        answer={selectedOption} 
        nextPage={'Question3'}
      />
      
    </View>
  )
}

export default Question2;

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