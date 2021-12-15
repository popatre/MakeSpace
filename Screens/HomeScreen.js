import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CalendarComp from "../Components/Calendar";

const HomeScreen = ({ navigation }) => {
  const image = {
    uri: "https://www.countryandtownhouse.co.uk/wp-content/uploads/2019/06/Hot-Desk-Space.jpg",
  };
  const [location, setLocation] = useState("");
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View>
        <View style={styles.container}>
          <Text style={styles.titleText}>Welcome to Make Space</Text>
          <Text style={styles.subText}>
            Enter an area to start searching for spaces
          </Text>
          <TextInput
            style={styles.inputContainer}
            placeholder="City / Area"
            placeholderTextColor="grey"
            value={location}
            onChangeText={(text) => setLocation(text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Spaces", location);
            }}
          >
            <Text style={styles.buttonText}>Browse Spaces</Text>
          </TouchableOpacity>

          <View>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => {
                navigation.navigate("PostListing");
              }}
            >
              <Text style={styles.buttonText}>Make a Space</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    width: "60%",
    padding: 15,
    borderRadius: 14,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    // width: 500,
    // height: 600,
    opacity: 0.9,
  },
  titleText: {
    textAlign: "center",
    fontSize: 28,
    marginTop: 0,
    fontWeight: "bold",
    textShadowOffset: { width: 1, height: 3 },
    textShadowColor: "white",
    textShadowRadius: 3,
  },
  subText: {
    textAlign: "center",
    fontSize: 21,
    fontWeight: "700",
    marginTop: 40,
    width: "85%",
    lineHeight: 25,
    marginBottom: 25,
    color: "black",
    textShadowOffset: { width: 1, height: 3 },
    textShadowColor: "white",
    textShadowRadius: 3,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
  button: {
    backgroundColor: "#0782F9",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  button2: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    paddingHorizontal: 41,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
});

export default HomeScreen;
