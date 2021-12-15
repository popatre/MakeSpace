import React, { useState, useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
    View,
    TouchableOpacity,
    Button,
    StyleSheet,
    FlatList,
    Touchable,
    Modal,
    Text,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import ListingCard from "../Components/ListingCard";
import SingleListScreen from "./SingleListScreen";
import spaces from "../TempData";
import FilterModal from "../Components/FilterModal";
import { getAllListings } from "../utils/apiRequests";
import { ActivityIndicator, Colors } from "react-native-paper";

const ListSpacesScreen = ({ route, navigation }) => {
    const cityFilter = route.params;
    const [sort, setSort] = useState(undefined);
    const [listing, setListing] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    const [accessibleChecked, setAccessibleChecked] = useState(undefined);
    const [wcChecked, setWcChecked] = useState(undefined);
    const [indoorChecked, setIndoorChecked] = useState(undefined);
    const [outdoorChecked, setOutdoorChecked] = useState(undefined);
    const [powerChecked, setPowerChecked] = useState(undefined);
    const [parkingChecked, setParkingChecked] = useState(undefined);
    const [kitchenChecked, setKitchenChecked] = useState(undefined);
    const [_24HourAccessChecked, set_24HourAccessChecked] = useState(undefined);
    const [smallChecked, setSmallChecked] = useState(undefined);
    const [mediumChecked, setMediumChecked] = useState(undefined);
    const [largeChecked, setLargeChecked] = useState(undefined);
    const [order, setOrder] = useState("desc");
    const [price, setPrice] = useState(9999);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllListings(
            sort,
            wcChecked,
            powerChecked,
            accessibleChecked,
            indoorChecked,
            outdoorChecked,
            parkingChecked,
            kitchenChecked,
            _24HourAccessChecked,
            smallChecked,
            mediumChecked,
            largeChecked,
            order,
            price
        ).then((res) => {
            if (cityFilter !== "") {
                const filteredListing = res.filter((obj) => {
                    if (obj.location.city.includes(cityFilter)) return obj;
                });
                setListing(filteredListing);
                setIsLoading(false);
            } else {
                setListing(res);
                setIsLoading(false);
            }
        });
    }, [
        sort,
        wcChecked,
        powerChecked,
        accessibleChecked,
        indoorChecked,
        outdoorChecked,
        parkingChecked,
        kitchenChecked,
        _24HourAccessChecked,
        smallChecked,
        mediumChecked,
        largeChecked,
        order,
        price,
    ]);

    //   console.log(listing, "<<<<<listing");
    //   if (listing.length === 0)
    //     return (
    //       <View>
    //         <Text>Loading...</Text>
    //       </View>
    //     );

    //   if (listing.length !== 0) {

    //   }

    // setListing(filteredListing);
    if (isLoading)
        return (
            <View style={styles.loading}>
                <ActivityIndicator
                    style={styles.loading}
                    animating={true}
                    color={Colors.red800}
                />
            </View>
        );
    return (
        <View style={styles.mainContainer}>
            <View style={styles.splitRow}>
                <Modal visible={modalOpen} animationType="slide">
                    <FilterModal
                        accessibleChecked={accessibleChecked}
                        setAccessibleChecked={setAccessibleChecked}
                        setModalOpen={setModalOpen}
                        indoorChecked={indoorChecked}
                        setIndoorChecked={setIndoorChecked}
                        wcChecked={wcChecked}
                        setWcChecked={setWcChecked}
                        outdoorChecked={outdoorChecked}
                        setOutdoorChecked={setOutdoorChecked}
                        powerChecked={powerChecked}
                        setPowerChecked={setPowerChecked}
                        parkingChecked={parkingChecked}
                        setParkingChecked={setParkingChecked}
                        kitchenChecked={kitchenChecked}
                        setKitchenChecked={setKitchenChecked}
                        _24HourAccessChecked={_24HourAccessChecked}
                        set_24HourAccessChecked={set_24HourAccessChecked}
                        setSmallChecked={setSmallChecked}
                        smallChecked={smallChecked}
                        setMediumChecked={setMediumChecked}
                        mediumChecked={mediumChecked}
                        setLargeChecked={setLargeChecked}
                        largeChecked={largeChecked}
                        setPrice={setPrice}
                        price={price}
                    />
                </Modal>
                <TouchableOpacity
                    onPress={() => setModalOpen(true)}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Filter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SpacesOnMap", listing)}
                    style={styles.mapButton}
                >
                    <Text style={styles.buttonText}>
                        <FontAwesome5
                            name="map-marked-alt"
                            size={20}
                            color="white"
                        />
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mapRow}></View>
            <View style={styles.sortRow}>
                <Text style={styles.sortLabel}>Sort By: </Text>
                <RNPickerSelect
                    style={{ ...pickerSelectStyles2 }}
                    placeholder={{
                        label: "Space Rating",
                        value: "spaceRating",
                    }}
                    onValueChange={(value) => setSort(value)}
                    onPress={() => {}}
                    items={[
                        { label: "Price", value: "price", key: "price" },

                        { label: "Title", value: "title", key: "title" },
                    ]}
                />
                <Text style={styles.sortLabel}>Order: </Text>
                <RNPickerSelect
                    style={{ ...pickerSelectStyles2 }}
                    placeholder={{
                        label: `Descending`,
                        value: "desc",
                    }}
                    onValueChange={(value) => setOrder(value)}
                    onPress={() => {}}
                    items={[{ label: "Ascending", value: "asc", key: "asc" }]}
                />
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    keyExtractor={(item) => item._id}
                    data={listing}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("SingleList", {
                                    id: item._id,
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
        </View>
    );
};

export default ListSpacesScreen;

const styles = StyleSheet.create({
    modalFilter: { flex: 1, justifyContent: "center", alignItems: "center" },
    modalClose: { marginTop: 40, alignItems: "center" },
    splitRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    modalLabel: { width: "100%", borderWidth: 2 },
    buttonText: { color: "white", fontWeight: "700", fontSize: 13 },
    button: {
        backgroundColor: "#0782F9",
        width: "29%",
        padding: 7,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    // mapRow: { justifyContent: "center", alignItems: "center" },
    mapButton: {
        backgroundColor: "#0782F9",
        width: "20%",
        padding: 4,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    sortRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        // backgroundColor: "white",
        alignItems: "center",
    },
    sortLabel: { fontSize: 16, marginBottom: 20 },
    listContainer: { flex: 1 },
    mainContainer: { flex: 1 },
    loading: { flex: 0.4, justifyContent: "center", alignItems: "center" },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 13,
        padding: 7,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        backgroundColor: "white",
        color: "black",
        width: "100%",
        marginTop: 10,
        marginBottom: 20,
    },
});
const pickerSelectStyles2 = StyleSheet.create({
    inputIOS: {
        fontSize: 12,
        paddingTop: 8,
        paddingHorizontal: 5,
        paddingBottom: 8,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        backgroundColor: "white",
        color: "black",
        width: 90,
        textAlign: "center",
    },
});
