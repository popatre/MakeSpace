import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState("");
  return (
    <View>
      <View>
        <Text>HomeScreen</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder="Postcode"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
        <Button
          title="Browse"
          onPress={() => {
            navigation.navigate("Spaces");
          }}
        />
      </View>
      <View>
        <Button title="Make a space" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
  },
});

export default HomeScreen;
