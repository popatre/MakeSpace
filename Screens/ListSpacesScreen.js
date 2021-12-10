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
    const [sort, setSort] = useState("");
    const [listing, setListing] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    const [accessibleChecked, setAccessibleChecked] = useState(false);
    const [wcChecked, setWcChecked] = useState(false);
    const [indoorChecked, setIndoorChecked] = useState(false);
    const [outdoorChecked, setOutdoorChecked] = useState(false);
    const [powerChecked, setPowerChecked] = useState(false);
    const [parkingChecked, setParkingChecked] = useState(false);
    const [kitchenChecked, setKitchenChecked] = useState(false);
    const [twentyFourChecked, setTwentyFourChecked] = useState(false);

    useEffect(() => {
        getAllListings(sort).then((res) => {
            // console.log(res);
            setListing(res);
        });
    }, [sort]);

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
                        twentyFourChecked={twentyFourChecked}
                        setTwentyFourChecked={setTwentyFourChecked}
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
                <RNPickerSelect
                    placeholder={{
                        label: "Sort by",
                        value: null,
                    }}
                    onValueChange={(value) => setSort(value)}
                    onPress={() => {}}
                    items={[
                        { label: "price", value: "price", key: "price" },
                        { label: "size", value: "size", key: "size" },
                        {
                            label: "rating",
                            value: "placeRating",
                            key: "placeRating",
                        },
                        { label: "title", value: "title", key: "title" },
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
                                navigation.navigate("SingleList", item);
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
