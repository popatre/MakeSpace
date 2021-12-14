import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import LandingScreen from "../Screens/LandingScreen";
import Nav from "./drawer";

const Stack = createStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Landing"
                component={LandingScreen}
            />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen
                name="Home"
                component={Nav}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;

const styles = StyleSheet.create({});
