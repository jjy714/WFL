import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SubmitButton from "../components/SubmitButton";
import BinaryButton from "../components/BinaryButton";
import OptionButton from "../components/OptionButton";

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
        question={'Question3'}
        onSubmit={isSelected} 
        answer={selectedOption} 
        nextPage={'Question4'}
        style={Styles.submitButton} // Add custom style for SubmitButton
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2bb66',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HomeText: {
    fontSize: 30,
    textAlign: "center",
    marginTop: "10%",
    marginBottom: "10%",
  },
  optionsContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  submitButton: {
    marginTop: 20, // Add margin top for spacing between SubmitButton and options
  },
});

export default Question3;
