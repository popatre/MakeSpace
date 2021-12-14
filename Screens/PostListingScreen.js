import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import PostingForm from "../Components/PostingForm";

const PostListingScreen = ({ navigation }) => {
  return (
    <View>
      <PostingForm navigation={navigation} />
    </View>
  );
};
export default PostListingScreen;
