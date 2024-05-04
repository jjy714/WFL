import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";




const CustomBinaryButton = ({ label, selected, onSelect }) => ( 
    <TouchableOpacity 
        style={[styles.radioButton, 
        { backgroundColor: selected ? '#007BFF' : '#FFF' }]} 
        onPress={onSelect} 
    > 
        <Text style={[styles.radioButtonText, 
        { color: selected ? '#FFF' : '#000' }]}> 
            {label} 
        </Text> 
    </TouchableOpacity> 
); 


const BinaryButton = ({ optionFactors, setSelectedValue, setSelected }) => {
	const navigation = useNavigation();
	const [selectedValue, setSelectedValueInternal] = useState("");

	const handlePress = (option) => {
		setSelectedValue(option);
		setSelectedValueInternal(option);
		setSelected(true);
	};

	return (
		<View>
			<CustomBinaryButton 
                label={optionFactors['option1']}
                selected={selectedValue === optionFactors['option1']} 
                onSelect={() => handlePress(optionFactors['option1'])}
            /> 
            <CustomBinaryButton 
                label={optionFactors['option2']}
                selected={selectedValue === optionFactors['option2']} 
                onSelect={() => handlePress(optionFactors['option2'])}
            />
		</View>
	);
};

export default BinaryButton;

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#f2bb66', 
    }, 
    radioButton: { 
        paddingVertical: 12, 
        paddingHorizontal: 16, 
        borderRadius: 8, 
        marginVertical: 8, 
        borderWidth: 1, 
        borderColor: '#007BFF', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: 280, 
    }, 
    radioButtonText: { 
        fontSize: 16, 
    }, 
});