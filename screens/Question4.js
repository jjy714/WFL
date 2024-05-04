import React, { createContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { RadioButton } from 'react-native-paper'; 
import BinaryButton from "../components/BinaryButton";

const Question4 = () => {


  const [selectedOption, setSelectedOption] = useState(null);
  const [isSelected, setSelected] = useState(false);


  const optionFactors = {
    option1: 'Yes',
    option2: 'No',
  }

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    // You can perform any additional actions here when an option is selected
  };

  const handleSubmission = (value) =>{
    setSelected(value)
  }


  return (
    <View style={Styles.container}>      
      <Text style={Styles.HomeText}> Would you like your food with soup? </Text>
      <View style={Styles.optionsContainer}></View>
      <BinaryButton 
          optionFactors={optionFactors} 
          setSelectedValue={handleSelectOption}
          setSelected={handleSubmission}
        />
      <SubmitButton 
      question={'Question4'}
          onSubmit={isSelected} 
        answer={selectedOption} 
        nextPage={'Question5'}
        style={Styles.submitButton}
      />
    </View>
  )
}

export default Question4;


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