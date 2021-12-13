import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/User";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";

import { postUser, getAllUsers } from "../utils/apiRequests";

import { auth } from "../firebase";
const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [username, setUsername] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const { setUser } = useContext(UserContext);

    const handleSignUp = () => {
        getAllUsers().then((users) => {
            if (users.includes(username)) {
                setUsernameError("Sorry, this username is already in use");
            } else {
                if (password !== ConfirmPassword) {
                    setPasswordError("Both passwords must match");
                } else {
                    setPasswordError("");
                    setUsernameError("");
                    createUserWithEmailAndPassword(auth, email, password)
                        .then((userCred) => {
                            console.log(userCred.user);
                            const uid = userCred.user.uid;
                            postUser({
                                _id: uid,
                                username: username,
                                displayName: displayName,
                                emailAddress: email,
                            }).then(() => {
                                setUser(username);
                                console.log(
                                    username,
                                    "********************************"
                                );
                                navigation.replace("Home");
                            });
                        })
                        .catch((error) => alert(error.message));
                }
            }
        });
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => {
                        setUsername(text);
                        setUsernameError("");
                    }}
                    style={styles.input}
                ></TextInput>
                <Text>{usernameError}</Text>
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
                ></TextInput>
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                ></TextInput>
                <TextInput
                    placeholder="Confirm Password"
                    value={ConfirmPassword}
                    onChangeText={(text) => {
                        setConfirmPassword(text);
                        setPasswordError("");
                    }}
                    style={styles.input}
                    secureTextEntry
                ></TextInput>
                <Text>{passwordError}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
