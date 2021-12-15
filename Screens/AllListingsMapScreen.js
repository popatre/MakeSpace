import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import ListingMapTest from "../Components/ListingMapTest";
import { getLocation } from "../utils/apiRequests";

const AllListingsMapScreen = ({ route }) => {
  const [location, setLocation] = useState([]);
  useEffect(() => {
    let locationArr = [];
    route.params.map((obj) => {
      getLocation(obj.location.postcode).then((res) => {
        const newObj = {
          id: obj._id,
          name: obj.title,
          price: obj.price,
          size: obj.size,
          spaceRating: obj.spaceRating,
          latitude: res.latitude,
          longitude: res.longitude,
        };
        locationArr.push(newObj);
        setLocation(locationArr);
        // if (locationArr.length === route.params.length) {
        //   console.log(location, "<<<<<<<<<locationARr");
        // }
      });
    });
  }, []);

  return (
    <View>
      <ListingMapTest location={location} />
    </View>
  );
};

export default AllListingsMapScreen;
