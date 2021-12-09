import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import SingleListingMap from "../Components/ListingMapTest";
import ListingMap from "../Components/ListingMap";
import { getLocation } from "../utils/apiRequests";

const SingleListingMapScreen = ({ route }) => {
  const { id, name, postcode, size, spaceRating, price } = route.params;
  const [location, setLocation] = useState([]);

  useEffect(() => {
    getLocation(postcode).then((res) => {
      const parsedRes = JSON.parse(res);
      setLocation([
        {
          id: id,
          name: name,
          size: size,
          price: price,
          spaceRating: spaceRating,
          latitude: parsedRes.latitude,
          longitude: parsedRes.longitude,
        },
      ]);
    });
  }, [postcode]);
  return (
    <View>
      <Text>MapForAllListings</Text>
      <SingleListingMap location={location} />
    </View>
  );
};

export default SingleListingMapScreen;
