import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ListingCard = ({ title, location, price, rating, size, images }) => {
    return (
        <View style={styles.listContainer}>
            <View style={styles.image}>
                <Image
                    style={{ width: 180, height: 200 }}
                    source={{ uri: images }}
                />
            </View>
            <View style={styles.info}>
                <Text>Title: {title}</Text>
                <Text>Location: {location}</Text>
                <Text>price: {price}</Text>
                <Text>rating: {rating}</Text>
                <Text>size: {size}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    listContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 6,
        borderRadius: 15,
        elevation: 10,
        backgroundColor: "#fff",
        shadowOffset: { width: 1, height: 8 },
        shadowColor: "#333",
        shadowOpacity: 0.8,
        marginHorizontal: 5,
        marginVertical: 10,
        // marginHorizontal: 20,
    },
    image: { flex: 0.5, marginLeft: 6, marginVertical: 10 },
    info: { flex: 0.5 },
});

export default ListingCard;
