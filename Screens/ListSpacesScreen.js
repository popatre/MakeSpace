import React, { useState, useEffect } from "react";

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

const ListSpacesScreen = ({ navigation }) => {
    const [distance, setDistance] = useState("");
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
            order
        ).then((res) => {
            // console.log(res);
            setListing(res);
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
    ]);

    // console.log(smallChecked);

    return (
        <View>
            <View>
                <RNPickerSelect
                    placeholder={{
                        label: "Distance",
                        value: null,
                    }}
                    onValueChange={(value) => setDistance(value)}
                    items={[
                        { label: "1 mile", value: "1", key: 1 },
                        { label: "5 miles", value: "5", key: 5 },
                        { label: "10 miles", value: "10", key: 10 },
                        { label: "30 miles", value: "30", key: 30 },
                        { label: "50 miles", value: "50", key: 50 },
                        { label: "100 miles", value: "100", key: 100 },
                    ]}
                />
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
                    />
                </Modal>
                <Button title="Filter" onPress={() => setModalOpen(true)} />
            </View>
            <View>
                <Button
                    title="View on map"
                    onPress={() => {
                        navigation.navigate("SpacesOnMap", listing);
                    }}
                />
                <Text>Sort By: </Text>
                <RNPickerSelect
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
                <Text>Order: </Text>
                <RNPickerSelect
                    placeholder={{
                        label: `Descending`,
                        value: "desc",
                    }}
                    onValueChange={(value) => setOrder(value)}
                    onPress={() => {}}
                    items={[
                        { label: "Ascending", value: "asc", key: "asc" },

                        // { label: "Descending", value: "desc", key: "desc" },
                    ]}
                />
            </View>
            <View>
                <FlatList
                    keyExtractor={(item) => item._id}
                    data={listing}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("SingleList", item._id);
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

export default ListSpacesScreen;

const styles = StyleSheet.create({
    modalFilter: { flex: 1, justifyContent: "center", alignItems: "center" },
    modalClose: { marginTop: 40, alignItems: "center" },
});
