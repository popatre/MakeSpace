import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "../Screens/LandingScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import HomeScreen from "../Screens/HomeScreen";
import PostListingScreen from "../Screens/PostListingScreen";
import ListSpacesScreen from "../Screens/ListSpacesScreen";
import AllListingsMapScreen from "../Screens/AllListingsMapScreen";
import SingleListScreen from "../Screens/SingleListScreen";
import SingleListingMapScreen from "../Screens/SingleListingMapScreen";
import React from "react";
import UserViewScreen from "../Screens/UserViewScreen";
import BookingSuccess from "../Screens/BookingSuccess";

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

            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="PostListing" component={PostListingScreen} />
            <Stack.Screen
                name="Spaces"
                component={ListSpacesScreen}
                options={{ title: "" }}
            />
            <Stack.Screen name="SpacesOnMap" component={AllListingsMapScreen} />
            <Stack.Screen name="SingleList" component={SingleListScreen} />
            <Stack.Screen name="UserProfile" component={UserViewScreen} />
            <Stack.Screen name="BookingSuccess" component={BookingSuccess} />

            <Stack.Screen
                name="SingleSpaceOnMap"
                component={SingleListingMapScreen}
            />
        </Stack.Navigator>
    );
}
