import React, { useContext } from "react";
import { View, Text, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { LoginContext } from "../Functions/LoginProvider";
import COLORS from "../constants/colors";

const Logout = () => {
    const { user, updateLogin } = useContext(LoginContext);

    const handleLogout = () => {
        Alert.alert(
            'Confirm',
            'Do you want to logout?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => updateLogin(false) },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Do you want to logout {user.username}?</Text>
                <Text style={styles.headerSubtitle}>You can always log back in! 😁</Text>
                <TouchableOpacity onPress={handleLogout} style={styles.button}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
    },
    headerContainer: {
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    headerSubtitle: {
        fontSize: 16,
        color: COLORS.gray,
        marginBottom: 20,
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default Logout;
