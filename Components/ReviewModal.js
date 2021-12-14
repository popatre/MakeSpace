import React, { useState, useContext } from "react";
import * as yup from "yup";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Formik } from "formik";
import { AntDesign } from "@expo/vector-icons";
import StarRating from "./StarRating";
import { patchListingById } from "../utils/apiRequests";

const ReviewSchema = yup.object({
  body: yup.string().required().min(10),
});

export default function ReviewModal({
  setOpenReviewModal,
  setReviewsLength,
  username,
  listing,
}) {
  const [value, setValue] = useState("");
  const [defaultRating, setDefaultRating] = useState(0);

  const reviewHandler = ({ rating, body }) => {
    let totalStars = 0;
    let totalReviews = listing.reviews.length + 1;
    listing.reviews.map((review) => {
      totalStars += review.SpaceRating;
    });

    totalStars += rating;
    const averageRating = (totalStars / totalReviews).toFixed(2);

    const newReview = {
      username: username,
      ownerRating: 5,
      SpaceRating: rating,
      Body: body,
    };

    const updatedReviewArr = [...listing.reviews, newReview];

    patchListingById(listing._id, {
      spaceRating: averageRating,
      reviews: updatedReviewArr,
    });
  };
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={ReviewSchema}
        initialValues={{
          rating: "",
          body: "",
        }}
        onSubmit={(values, actions) => {
          if (defaultRating === 0) alert("please rate");
          else {
            alert("Thanks for your feedback!");
            setOpenReviewModal(false);
            setReviewsLength((prev) => prev + 1);
            values.rating = defaultRating;
            reviewHandler(values);
            actions.resetForm();
          }
        }}
      >
        {(props) => (
          <View style={styles.review}>
            <View style={styles.modalClose}>
              <AntDesign
                name="close"
                size={24}
                color="black"
                onPress={() => setOpenReviewModal(false)}
              />
            </View>
            <View style={styles.container}>
              <StarRating
                defaultRating={defaultRating}
                setDefaultRating={setDefaultRating}
              />

              <Text style={styles.errorText}>
                {props.touched.rating && props.errors.rating}
              </Text>
              <Text style={styles.review}>Leave your Review</Text>
              <TextInput
                style={styles.body}
                multiline
                placeholder="Write your review here"
                onChangeText={props.handleChange("body")}
                value={props.values.body}
                onBlur={props.handleBlur("body")}
              />
              <Text style={styles.errorText}>
                {props.touched.body && props.errors.body}
              </Text>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonStyle}
                onPress={props.handleSubmit}
              >
                <Text style={styles.buttonTextStyle}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  modalClose: { marginTop: 40, alignItems: "center" },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  review: {
    marginTop: 30,
    padding: 8,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  rating: {
    height: 30,
    borderWidth: 1,
    marginBottom: 50,
  },
  body: {
    padding: 10,
    width: "80%",
    maxWidth: "80%",
    borderWidth: 1,
    height: 120,
  },
  buttonStyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
    padding: 15,
    backgroundColor: "#8ad24e",
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
  },
});
