import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const ListSpacesScreen = () => {
  const [distance, setDistance] = useState("");
  const [sort, setSort] = useState("");
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
        <Button title="Filter" />
      </View>
      <View>
        <Button title="View on map" />
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
    </View>
  );
};

export default ListSpacesScreen;
