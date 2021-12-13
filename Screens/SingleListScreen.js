import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
} from "react-native";
import {
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome,
    FontAwesome5,
    Entypo,
} from "@expo/vector-icons";

const SingleListScreen = ({ route, navigation }) => {
    const handleOwnerRequest = () => {
        navigation.navigate("UserProfile", { owner: owner });
    };
    const {
        images,
        title,
        location,
        spaceRating,
        owner,
        price,
        size,
        amenities,
        description,
        reviews,
    } = route.params;

    const locationObj = {
        id: route.params._id,
        name: title,
        size: size,
        price: price,
        spaceRating: spaceRating,
        postcode: route.params.location.postcode,
    };

    return (
        <ScrollView>
            <View>
                {/* <Image style={{ width: 400, height: 400 }} source={{ uri: images }} /> */}
            </View>
            <View>
                <View>
                    <Text>{title}</Text>
                </View>
                <View>
                    <View>
                        <Text>
                            Location :{location.city} {location.postcode}
                        </Text>
                    </View>
                    <View>
                        <Text>Space Rating: {spaceRating}, 4.7</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <TouchableOpacity onPress={handleOwnerRequest}>
                            <Text>Owner :{owner}</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>Space Rating: 4.7</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>Price/Hour: {price}</Text>
                    </View>
                    <View>
                        <Text>Size: {size}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <MaterialCommunityIcons
                            name="hours-24"
                            size={24}
                            color={
                                amenities["24HourAccess"]
                                    ? "#32CD32"
                                    : "#DCDCDC"
                            }
                        />
                        <MaterialIcons
                            name="wc"
                            size={24}
                            color={amenities.WC ? "#32CD32" : "#DCDCDC"}
                        />
                        <FontAwesome
                            name="wheelchair"
                            size={24}
                            color={amenities.accessible ? "#32CD32" : "#DCDCDC"}
                        />
                        <FontAwesome5
                            name="house-user"
                            size={24}
                            color={amenities.indoor ? "#32CD32" : "#DCDCDC"}
                        />
                        <FontAwesome5
                            name="tree"
                            size={24}
                            color={amenities.outdoor ? "#32CD32" : "#DCDCDC"}
                        />
                        <FontAwesome5
                            name="parking"
                            size={24}
                            color={amenities.parking ? "#32CD32" : "#DCDCDC"}
                        />
                        <Entypo
                            name="power-plug"
                            size={24}
                            color={amenities.power ? "#32CD32" : "#DCDCDC"}
                        />
                        <MaterialCommunityIcons
                            name="microwave"
                            size={24}
                            color={amenities.kitchen ? "#32CD32" : "#DCDCDC"}
                        />
                    </View>
                    <View>
                        <Text>Description: {description}</Text>
                    </View>
                </View>
                <View>
                    <Button
                        title="View on map"
                        onPress={() => {
                            navigation.navigate(
                                "SingleSpaceOnMap",
                                locationObj
                            );
                        }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-around",
                    }}
                >
                    <Button title="Reviews" />
                    <Button title="Contact details" />
                </View>
            </View>
        </ScrollView>
    );
};

export default SingleListScreen;
