import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LoginContext } from '../../Functions/LoginProvider';

const History = () => {
    const [history, setHistory] = useState([]);
    const { user, token } = useContext(LoginContext);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/backend/user/history/view/${user.username}`, {
                    headers: {
                        'Authorization': `Token ${token}`, 
                        'Content-Type': 'application/json'
                    }
                });
                setHistory(response.data);
                console.log("Data stored", response.data);
            } catch (error) {
                alert("Log in to view history!");
                console.error(error);
            }
        };

        fetchHistory();
    }, []);

    return (
        <View style={styles.container}>
            {history.length > 0 ? (
                history.map((item, index) => (
                    <View key={index} style={styles.historyItem}>
                        <Text>Answer: {item.answer}</Text>
                        <Text>Result: {item.result}</Text>
                        <Text>Date: {item.created_at}</Text>
                    </View>
                ))
            ) : (
                <Text>No history available.</Text>
            )}
        </View>
    );
};

export default History;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    historyItem: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
    },
});
