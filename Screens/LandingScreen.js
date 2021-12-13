import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, TextInput, Button, StyleSheet } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { UserContext } from "../context/User";
import { getUserById } from "../utils/apiRequests";

const LandingScreen = ({ navigation }) => {
    const { setUser } = useContext(UserContext);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                getUserById(uid).then((user) => {
                    setUser(user.username);
                });
                navigation.navigate("Home");
            }
        });
        return unsubscribe;
    }, []);
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Image
                style={styles.logo}
                source={{
                    uri: "https://images.squarespace-cdn.com/content/5fa28350d56dca07ddad836a/1614793909356-DJY7UQUU2VZTAFP6KB9J/88-1+Make+Space+Logo+%28Black%29.png?format=1500w&content-type=image%2Fpng",
                }}
            />
            <Button
                title="Login"
                onPress={() => {
                    navigation.navigate("Login");
                }}
            />
            <Button
                title="Sign Up"
                onPress={() => {
                    navigation.navigate("SignUp");
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
    },
});

export default LandingScreen;
