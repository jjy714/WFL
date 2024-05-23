import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useContext } from "react";
import { LoginContext } from "./Functions/LoginProvider";

import Title from "./screens/Title";
import Question1 from "./screens/Questions/Question1";
import Question2 from "./screens/Questions/Question2";
import Question3 from "./screens/Questions/Question3";
import Question4 from "./screens/Questions/Question4";
import Question5 from "./screens/Questions/Question5";
import Result from "./screens/Questions/Result";
import Login from "./screens/Drawer/Login";
import Settings from "./screens/Drawer/Settings";
import Signup from "./screens/Drawer/Signup";
import RestaurantList from "./screens/RestaurantList";
import PersonalComponent from "./components/PersonalComponent";
import History from "./screens/Drawer/History";
import Logout from "./components/Logout";
import recommendation from "./screens/Questions/recommendation";




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
      <Stack.Screen name="Recommendation" component={recommendation} options={{hedaerShown:false}}/>
    </Stack.Navigator>
  );
}


function MyDrawer() {
    const { isLoggedIn } = useContext(LoginContext);

    return (
      <Drawer.Navigator initialRouteName="Home" >
        {/* <PersonalComponent/> */}
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
        
        {isLoggedIn ? (
        <Drawer.Screen 
          name="Logout" 
          component={Logout}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="log-out-outline" color={color} size={size} />
            ),
            drawerLabel: 'Logout',
            onPress: Logout,
          }} 
        />
      ) : (
        <Drawer.Screen 
          name="Login" 
          component={Login} 
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="log-in-outline" color={color} size={size} />
            ),
          }} 
        />
      )}
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
          name="History" 
          component={History} 
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="history" color={color} size={size} />
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

