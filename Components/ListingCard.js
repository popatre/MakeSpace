import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import {
    Nunito_400Regular,
    Nunito_700Bold,
    useFonts,
} from "@expo-google-fonts/nunito";
import { ActivityIndicator, Colors } from "react-native-paper";
const ListingCard = ({ title, location, price, rating, size, images }) => {
    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold,
    });
    if (!fontsLoaded) {
        return (
            <ActivityIndicator
                style={styles.loading}
                animating={true}
                color={Colors.red800}
            />
        );
    }
    return (
        <View style={styles.listContainer}>
            <View style={styles.image}>
                <Image
                    style={{
                        width: 180,
                        height: 200,
                        borderRadius: 10,
                    }}
                    source={{ uri: images }}
                />
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>Location: {location}</Text>
                <Text style={styles.text}>Price p/h: £{price}</Text>
                <Text style={styles.text}>Space Rating: {rating}</Text>
                <Text style={styles.text}>Size: {size}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    listContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        borderRadius: 5,
        elevation: 10,
        backgroundColor: "#fff",
        shadowOffset: { width: 1, height: 8 },
        shadowColor: "#333",
        shadowOpacity: 0.8,
        marginHorizontal: 5,
        marginVertical: 10,

        // marginHorizontal: 20,
    },
    image: { flex: 0.6, marginLeft: 6, marginVertical: 10 },
    info: { flex: 0.45 },
    title: {
        fontSize: 18,
        marginVertical: 21,
        width: "80%",
        textAlign: "center",
        fontFamily: "Nunito_700Bold",
        fontWeight: "bold",
    },
    text: { fontSize: 14, marginVertical: 2, fontFamily: "Nunito_700Bold" },
});

export default ListingCard;
