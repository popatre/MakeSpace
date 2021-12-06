import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainStack from "./MainStack";

const Drawer = createDrawerNavigator();

export default function Nav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Main" component={MainStack} />
    </Drawer.Navigator>
  );
}
