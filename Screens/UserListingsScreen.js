import React, { useState, useEffect, useContext } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import ListingCard from "../Components/ListingCard";
import { UserContext } from "../context/User";
import { getListingsByUsername } from "../utils/apiRequests";

const UserListingsScreen = ({ navigation }) => {
    const { user } = useContext(UserContext);
    const [userListings, setUserListings] = useState([]);

    useEffect(() => {
        getListingsByUsername(user).then((listings) => {
            setUserListings(listings);
        });
    }, []);

    return (
        <View>
            {!!userListings && (
                <Text style={styles.text}>You currently have no listings.</Text>
            )}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("PostListing");
                    }}
                >
                    <Text style={styles.buttonText}>Add a listing</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    keyExtractor={(item) => item._id["$oid"]}
                    data={userListings}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("SingleList", {
                                    id: item._id,
                                    setUserListings: setUserListings,
                                });
                            }}
                        >
                            <ListingCard
                                title={item.title}
                                location={item.location.city}
                                price={item.price}
                                rating={item.spaceRating}
                                size={item.size}
                                // images={item.images}
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#0782F9",
        width: "50%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 40,
    },
    buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 90,
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default UserListingsScreen;
