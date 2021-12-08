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

  useEffect(() => {
    getAllListings().then((res) => {
      console.log(res);
      setListing(res);
    });
  }, []);

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
          <FilterModal setModalOpen={setModalOpen} />
        </Modal>
        <Button title="Filter" onPress={() => setModalOpen(true)} />
      </View>
      <View>
        <Button
          title="View on map"
          onPress={() => {
            navigation.navigate("SpacesOnMap");
          }}
        />
        <RNPickerSelect
          placeholder={{
            label: "Sort by",
            value: null,
          }}
          onValueChange={(value) => setSort(value)}
          items={[
            { label: "price", value: "price", key: "price" },
            { label: "size", value: "size", key: "size" },
          ]}
        />
      </View>
      <View>
        <FlatList
          keyExtractor={(item) => item._id["$oid"]}
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
