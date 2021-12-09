import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import ListingMapTest from "../Components/ListingMapTest";
import { getLocation } from "../utils/apiRequests";

const AllListingsMapScreen = ({ route }) => {
  return (
    <View>
      <Text>MapForAllListings</Text>
      {/* <ListingMapTest location={location} /> */}
    </View>
  );
};

export default AllListingsMapScreen;
