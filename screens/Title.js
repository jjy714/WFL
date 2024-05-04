import { View, Text, StyleSheet, StatusBar } from "react-native";
import StartButton from "../components/StartButton";

export default function Title({navigation}) {
  
    return (
  
      <View style={styles.container}>
        <Text style={styles.title}> WFL</Text>
        <Text style={styles.HomeText} > What's For Lunch?</Text>
        <StartButton onPress={() => navigation.navigate('Question1')}/>
        <StatusBar style="auto" />
      </View>
    );
  }
  


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2bb66',
      alignContent:"center",
      
    },
    title:{
      fontSize : 140,
      fontWeight: "bold",
      alignSelf: "center",
      padding: 1,
      marginTop: 200
    },
    HomeText: {
      fontSize: 30,
      textAlign: "center",
    },
    NextBottom: {
      backgroundColor: "Blue",
      padding: 10,
      marginTop: "20%",
      width: "50%",
      alignSelf: "center",
      borderRadius: 10,
    },
    BottomText: {
      fontSize: 15,
      color: 'white',
      textAlign: "center",
    }
  })