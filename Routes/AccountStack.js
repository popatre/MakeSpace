import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import React from "react";
import AccountScreen from "../Screens/AccountScreen";
import UserListingsScreen from "../Screens/UserListingsScreen";
import SingleListScreen from "../Screens/SingleListScreen";
import UserBookingsScreen from "../Screens/UserBookingsScreen";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="MyListings" component={UserListingsScreen} />
      <Stack.Screen name="SingleList" component={SingleListScreen} />
      <Stack.Screen name="MyBookings" component={UserBookingsScreen} />
    </Stack.Navigator>
  );
}
