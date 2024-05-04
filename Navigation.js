import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Title from "./screens/Title";
import Question1 from "./screens/Question1";
import Question2 from "./screens/Question2";
import Question3 from "./screens/Question3";
import Question4 from "./screens/Question4";
import Question5 from "./screens/Question5";
import Result from "./screens/Result";

const Stack = createStackNavigator();

function StackScreen() {
  
  
  return (

      <Stack.Navigator initialRouteName="Title">
        <Stack.Screen name="Home" component={Title} />
        <Stack.Screen name="Question1" component={Question1} />
        <Stack.Screen name="Question2" component={Question2} />
        <Stack.Screen name="Question3" component={Question3} />
        <Stack.Screen name="Question4" component={Question4} />
        <Stack.Screen name="Question5" component={Question5} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>

	);
}

function Navigation() {
	return (
		<NavigationContainer>
			<StackScreen />
		</NavigationContainer>
	);
}

export default Navigation;
