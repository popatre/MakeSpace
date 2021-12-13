import * as React from "react";
import { Button, View, Image, StyleSheet } from "react-native";
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
                options={{
                    headerStyle: { backgroundColor: "#f0ad4e" },
                    headerTitle: () => <Header />,
                    headerBackground: () => (
                        <Image
                            style={StyleSheet.absoluteFill}
                            source={{
                                uri: "https://png.pngitem.com/pimgs/s/56-564988_top-backgrounds-textured-png-transparent-png.png",
                            }}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Account"
                component={AccountStack}
                options={{
                    headerTitle: () => <Header />,
                    headerBackground: () => (
                        <Image
                            style={StyleSheet.absoluteFill}
                            source={{
                                uri: "https://png.pngitem.com/pimgs/s/56-564988_top-backgrounds-textured-png-transparent-png.png",
                            }}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}
