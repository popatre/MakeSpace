import { setNestedObjectValues } from "formik";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const StarRating = ({ defaultRating, setDefaultRating }) => {
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const starImageFilled =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png";
  const starImageCorner =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png";

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => {
                setDefaultRating(item);
              }}
            >
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImageFilled }
                    : { uri: starImageCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          How was your experience with this place
        </Text>
        <CustomRatingBar />
        <Text style={styles.textStyle}>
          {defaultRating} / {Math.max.apply(null, maxRating)}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    justifyContent: "center",
    textAlign: "center",
  },
  titleText: {
    padding: 8,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  textStyle: {
    textAlign: "center",
    fontSize: 23,
    color: "#000",
    marginTop: 15,
  },
  customRatingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
});
