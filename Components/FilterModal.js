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
    twentyFourChecked,
    setTwentyFourChecked,
}) => {
    // const [accessibleChecked, setAccessibleChecked] = useState(false);
    // const [wcChecked, setWcChecked] = useState(false);
    // const [indoorChecked, setIndoorChecked] = useState(false);
    // const [outdoorChecked, setOutdoorChecked] = useState(false);
    // const [powerChecked, setPowerChecked] = useState(false);
    // const [parkingChecked, setParkingChecked] = useState(false);
    // const [kitchenChecked, setKitchenChecked] = useState(false);
    // const [twentyFourChecked, setTwentyFourChecked] = useState(false);
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
            <View style={styles.modalFilter}>
                <Chip
                    style={
                        !accessibleChecked
                            ? null
                            : { backgroundColor: "#5cb85c" }
                    }
                    selected={accessibleChecked}
                    avatar={
                        <FontAwesome
                            name="wheelchair"
                            size={18}
                            color="black"
                        />
                    }
                    onPress={() => setAccessibleChecked(!accessibleChecked)}
                >
                    Accessible
                </Chip>
                <Chip
                    style={!wcChecked ? null : { backgroundColor: "#5cb85c" }}
                    selected={wcChecked}
                    avatar={<MaterialIcons name="wc" size={19} color="black" />}
                    onPress={() => setWcChecked(!wcChecked)}
                >
                    WC
                </Chip>
                <Chip
                    style={
                        !indoorChecked ? null : { backgroundColor: "#5cb85c" }
                    }
                    selected={indoorChecked}
                    avatar={
                        <MaterialCommunityIcons
                            name="warehouse"
                            size={24}
                            color="black"
                        />
                    }
                    onPress={() => setIndoorChecked(!indoorChecked)}
                >
                    Indoor
                </Chip>
            </View>
            <View style={styles.modalFilter}>
                <Chip
                    style={
                        !outdoorChecked ? null : { backgroundColor: "#5cb85c" }
                    }
                    selected={outdoorChecked}
                    avatar={
                        <FontAwesome5 name="tree" size={18} color="black" />
                    }
                    onPress={() => setOutdoorChecked(!outdoorChecked)}
                >
                    Outdoor
                </Chip>
                <Chip
                    style={
                        !powerChecked ? null : { backgroundColor: "#5cb85c" }
                    }
                    selected={powerChecked}
                    avatar={
                        <Entypo name="power-plug" size={18} color="black" />
                    }
                    onPress={() => setPowerChecked(!powerChecked)}
                >
                    Power
                </Chip>
                <Chip
                    style={
                        !parkingChecked ? null : { backgroundColor: "#5cb85c" }
                    }
                    selected={parkingChecked}
                    avatar={
                        <FontAwesome5 name="parking" size={18} color="black" />
                    }
                    onPress={() => setParkingChecked(!parkingChecked)}
                >
                    Parking
                </Chip>
            </View>
            <View style={styles.modalFilter}>
                <Chip
                    style={
                        !kitchenChecked ? null : { backgroundColor: "#5cb85c" }
                    }
                    selected={kitchenChecked}
                    avatar={
                        <MaterialCommunityIcons
                            name="microwave"
                            size={24}
                            color="black"
                        />
                    }
                    onPress={() => setKitchenChecked(!kitchenChecked)}
                >
                    Kitchen Facilities
                </Chip>
                <Chip
                    style={
                        !twentyFourChecked
                            ? null
                            : { backgroundColor: "#5cb85c" }
                    }
                    selected={twentyFourChecked}
                    avatar={
                        <MaterialCommunityIcons
                            name="hours-24"
                            size={22}
                            color="black"
                        />
                    }
                    onPress={() => setTwentyFourChecked(!twentyFourChecked)}
                >
                    24 Hour Access
                </Chip>
            </View>
        </View>
    );
};

export default FilterModal;

const styles = StyleSheet.create({
    modalFilter: {
        flexDirection: "row",

        marginTop: 70,
        justifyContent: "space-around",
        alignItems: "center",
        height: 30,
    },
    modalClose: { marginTop: 40, alignItems: "center" },
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    filterTitle: {
        fontSize: 23,
    },
});
