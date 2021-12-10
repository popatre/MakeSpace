import React, { useState } from "react";
import * as yup from "yup";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Formik } from "formik";

const ReviewSchema = yup.object({
  rating: yup
    .string()
    .required()
    .test("isNumber", "Must be a Number from 1-5", (val) => {
      const num = Number(val);

      if (num > 0 && num <= 5) {
        return num;
      }
    }),

  body: yup.string().required().min(10),
});

export default function ReviewModal({ setOpenReviewModal }) {
  return (
    <View>
      <Formik
        validationSchema={ReviewSchema}
        initialValues={{
          rating: "",
          body: "",
        }}
        onSubmit={(values, actions) => {
          actions.resetForm();
        }}
      >
        {(props) => (
          <View style={styles.review}>
            <Text>Rate your stay!</Text>
            <TextInput
              style={styles.rating}
              placeholder='Rating, between 1 - 5'
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              onBlur={props.handleBlur("rating")}
            />
            <Text>Leave your Review</Text>
            <TextInput
              style={styles.body}
              multiline
              placeholder='Write your review here'
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />

            <Button title='Submit' color='green' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  review: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  rating: {
    height: 30,
    borderWidth: 1,
    marginBottom: 50,
  },
  body: {
    borderWidth: 1,
    height: 90,
  },
});
