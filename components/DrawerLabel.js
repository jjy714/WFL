import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { AuthContext } from '../contexts/AuthContext';

const DrawerLabel = (props) => {
    const { user, logout } = useContext(AuthContext);

    return (
        <DrawerContentScrollView {...props}>
            {user ? (
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 16, marginBottom: 10 }}>Hello, {user.name}!</Text>
                    <Button title="Logout" onPress={logout} />
                </View>
            ) : (
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 16, marginBottom: 10 }}>Welcome, Guest!</Text>
                    <Button title="Login" onPress={() => props.navigation.navigate('Login')} />
                </View>
            )}
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export default DrawerLabel;
