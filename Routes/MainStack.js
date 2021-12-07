import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "../Screens/LandingScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import HomeScreen from "../Screens/HomeScreen";
import PostListingScreen from "../Screens/PostListingScreen";
import ListSpacesScreen from "../Screens/ListSpacesScreen";
import SingleListScreen from "../Screens/SingleListScreen";
import React from "react";

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Landing"
        component={LandingScreen}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PostListing" component={PostListingScreen} />
      <Stack.Screen name="Spaces" component={ListSpacesScreen} />
      <Stack.Screen name="SingleList" component={SingleListScreen} />
    </Stack.Navigator>
  );
}
