import React, { useState, useEffect } from "react";
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
    FlatList,
    ImageBackground,
} from "react-native";

import {
    getUserById,
    getUserByUsername,
    patchUser,
    getListingsByUsername,
} from "../utils/apiRequests";
import ListingCard from "../Components/ListingCard";

const UserViewScreen = ({ route, navigation }) => {
    const { owner } = route.params;
    const [userProfile, setUserProfile] = useState({});
    const [userListings, setUserListings] = useState([]);

    useEffect(() => {
        getUserByUsername(owner).then((user) => {
            setUserProfile(user);
        });
    }, [owner]);

    const handleListings = () => {
        getListingsByUsername(userProfile.username).then((listings) => {
            setUserListings(listings);
        });
    };
    const img = {
        uri: "https://png.pngitem.com/pimgs/s/56-564988_top-backgrounds-textured-png-transparent-png.png",
    };

    const userTitle = "View " + userProfile.displayName + "'s listings";
    return (
        <ImageBackground source={img} resizeMode="cover" style={styles.image}>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.rightContainer}>
                    <Image
                        style={{
                            width: 200,
                            height: 200,
                            borderRadius: 10,
                            marginLeft: 5,
                        }}
                        source={{
                            uri: userProfile.avatar,
                        }}
                    />
                </View>
                <View style={styles.leftContainer}>
                    <Text style={styles.title}>Display Name:</Text>
                    <Text style={styles.labelText}>
                        {userProfile.displayName}{" "}
                    </Text>

                    <Text style={styles.title}>Username:</Text>
                    <Text style={styles.labelText}>{userProfile.username}</Text>
                </View>
            </View>
            <View>
                <Button onPress={handleListings} title={userTitle} />
            </View>
            <View style={styles.userListings}>
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
                                images={item.images[0]}
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </ImageBackground>
    );
};

export default UserViewScreen;

const styles = StyleSheet.create({
    labelText: { fontSize: 16, marginBottom: 7 },
    title: { fontSize: 15, fontWeight: "bold", marginBottom: 3 },
    leftContainer: { flex: 0.6, marginTop: 10 },
    rightContainer: { flex: 0.8, marginTop: 10 },
    image: { flex: 1 },
});
