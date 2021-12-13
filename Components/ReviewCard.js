import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import RatingStars from "./RatingStars";

const ReviewCard = ({ review }) => {
  return (
    <View style={styles.reviewCardContainer}>
      <View style={styles.ratingBar}>
        <Text style={styles.smallText}>
          {review.username}: <RatingStars num={review.SpaceRating} />
        </Text>
      </View>
      <View>
        <Text style={styles.text}>{review.Body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewCardContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  ratingBar: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
  text: {
    fontSize: 16,
    color: "#343a40",
  },
  smallText: {
    fontSize: 12,
    color: "#f48c06",
  },
});

export default ReviewCard;
