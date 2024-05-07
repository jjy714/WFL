import React from 'react'; 
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; 
import { useState } from 'react';

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
                label={optionFactors}
                selected={selectedValue === optionFactors} 
                onSelect={() => handlePress(optionFactors)}
            /> 
        </View> 
    ); 
}; 

const styles = StyleSheet.create({ 
    container: { 
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