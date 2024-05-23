import { useContext } from "react";
import { LoginContext } from "../Functions/LoginProvider";
import { View, Text, Button, StyleSheet} from "react-native";


function PersonalComponent(props) {
    const { isLoggedIn, username, updateLogin } = useContext(LoginContext);
  
    const handleLogout = () => {
      updateLogin(false);
    };
  
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.drawerHeader}>
          <Ionicons name="person-circle-outline" size={80} color="gray" />
          {isLoggedIn ? (
            <Text style={styles.username}>{username}</Text>
          ) : (
            <Text style={styles.username}>Guest</Text>
          )}
        </View>
        <Button title="Logout" onPress={handleLogout} disabled={!isLoggedIn} />
        {/* Render the rest of the drawer items */}
        {props.children}
      </View>
    );
  }

export default PersonalComponent;


const styles = StyleSheet.create({
    drawerHeader: {
      backgroundColor: '#f4f4f4',
      padding: 30,
      alignItems: 'center',
    },
    username: {
      marginTop: 10,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });