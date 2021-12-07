import React, { useState, useEffect } from "react";
// import {
//     getAuth,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     onAuthStateChanged,
// } from "firebase/auth";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { auth } from "../firebase";
const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  //     const navigation = useNavigation();
  //     useEffect(() => {
  //         const unsubscribe = onAuthStateChanged(auth, (user) => {
  //             if (user) {
  //                 navigation.navigate("home");
  //             }
  //         });
  //         return unsubscribe;
  //     }, []);

  // const handleSignUp = () => {
  //     createUserWithEmailAndPassword(auth, email, password)
  //         .then((userCred) => {
  //             const user = userCred.user;
  //             console.log("registered with ", user);
  //         })
  //         .catch((error) => alert(error.message));
  // };
  // const handleLogin = () => {
  //     signInWithEmailAndPassword(auth, email, password)
  //         .then((userCred) => {
  //             const user = userCred.user;
  //             console.log(user);
  //         })
  //         .catch((error) => alert(error.message));
  // };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Display Name"
          value={displayName}
          onChangeText={(text) => setDisplayName(text)}
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          secureTextEntry
        ></TextInput>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Confirm Password"
          value={ConfirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          style={styles.input}
        ></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default SignUpScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: { width: "80%" },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonOutlineText: { color: "#0782F9", fontWeight: "700", fontSize: 16 },
  buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
});
