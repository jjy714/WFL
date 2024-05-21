import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';


import Title from "./screens/Title";
import Question1 from "./screens/Question1";
import Question2 from "./screens/Question2";
import Question3 from "./screens/Question3";
import Question4 from "./screens/Question4";
import Question5 from "./screens/Question5";
import Result from "./screens/Result";
import Login from "./screens/Login";
import Settings from "./screens/Settings";
import Signup from "./screens/Signup";
import Home from "./App";
import RestaurantList from "./screens/RestaurantList";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function StackScreen() {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen name="HomePage" component={Title} options={{ headerShown: false }} />
      <Stack.Screen name="Question1" component={Question1} options={{ headerShown: false }} />
      <Stack.Screen name="Question2" component={Question2} options={{ headerShown: false }}/>
      <Stack.Screen name="Question3" component={Question3} options={{ headerShown: false }} />
      <Stack.Screen name="Question4" component={Question4} options={{ headerShown: false }}/>
      <Stack.Screen name="Question5" component={Question5} options={{ headerShown: false }}/>
      <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
      <Stack.Screen name="Recommendation" component={RestaurantList} options={{hedaerShown:false}}/>
    </Stack.Navigator>
  );
}


function MyDrawer() {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
          name="Home" 
          component={StackScreen} 
          options={{
            headerTransparent: true, 
            headerTitle: '', 
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            )
          }} 
        />
        
        <Drawer.Screen 
          name="Login" 
          component={Login} 
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="log-in-outline" color={color} size={size} />
            ),
          }} 
        />
        <Drawer.Screen 
          name="Register" 
          component={Signup} 
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-add-outline" color={color} size={size} />
            ),
          }} 
        />
        <Drawer.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" color={color} size={size} />
            ),
          }} 
        />
      </Drawer.Navigator>
    );
  }

function Navigation() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default Navigation;
