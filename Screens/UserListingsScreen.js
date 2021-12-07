import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ListingCard from "../Components/ListingCard";

const UserListingsScreen = ({ navigation }) => {
  const userListings = [
    {
      _id: { $oid: "61adf562bacbe7ff1dfb7f29" },
      title: "Dance studio",
      location: { city: "Manchester", postcode: "M1 6FT" },
      owner: "Paul Dickinson",
      price: 150,
      spaceRating: 5,
      size: "M",
      amenities: {
        power: true,
        accessible: true,
        parking: false,
        indoor: true,
        outdoor: false,
        WC: true,
        kitchen: true,
        "24HourAccess": "false",
      },
      contactDetails: {
        phoneNumber: "07856697251",
        emailAddress: "paul.dickinson@gmail.com",
      },
      description:
        "This dance studio in the heart of Manchester is an ideal space for groups to gather for community practice and entertainment. Kept to a high standard of cleanliness and with numerous mirrors on the boundary walls, this is perfect for an array of entertaining activities.",
      reviews: [],
      images:
        "https://upload.wikimedia.org/wikipedia/commons/0/02/Typical_suburban_backyard.jpg",
    },
  ];

  return (
    <View>
      <Text>UserListings</Text>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PostListing");
          }}
        >
          <Text>Add a listing</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          keyExtractor={(item) => item._id["$oid"]}
          data={userListings}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SingleList", item);
              }}
            >
              <ListingCard
                title={item.title}
                location={item.location.city}
                price={item.price}
                rating={item.spaceRating}
                size={item.size}
                images={item.images}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default UserListingsScreen;
