import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const RatingStars = ({ num }) => {
  const [starArr, setStarArr] = useState([]);
  const star =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png";

  const numArr = [];
  useEffect(() => {
    for (let i = 1; i <= num; i++) {
      numArr.push(i);
      if (numArr.length === num) setStarArr(numArr);
    }
  }, []);
  if (starArr.length === 0) return null;
  else
    return (
      <View style={styles.customRatingBarStyle}>
        {starArr.map((item) => (
          <Image
            key={item}
            style={styles.starImageStyle}
            source={{ uri: star }}
          />
        ))}
      </View>
    );
};

const styles = StyleSheet.create({
  customRatingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
  },
  starImageStyle: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
});
export default RatingStars;
