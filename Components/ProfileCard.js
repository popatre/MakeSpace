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

import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getUserById, patchUser } from "../utils/apiRequests";

const ProfileCard = () => {
    const [userDetails, setUserDetails] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [displayName, setDisplayName] = useState("");
    const { user } = useContext(UserContext);
    const handlePress = () => {
        setModalOpen(true);
    };
    const handleSubmit = () => {
        onAuthStateChanged(auth, (user) => {
            const uid = user.uid;
            const update = { displayName };
            patchUser(update, uid).then((user) => {
                setUserDetails(user);
                setModalOpen(false);
                setDisplayName("");
            });
        });
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
                        uri: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.sbcc.sg/wp-content/themes/healthway/images/user-default.png",
                    }}
                />
            </View>
            <View>
                <Text>Display Name:{userDetails.displayName} </Text>
                <Button onPress={handlePress} title="edit display name" />
                <Modal visible={modalOpen} animationType="slide">
                    <AntDesign
                        style={{ marginTop: 20 }}
                        name="close"
                        size={24}
                        color="black"
                        onPress={() => setModalOpen(false)}
                    />
                    <Text>Type in your new display name</Text>
                    <TextInput
                        style={styles.inputBox}
                        value={displayName}
                        onChangeText={(text) => setDisplayName(text)}
                    ></TextInput>
                    <Button title="submit" onPress={handleSubmit} />
                </Modal>
                <Text>Username: {userDetails.username}</Text>
                {user === userDetails.username ? (
                    <Text>Email: {userDetails.emailAddress}</Text>
                ) : null}
                <TouchableOpacity>
                    <Text style={{ color: "blue" }}>Change password</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputBox: { borderWidth: 1 },
});

export default ProfileCard;
