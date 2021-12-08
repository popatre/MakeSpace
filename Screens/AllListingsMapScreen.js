import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import ListingMap from "../Components/ListingMap";

const AllListingsMapScreen = () => {
  return (
    <View>
      <Text>MapForAllListings</Text>
      <ListingMap />
    </View>
  );
};

export default AllListingsMapScreen;
