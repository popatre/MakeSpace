import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { handleUpload } from "../utils/handleUpload";

const PictureChangeModal = ({ setModal }) => {
    const [image, setImage] = useState(null);
    const url = "data:image/jpeg;base64," + image;

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            base64: true,
        });
        if (!result.cancelled) {
            console.log("noowww in picker");
            setImage(result.base64);
        }
    };
    return (
        <View>
            <AntDesign
                style={{ marginTop: 20 }}
                name="close"
                size={24}
                color="black"
                onPress={() => setModal(false)}
            />
            {image && (
                <Image
                    value={image}
                    source={{ uri: "data:image/jpeg;base64," + image }}
                    style={{ width: 200, height: 200 }}
                />
            )}
            <Button
                onPress={pickImage}
                style={{
                    width: "80%",
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 2,
                }}
                title="Select an image"
            />
            <Button
                onPress={() => handleUpload(url)}
                style={{
                    width: "80%",
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 2,
                }}
                title="Upload Selected Image"
            />

            <Button title="submit" />
        </View>
    );
};

export default PictureChangeModal;

const styles = StyleSheet.create({});
