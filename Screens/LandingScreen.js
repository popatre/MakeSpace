import React, { useState } from "react";
import { View, Text, Image, TextInput, Button, StyleSheet } from "react-native";

const LandingScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://images.squarespace-cdn.com/content/5fa28350d56dca07ddad836a/1614793909356-DJY7UQUU2VZTAFP6KB9J/88-1+Make+Space+Logo+%28Black%29.png?format=1500w&content-type=image%2Fpng",
        }}
      />
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Button
        title="Sign Up"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
});

export default LandingScreen;
