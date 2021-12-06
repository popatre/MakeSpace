import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import ListingCard from "../Components/ListingCard";

const ListSpacesScreen = () => {
  const [distance, setDistance] = useState("");
  const [sort, setSort] = useState("");
  const [listing, setListing] = useState([
    {
      title: "Big Moon",
      location: "M21 5XH",
      price: 20,
      rating: 4.7,
      size: "large",
      image_url:
        "https://image.shutterstock.com/image-photo/nicely-trimmed-front-yard-green-260nw-533390473.jpg",
    },
    {
      title: "Medium Moon",
      location: "M21 5XH",
      price: 20,
      rating: 4.7,
      size: "large",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/0/02/Typical_suburban_backyard.jpg",
    },
    {
      title: "Small Moon",
      location: "M21 5XH",
      price: 20,
      rating: 4.7,
      size: "large",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/0/02/Typical_suburban_backyard.jpg",
    },
  ]);

  return (
    <View>
      <View>
        <RNPickerSelect
          placeholder={{
            label: "Distance",
            value: null,
          }}
          onValueChange={(value) => setDistance(value)}
          items={[
            { label: "1 mile", value: "1", key: 1 },
            { label: "5 miles", value: "5", key: 5 },
            { label: "10 miles", value: "10", key: 10 },
            { label: "30 miles", value: "30", key: 30 },
            { label: "50 miles", value: "50", key: 50 },
            { label: "100 miles", value: "100", key: 100 },
          ]}
        />
        <Button title="Filter" />
      </View>
      <View>
        <Button title="View on map" />
        <RNPickerSelect
          placeholder={{
            label: "Sort by",
            value: null,
          }}
          onValueChange={(value) => setSort(value)}
          items={[
            { label: "price", value: "price", key: "price" },
            { label: "size", value: "size", key: "size" },
          ]}
        />
      </View>
      <View>
        <FlatList
          data={listing}
          renderItem={({ item }) => (
            <ListingCard
              title={item.title}
              location={item.location}
              price={item.price}
              rating={item.rating}
              size={item.size}
              image_url={item.image_url}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ListSpacesScreen;
