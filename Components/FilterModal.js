import { Chip } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import {
    FontAwesome,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome5,
    Entypo,
} from "@expo/vector-icons";

import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ImageBackground,
} from "react-native";

const FilterModal = ({
    setModalOpen,
    accessibleChecked,
    setAccessibleChecked,
    indoorChecked,
    setIndoorChecked,
    setWcChecked,
    wcChecked,
    outdoorChecked,
    setOutdoorChecked,
    powerChecked,
    setPowerChecked,
    parkingChecked,
    setParkingChecked,
    kitchenChecked,
    setKitchenChecked,
    _24HourAccessChecked,
    set_24HourAccessChecked,
    smallChecked,
    setSmallChecked,
    mediumChecked,
    setMediumChecked,
    largeChecked,
    setLargeChecked,
    price,
    setPrice,
}) => {
    const bgimg = {
        uri: "https://png.pngitem.com/pimgs/s/56-564988_top-backgrounds-textured-png-transparent-png.png",
    };
    return (
        <ImageBackground source={bgimg} resizeMode="cover" style={styles.image}>
            <View>
                <View style={styles.modalClose}>
                    <AntDesign
                        name="close"
                        size={24}
                        color="black"
                        onPress={() => setModalOpen(false)}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.filterTitle}>
                        Please select your requirements
                    </Text>
                </View>

                <View>
                    <Text style={styles.sizeLabel}>Size</Text>
                    <View style={styles.modalFilter}>
                        <Chip
                            style={
                                !smallChecked
                                    ? null
                                    : { backgroundColor: "#5cb85c" }
                            }
                            selected={!smallChecked ? false : true}
                            onPress={() => {
                                !smallChecked
                                    ? setSmallChecked("S")
                                    : setSmallChecked(undefined);
                            }}
                        >
                            S (
                            <FontAwesome5
                                name="less-than"
                                size={10}
                                color="grey"
                            />{" "}
                            6m
                            <Text
                                style={{
                                    fontSize: 11,
                                    lineHeight: 18,
                                }}
                            >
                                2
                            </Text>
                            )
                        </Chip>
                        <Chip
                            style={
                                !mediumChecked
                                    ? null
                                    : { backgroundColor: "#5cb85c" }
                            }
                            selected={!mediumChecked ? false : true}
                            onPress={() => {
                                !mediumChecked
                                    ? setMediumChecked("M")
                                    : setMediumChecked(undefined);
                            }}
                        >
                            M ( 6 - 10m
                            <Text
                                style={{
                                    fontSize: 11,
                                    lineHeight: 18,
                                }}
                            >
                                2
                            </Text>
                            )
                        </Chip>
                        <Chip
                            style={
                                !largeChecked
                                    ? null
                                    : { backgroundColor: "#5cb85c" }
                            }
                            selected={!largeChecked ? false : true}
                            onPress={() => {
                                !largeChecked
                                    ? setLargeChecked("L")
                                    : setLargeChecked(undefined);
                            }}
                        >
                            L (
                            <FontAwesome5
                                name="greater-than"
                                size={10}
                                color="grey"
                            />{" "}
                            10m
                            <Text
                                style={{
                                    fontSize: 11,
                                    lineHeight: 18,
                                }}
                            >
                                2
                            </Text>
                            )
                        </Chip>
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.priceLabel}>
                        Please enter your maximum budget
                    </Text>

                    <TextInput
                        style={styles.priceInput}
                        value={price}
                        onChangeText={(text) => setPrice(text)}
                        placeholder="Cost per hour"
                    ></TextInput>
                </View>
                <View>
                    <Text style={styles.priceLabel}>
                        Please select your amenities
                    </Text>
                    <View style={styles.modalFilter}>
                        <Chip
                            style={
                                !accessibleChecked
                                    ? null
                                    : { backgroundColor: "#5cb85c" }
                            }
                            selected={!accessibleChecked ? false : true}
                            avatar={
                                <FontAwesome
                                    name="wheelchair"
                                    size={18}
                                    color="black"
                                />
                            }
                            onPress={() => {
                                !accessibleChecked
                                    ? setAccessibleChecked(true)
                                    : setAccessibleChecked(undefined);
                            }}
                        >
                            Accessible
                        </Chip>
                        <Chip
                            style={
                                !wcChecked
                                    ? null
                                    : { backgroundColor: "#5cb85c" }
                            }
                            selected={!wcChecked ? false : true}
                            avatar={
                                <MaterialIcons
                                    name="wc"
                                    size={19}
                                    color="black"
                                />
                            }
                            onPress={() => {
                                !wcChecked
                                    ? setWcChecked(true)
                                    : setWcChecked(undefined);
                            }}
                        >
                            WC
                        </Chip>
                        <Chip
                            style={
                                !indoorChecked
                                    ? null
                                    : { backgroundColor: "#5cb85c" }
                            }
                            selected={!indoorChecked ? false : true}
                            avatar={
                                <MaterialCommunityIcons
                                    name="warehouse"
                                    size={24}
                                    color="black"
                                />
                            }
                            onPress={() => {
                                !indoorChecked
                                    ? setIndoorChecked(true)
                                    : setIndoorChecked(undefined);
                            }}
                        >
                            Indoor
                        </Chip>
                    </View>
                    <View style={styles.modalFilter}>
                        <Chip
                            style={
                                !outdoorChecked
                                    ? null
                                    : { backgroundColor: "#5cb85c" }
                            }
                            selected={!outdoorChecked ? false : true}
                            avatar={
                                <FontAwesome5
                                    name="tree"
                                    size={18}
                                    color="black"
                                />
                            }
                            onPress={() => {
                                !outdoorChecked
                                    ? setOutdoorChecked(true)
                                    : setOutdoorChecked(undefined);
                            }}
                        >
                            Outdoor
                        </Chip>
                        <Chip
                            style={
                                !powerChecked
                                    ? null
                                    : { backgroundColor: "#5cb85c" }
                            }
                            selected={!powerChecked ? false : true}
                            avatar={
                                <Entypo
                                    name="power-plug"
                                    size={18}
                                    color="black"
                                />
                            }
                            onPress={() => {
                                !powerChecked
                                    ? setPowerChecked(true)
                                    : setPowerChecked(undefined);
                            }}
                        >
                            Power
                        </Chip>
                        <Chip
                            style={
                                !parkingChecked
                                    ? null
                                    : { backgroundColor: "#5cb85c" }
                            }
                            selected={!parkingChecked ? false : true}
                            avatar={
                                <FontAwesome5
                                    name="parking"
                                    size={18}
                                    color="black"
                                />
                            }
                            onPress={() => {
                                !parkingChecked
                                    ? setParkingChecked(true)
                                    : setParkingChecked(undefined);
                            }}
                        >
                            Parking
                        </Chip>
                    </View>
                    <View style={styles.modalFilter}>
                        <Chip
                            style={
                                !kitchenChecked
                                    ? null
                                    : { backgroundColor: "#5cb85c" }
                            }
                            selected={!kitchenChecked ? false : true}
                            avatar={
                                <MaterialCommunityIcons
                                    name="microwave"
                                    size={24}
                                    color="black"
                                />
                            }
                            onPress={() => {
                                !kitchenChecked
                                    ? setKitchenChecked(true)
                                    : setKitchenChecked(undefined);
                            }}
                        >
                            Kitchen Facilities
                        </Chip>
                        <Chip
                            style={
                                !_24HourAccessChecked
                                    ? null
                                    : { backgroundColor: "#5cb85c" }
                            }
                            selected={!_24HourAccessChecked ? false : true}
                            avatar={
                                <MaterialCommunityIcons
                                    name="hours-24"
                                    size={22}
                                    color="black"
                                />
                            }
                            onPress={() => {
                                !_24HourAccessChecked
                                    ? set_24HourAccessChecked(true)
                                    : set_24HourAccessChecked(undefined);
                            }}
                        >
                            24 Hour Access
                        </Chip>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

export default FilterModal;

const styles = StyleSheet.create({
    modalFilter: {
        flexDirection: "row",
        marginBottom: 30,

        marginTop: 20,
        justifyContent: "space-around",
        alignItems: "center",
        height: 30,
    },
    modalClose: { marginTop: 40, alignItems: "center" },
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    filterTitle: {
        fontSize: 23,
        marginBottom: 20,
        fontWeight: "bold",
    },
    sizeLabel: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 20,
    },
    priceLabel: {
        fontSize: 18,
        marginBottom: 30,

        textAlign: "center",
        fontWeight: "bold",
    },
    priceInput: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: "grey",
        marginBottom: 40,
    },
    image: {
        flex: 1,
    },
});
