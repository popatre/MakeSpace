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
import { StyleSheet, Text, View } from "react-native";

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
}) => {
    return (
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
            <View style={styles.container}>
                <Text>Location</Text>
            </View>
            <View style={styles.container}>
                <Text>Size</Text>
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
                        S
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
                        M
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
                        L
                    </Chip>
                </View>
            </View>
            <View style={styles.container}>
                <Text>Price</Text>
            </View>
            <View style={styles.container}>
                <Text>Please select your amenities</Text>
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
                            !wcChecked ? null : { backgroundColor: "#5cb85c" }
                        }
                        selected={!wcChecked ? false : true}
                        avatar={
                            <MaterialIcons name="wc" size={19} color="black" />
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
                            <FontAwesome5 name="tree" size={18} color="black" />
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
                            <Entypo name="power-plug" size={18} color="black" />
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
    );
};

export default FilterModal;

const styles = StyleSheet.create({
    modalFilter: {
        flexDirection: "row",

        marginTop: 50,
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
    },
});
