import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import React from "react";
import AccountScreen from "../Screens/AccountScreen";
import UserListingsScreen from "../Screens/UserListingsScreen";
import PostListingScreen from "../Screens/PostListingScreen";
import SingleListScreen from "../Screens/SingleListScreen";
import UserBookingsScreen from "../Screens/UserBookingsScreen";

const Stack = createStackNavigator();

export default function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Account"
                component={AccountScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MyListings"
                component={UserListingsScreen}
                options={{ title: "My Listings" }}
            />
            <Stack.Screen name="PostListing" component={PostListingScreen} />
            <Stack.Screen
                name="SingleList"
                component={SingleListScreen}
                options={{ title: "" }}
            />
            <Stack.Screen name="MyBookings" component={UserBookingsScreen} />
        </Stack.Navigator>
    );
}
