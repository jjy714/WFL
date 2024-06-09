import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LoginContext } from '../Functions/LoginProvider';

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={styles.separator} />
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('HomePage')}
      >
        <Ionicons name="home-outline" size={24} color="#000" />
        <Text style={styles.drawerItemText}>Return Home</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  drawerItemText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default CustomDrawerContent;
