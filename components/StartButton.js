import { StyleSheet, View, TouchableOpacity, Text} from "react-native";



const StartButton = ({onPress}) => {

    
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding : 1,
    marginBottom: 30,
    backgroundColor: "#f2bb66", // 배경색상 추가
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#333", // 글자색상 추가
  },
  button: {
    backgroundColor: "#3498db", // 버튼 배경색상 추가
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff", // 버튼 글자색상 추가
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default StartButton