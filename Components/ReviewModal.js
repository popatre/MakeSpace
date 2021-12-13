import React, { useState } from "react";
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

const ReviewSchema = yup.object({
  // rating: yup.string().required().min(1),
  // rating: yup.number().positive().required(),
  // .test("isNumber", "Must be a Number from 1-5", (val) => {
  //   const num = Number(val);

  //   if (num > 0 && num <= 5) {
  //     return num;
  //   }
  // }),

  body: yup.string().required().min(10),
});

export default function ReviewModal({ setOpenReviewModal }) {
  const [value, setValue] = useState("");
  const [defaultRating, setDefaultRating] = useState(0);
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
            values.rating = defaultRating;
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
              {/* <Text>Rate your stay!</Text>
              <TextInput
                style={styles.rating}
                placeholder="Rating, between 1 - 5"
                onChangeText={props.handleChange("rating")}
                value={props.values.rating}
                onBlur={props.handleBlur("rating")}
              /> */}
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
    width: "80%",
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
