import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const AccountScreen = ({ navigation }) => {
  return (
    <View>
      <Text>AccountScreen</Text>
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
    </View>
  );
};

export default AccountScreen;
