import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/User";
import {
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
    StyleSheet,
    Modal,
    TextInput,
    ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PictureChangeModal from "./PictureChangeModal";

import { auth } from "../firebase";
import { onAuthStateChanged, updatePassword } from "firebase/auth";
import { getUserById, patchUser } from "../utils/apiRequests";
const img = {
    uri: "https://png.pngitem.com/pimgs/s/56-564988_top-backgrounds-textured-png-transparent-png.png",
};
const ProfileCard = () => {
    const [userDetails, setUserDetails] = useState({});
    const [displayNameModalOpen, setDisplayNameModalOpen] = useState(false);
    const [passwordModalOpen, setPasswordModalOpen] = useState(false);
    const [pictureModalOpen, setPictureModalOpen] = useState(false);
    const [displayName, setDisplayName] = useState("");
    const [passwordChange, setPasswordChange] = useState("");
    const { user } = useContext(UserContext);
    const handlePress = () => {
        setDisplayNameModalOpen(true);
    };
    const handleDisplayNameSubmit = () => {
        onAuthStateChanged(auth, (user) => {
            const uid = user.uid;
            const update = { displayName };
            patchUser(update, uid).then((user) => {
                setUserDetails(user);
                setDisplayNameModalOpen(false);
                setDisplayName("");
            });
        });
    };

    const handleChangePicture = () => {};

    const userFirebase = auth.currentUser;
    const handlePasswordSubmit = () => {
        updatePassword(userFirebase, passwordChange)
            .then(() => {
                setPasswordModalOpen(false);
                setPasswordChange("");
            })
            .catch((error) => {});
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            const uid = user.uid;
            getUserById(uid).then((user) => {
                setUserDetails(user);
            });
        });
        return unsubscribe;
    }, [user]);
    return (
        <View
            style={{
                flexDirection: "row",
                marginTop: 10,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <View style={styles.leftContainer}>
                <Image
                    style={{
                        width: 200,
                        height: 200,
                        borderRadius: 10,
                        marginLeft: 5,
                    }}
                    source={{
                        uri: userDetails.avatar,
                    }}
                />
                <TouchableOpacity style={styles.button3}>
                    <Text
                        style={styles.buttonText}
                        onPress={() => setPictureModalOpen(true)}
                    >
                        change profile picture
                    </Text>
                </TouchableOpacity>
                <Modal visible={pictureModalOpen} animationType="slide">
                    <PictureChangeModal
                        setUserDetails={setUserDetails}
                        setModal={setPictureModalOpen}
                    />
                </Modal>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>Display Name:</Text>
                <Text style={styles.labelText}>{userDetails.displayName} </Text>
                <TouchableOpacity style={styles.button3}>
                    <Text style={styles.buttonText} onPress={handlePress}>
                        edit display name
                    </Text>
                </TouchableOpacity>
                <Modal visible={displayNameModalOpen} animationType="slide">
                    <AntDesign
                        style={{ marginTop: 60, textAlign: "center" }}
                        name="close"
                        size={34}
                        color="black"
                        onPress={() => setDisplayNameModalOpen(false)}
                    />
                    <ImageBackground
                        source={img}
                        resizeMode="cover"
                        style={styles.modalContainer}
                    >
                        <Text style={styles.modalText}>
                            Please enter your new display name
                        </Text>
                        <TextInput
                            style={styles.inputBox}
                            value={displayName}
                            onChangeText={(text) => setDisplayName(text)}
                        ></TextInput>
                        <TouchableOpacity
                            style={styles.button2}
                            onPress={handleDisplayNameSubmit}
                        >
                            <Text style={styles.buttonText2}>Submit</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </Modal>
                <Text style={styles.title}>Username: </Text>
                <Text style={styles.labelText}>{userDetails.username}</Text>
                <Text style={styles.title}>Email:</Text>
                <Text style={styles.labelText}>{userDetails.emailAddress}</Text>

                <TouchableOpacity style={styles.button3}>
                    <Text
                        style={styles.buttonText}
                        onPress={() => setPasswordModalOpen(true)}
                    >
                        Change password
                    </Text>
                </TouchableOpacity>
                <Modal visible={passwordModalOpen} animationType="slide">
                    <AntDesign
                        style={{ marginTop: 60, textAlign: "center" }}
                        name="close"
                        size={34}
                        color="black"
                        onPress={() => setPasswordModalOpen(false)}
                    />
                    <ImageBackground
                        source={img}
                        resizeMode="cover"
                        style={styles.modalContainer}
                    >
                        <Text style={styles.modalText}>
                            Please type your new password
                        </Text>
                        <TextInput
                            style={styles.inputBox}
                            value={passwordChange}
                            onChangeText={(text) => setPasswordChange(text)}
                        ></TextInput>
                        <TouchableOpacity
                            style={styles.button2}
                            onPress={handlePasswordSubmit}
                        >
                            <Text style={styles.buttonText2}>Submit</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </Modal>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputBox: {
        borderWidth: 1,
        width: "80%",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
    },
    editText: { fontSize: 12 },
    leftContainer: { flex: 0.6 },
    rightContainer: { flex: 0.5 },
    labelText: { fontSize: 16, marginBottom: 7 },
    title: { fontSize: 15, fontWeight: "bold", marginBottom: 3 },
    button3: {
        // backgroundColor: "#f0ad4e",
        borderWidth: 1,
        borderColor: "#0275d8",
        width: "90%",
        padding: 2,
        borderRadius: 13,
        alignItems: "center",
        marginBottom: 4,

        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: { color: "#0275d8", fontWeight: "500", fontSize: 12 },
    modalText: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 20,
        fontWeight: "bold",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button2: {
        backgroundColor: "#0782F9",
        width: "50%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 60,
    },
    buttonText2: { color: "white", fontWeight: "700", fontSize: 16 },
});

export default ProfileCard;
