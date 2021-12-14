import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import ProfileCard from "../Components/ProfileCard";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Ionicons } from "@expo/vector-icons";
const img = {
    uri: "https://png.pngitem.com/pimgs/s/56-564988_top-backgrounds-textured-png-transparent-png.png",
};
const AccountScreen = ({ navigation }) => {
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigation.navigate("Landing");
        });
    };
    return (
        <ImageBackground source={img} resizeMode="cover" style={styles.image}>
            <View>
                <ProfileCard />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate("MyListings");
                        }}
                    >
                        <Text style={styles.buttonText}>My Listings</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate("MyBookings");
                        }}
                    >
                        <Text style={styles.buttonText}>My Bookings</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button2}
                        onPress={handleSignOut}
                    >
                        <Text style={styles.buttonText2}>
                            Sign Out{" "}
                            <Ionicons
                                name="exit-outline"
                                size={22}
                                color="#0275d8"
                            />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
    buttonText2: { color: "#0275d8", fontWeight: "700", fontSize: 16 },
    button: {
        backgroundColor: "#0782F9",
        width: "50%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 40,
    },
    button2: {
        // backgroundColor: "#0275d8",
        borderWidth: 2,
        borderColor: "#0275d8",
        width: "40%",
        padding: 7,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: { justifyContent: "center", alignItems: "center" },
    image: { flex: 1 },
});

export default AccountScreen;
