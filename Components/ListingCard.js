import React from "react";
import { View, Image, Text, FlatList, StyleSheet } from "react-native";

const ListingCard = ({ title, location, price, rating, size, image_url }) => {
  console.log(image_url);
  return (
    <View style={styles.listContainer}>
      <View>
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: image_url }}
        />
      </View>
      <View>
        <Text>Title: {title}</Text>
        <Text>Location: {location}</Text>
        <Text>price: {price}</Text>
        <Text>rating: {rating}</Text>
        <Text>size: {size}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default ListingCard;
