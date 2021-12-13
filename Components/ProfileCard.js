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
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PictureChangeModal from "./PictureChangeModal";

import { auth } from "../firebase";
import { onAuthStateChanged, updatePassword } from "firebase/auth";
import { getUserById, patchUser } from "../utils/apiRequests";

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
                // console.log("success! New password is.." + passwordChange);
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
        <View style={{ flexDirection: "row" }}>
            <View>
                <Image
                    style={{ width: 200, height: 200 }}
                    source={{
                        uri: userDetails.avatar,
                    }}
                />
                <TouchableOpacity>
                    <Text
                        style={{ color: "blue" }}
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
            <View>
                <Text>Display Name:{userDetails.displayName} </Text>
                <TouchableOpacity>
                    <Text style={{ color: "blue" }} onPress={handlePress}>
                        edit display name
                    </Text>
                </TouchableOpacity>
                <Modal visible={displayNameModalOpen} animationType="slide">
                    <AntDesign
                        style={{ marginTop: 20 }}
                        name="close"
                        size={24}
                        color="black"
                        onPress={() => setDisplayNameModalOpen(false)}
                    />
                    <Text>Type in your new display name</Text>
                    <TextInput
                        style={styles.inputBox}
                        value={displayName}
                        onChangeText={(text) => setDisplayName(text)}
                    ></TextInput>
                    <Button title="submit" onPress={handleDisplayNameSubmit} />
                </Modal>
                <Text>Username: {userDetails.username}</Text>
                {user === userDetails.username ? (
                    <Text>Email: {userDetails.emailAddress}</Text>
                ) : null}
                <TouchableOpacity>
                    <Text
                        onPress={() => setPasswordModalOpen(true)}
                        style={{ color: "blue" }}
                    >
                        Change password
                    </Text>
                </TouchableOpacity>
                <Modal visible={passwordModalOpen} animationType="slide">
                    <AntDesign
                        style={{ marginTop: 20 }}
                        name="close"
                        size={24}
                        color="black"
                        onPress={() => setPasswordModalOpen(false)}
                    />
                    <Text>Type in your new password</Text>
                    <TextInput
                        style={styles.inputBox}
                        value={passwordChange}
                        onChangeText={(text) => setPasswordChange(text)}
                    ></TextInput>
                    <Button title="submit" onPress={handlePasswordSubmit} />
                </Modal>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputBox: { borderWidth: 1 },
    editText: { fontSize: 12 },
});

export default ProfileCard;
