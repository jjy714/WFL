import React, { useState } from 'react'; 
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; 

const CustomRadioButton = ({ label, selected, onSelect }) => ( 
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

const OptionButton = ({ optionFactors, setSelectedValue, setSelected }) => {
    const [selectedValue, setSelectedValueInternal] = useState('');

    const handlePress = (option) => {
        setSelectedValue(option);
        setSelectedValueInternal(option);
        setSelected(true);
    }

    return ( 
        <View style={styles.container}> 
            <CustomRadioButton 
                label={optionFactors['option1']}
                selected={selectedValue === optionFactors['option1']} 
                onSelect={() => handlePress(optionFactors['option1'])}
            /> 
            <CustomRadioButton 
                label={optionFactors['option2']}
                selected={selectedValue === optionFactors['option2']} 
                onSelect={() => handlePress(optionFactors['option2'])}
            />
            <CustomRadioButton 
                label={optionFactors['option3']}
                selected={selectedValue === optionFactors['option3']} 
                onSelect={() => handlePress(optionFactors['option3'])}
            /> 
            <CustomRadioButton 
                label={optionFactors['option4']}
                selected={selectedValue === optionFactors['option4']} 
                onSelect={() => handlePress(optionFactors['option4'])}
            /> 
            <CustomRadioButton 
                label={optionFactors['option5']}
                selected={selectedValue === optionFactors['option5']} 
                onSelect={() => handlePress(optionFactors['option5'])}
            /> 
        </View> 
    ); 
}; 

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

export default OptionButton;
