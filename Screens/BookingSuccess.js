import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

const BookingSuccess = () => {
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <Text style={styles.title}>Thanks for your booking!</Text>
                <Text style={styles.subTitle}>
                    The owner will be in contact to confirm shortly.
                </Text>
            </View>
        </ImageBackground>
    );
};
const image = {
    uri: "https://png.pngitem.com/pimgs/s/56-564988_top-backgrounds-textured-png-transparent-png.png",
};
export default BookingSuccess;

const styles = StyleSheet.create({
    container: { flex: 0.8, justifyContent: "center", alignItems: "center" },
    title: { fontSize: 24, fontWeight: "bold", marginVertical: 20 },
    subTitle: { fontSize: 16 },
    image: { flex: 1 },
});
