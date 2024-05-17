import { View, Text, Image, Pressable, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Button from '../components/Button';
import { useEffect } from 'react';
import axios from 'axios';


const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const [newUser, setNewUser] = useState([]);
	const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState(null);

    useEffect(() => {
		register
	},[]);

	

    const register = async() =>  {
        try {
            const response = await axios.post(`http://127.0.0.1:8000/$(user)`, newUser)
            console.log("POST request: ", response.data)
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Create Account</Text>
                    <Text style={styles.headerSubtitle}>Connect with your friend today!</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>User Name</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="Enter your User Name"
                            placeholderTextColor={COLORS.black}
                            keyboardType="ascii-capable"
                            style={styles.input}
                        />
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email address</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="Enter your email address"
                            placeholderTextColor={COLORS.black}
                            keyboardType="email-address"
                            style={styles.input}
                        />
                    </View>
                </View>

                

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="Enter your password"
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={!isPasswordShown}
                            style={styles.input}
                        />
                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={styles.eyeIcon}
                        >
                            <Ionicons 
                                name={isPasswordShown ? "eye-off" : "eye"} 
                                size={24} 
                                color={COLORS.black} 
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />
                    <Text>I agree to the terms and conditions</Text>
                </View>

                <Button
                    title="Sign Up"
                    filled
                    style={styles.signupButton}
                />

                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>Or Sign up with</Text>
                    <View style={styles.divider} />
                </View>

                <View style={styles.socialLoginContainer}>
                    <TouchableOpacity
                        onPress={() => console.log('Pressed')}
                        style={styles.socialButton}
                    >
                        <Image
                            source={require('../assets/facebook.png')}
                            style={styles.socialIcon}
                            resizeMode="contain"
                        />
                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log('Pressed')}
                        style={styles.socialButton}
                    >
                        <Image
                            source={require('../assets/google.png')}
                            style={styles.socialIcon}
                            resizeMode="contain"
                        />
                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Already have an account</Text>
                    <Pressable onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginLink}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    innerContainer: {
        flex: 1,
        marginHorizontal: 22,
    },
    headerContainer: {
        marginVertical: 22,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 12,
        color: COLORS.black,
    },
    headerSubtitle: {
        fontSize: 16,
        color: COLORS.black,
    },
    inputContainer: {
        marginBottom: 12,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: '400',
        marginVertical: 8,
    },
    inputWrapper: {
        width: '100%',
        height: 48,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 22,
    },
    input: {
        width: '100%',
    },
    mobileCodeInput: {
        width: '10%',
        borderRightWidth: 10,
        borderRightColor: COLORS.grey,
        height: '100%',
    },
    mobileNumberInput: {
        width: '100%',
    },
    eyeIcon: {
        position: 'absolute',
        right: 12,
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginVertical: 6,
    },
    checkbox: {
        marginRight: 8,
    },
    signupButton: {
        marginTop: 18,
        marginBottom: 4,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.grey,
        marginHorizontal: 10,
    },
    dividerText: {
        fontSize: 14,
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 52,
        borderWidth: 1,
        borderColor: COLORS.grey,
        marginRight: 4,
        borderRadius: 10,
    },
    socialIcon: {
        height: 36,
        width: 36,
        marginRight: 8,
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 22,
    },
    loginText: {
        fontSize: 16,
        color: COLORS.black,
    },
    loginLink: {
        fontSize: 16,
        color: COLORS.primary,
        fontWeight: 'bold',
        marginLeft: 6,
    },
});

export default Signup;
