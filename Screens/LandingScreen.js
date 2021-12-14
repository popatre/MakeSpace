import React, { useState, useEffect, useContext } from "react";
import {
    View,
    Image,
    Button,
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity,
} from "react-native";
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
    const img = {
        uri: "https://png.pngitem.com/pimgs/s/56-564988_top-backgrounds-textured-png-transparent-png.png",
    };
    return (
        <ImageBackground source={img} resizeMode="cover" style={styles.image}>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Image
                    style={styles.logo}
                    source={{
                        uri: "https://images.squarespace-cdn.com/content/5fa28350d56dca07ddad836a/1614793909356-DJY7UQUU2VZTAFP6KB9J/88-1+Make+Space+Logo+%28Black%29.png?format=1500w&content-type=image%2Fpng",
                    }}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("SignUp");
                    }}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    logo: {
        width: 250,
        height: 250,
    },
    image: { flex: 1 },
    button: {
        backgroundColor: "#0782F9",
        width: "50%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 40,
    },
    buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
});

export default LandingScreen;
