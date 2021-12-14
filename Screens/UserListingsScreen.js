import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ListingCard from "../Components/ListingCard";
import { UserContext } from "../context/User";
import { getListingsByUsername } from "../utils/apiRequests";

const UserListingsScreen = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const [userListings, setUserListings] = useState([]);

  useEffect(() => {
    getListingsByUsername(user).then((listings) => {
      setUserListings(listings);
    });
  }, []);

  return (
    <View>
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
                navigation.navigate("SingleList", {
                  id: item._id,
                  setUserListings: setUserListings,
                });
              }}
            >
              <ListingCard
                title={item.title}
                location={item.location.city}
                price={item.price}
                rating={item.spaceRating}
                size={item.size}
                // images={item.images}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default UserListingsScreen;
