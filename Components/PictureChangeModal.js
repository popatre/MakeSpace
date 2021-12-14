import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { onAuthStateChanged } from "firebase/auth";
import { handleUpload } from "../utils/handleUpload";
import { auth } from "../firebase";
import { patchUser } from "../utils/apiRequests";
import { img } from "../baseimg";

import { ProgressBar, Colors } from "react-native-paper";

const PictureChangeModal = ({ setModal, setUserDetails }) => {
    const [image, setImage] = useState(img);
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [uploadText, setUploadText] = useState("Upload Image");
    const url = "data:image/jpeg;base64," + image;

    const handleSubmit = () => {
        onAuthStateChanged(auth, (user) => {
            const uid = user.uid;
            const update = { avatar: downloadUrl };
            patchUser(update, uid).then((user) => {
                setUserDetails(user);
                setModal(false);
            });
        });
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            base64: true,
        });
        if (!result.cancelled) {
            setImage(result.base64);
        }
    };
    return (
        <View>
            <AntDesign
                style={{ marginTop: 60, marginLeft: 20 }}
                name="close"
                size={24}
                color="black"
                onPress={() => setModal(false)}
            />
            <View style={styles.container}>
                <TouchableOpacity onPress={pickImage}>
                    <Image
                        value={image}
                        source={{ uri: "data:image/jpeg;base64," + image }}
                        style={{ width: 250, height: 250 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => {
                        handleUpload(url, setDownloadUrl, setUploadText);
                    }}
                >
                    <Text style={styles.buttonText}>{uploadText}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PictureChangeModal;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 90,
    },
    button: {
        backgroundColor: "#0782F9",
        width: "50%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 40,
    },
    button2: {
        backgroundColor: "#5cb85c",
        width: "50%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 40,
    },
    buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
});
