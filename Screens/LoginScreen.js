import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/User";
import { getUserById } from "../utils/apiRequests";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
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

import { auth } from "../firebase";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                getUserById(uid).then((user) => {
                    setUser(user.username);
                });

                navigation.navigate("Home");
            }
        });
        return unsubscribe;
    }, []);

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCred) => {
                const user = userCred.user;
            })
            .catch((error) => alert(error.message));
    };
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                ></TextInput>
                <TextInput
                    placeholder="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                ></TextInput>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

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

// export default withFormik({
//   mapPropsToValues: () => ({ email: "", password: "" }),
//   validationSchema: (props) =>
//     yup.object().shape({
//       email: yup.string().email().required(),
//       password: yup.string().min(16).required,
//     }),
// })(LoginScreen);
