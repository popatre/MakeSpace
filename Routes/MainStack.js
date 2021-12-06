import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import ListSpacesScreen from "../Screens/ListSpacesScreen";
import SingleListScreen from "../Screens/SingleListScreen";
import React from "react";

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Spaces" component={ListSpacesScreen} />
      <Stack.Screen name="SingleList" component={SingleListScreen} />
    </Stack.Navigator>
  );
}
