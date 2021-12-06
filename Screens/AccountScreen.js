import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import ProfileCard from "../Components/ProfileCard";

const AccountScreen = ({ navigation }) => {
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
      <Button title="Sign Out" />
    </View>
  );
};

export default AccountScreen;
