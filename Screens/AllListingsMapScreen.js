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
          latitude: res.latitude,
          longitude: res.longitude,
        };
        locationArr.push(newObj);
        if (locationArr.length === route.params.length)
          setLocation(locationArr);
      });
    });
  }, []);
  console.log(location, "<<<<F<<<<<<location ling 25");

  // const arr = ["M1 4NT", "M28 7XH", "M1 5WW", "M1 7ED", "M1 6LT"];
  // arr.map((postcode) => {
  //   getLocation(postcode).then((res) => {
  //     console.log(res, "<<<<<<<<<<<<res");
  //     return res;
  //   });
  // });

  return (
    <View>
      <Text>MapForAllListings</Text>
      <ListingMapTest location={location} />
    </View>
  );
};

export default AllListingsMapScreen;
