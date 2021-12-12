import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainStack from "./MainStack";
import AccountStack from "./AccountStack";
import Header from "../Components/Header";
const Drawer = createDrawerNavigator();

export default function Nav() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
                name="Home"
                component={MainStack}
                options={{ headerTitle: () => <Header /> }}
            />
            <Drawer.Screen
                name="Account"
                component={AccountStack}
                options={{ headerTitle: () => <Header /> }}
            />
        </Drawer.Navigator>
    );
}
