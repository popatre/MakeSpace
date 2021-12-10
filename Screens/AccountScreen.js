import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import ProfileCard from "../Components/ProfileCard";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const AccountScreen = ({ navigation }) => {
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigation.navigate("Landing");
        });
    };
    return (
        <View>
            <ProfileCard />
            <Button
                title="My Listings"
                onPress={() => {
                    navigation.navigate("MyListings");
                }}
            />
            <Button
                title="My Bookings"
                onPress={() => {
                    navigation.navigate("MyBookings");
                }}
            />
            <Button title="Sign Out" onPress={handleSignOut} />
        </View>
    );
};

export default AccountScreen;
