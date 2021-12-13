import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  ScrollView,
  Image,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import ReviewModal from "../Components/ReviewModal";
import { getSingleListingById } from "../utils/apiRequests";

const SingleListScreen = ({ route, navigation }) => {
  const [openContact, setOpenContact] = useState(false);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [listing, setListing] = useState({});
  const id = route.params;

  useEffect(() => {
    getSingleListingById(id).then((res) => {
      setListing(res);
    });
  }, [id]);

  if (Object.keys(listing).length === 0)
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  else {
    const locationObj = {
      id: listing._id,
      name: listing.title,
      size: listing.size,
      price: listing.price,
      spaceRating: listing.spaceRating,
      postcode: listing.location.postcode,
    };
    return (
      <ScrollView>
        <View>
          {/* <Image style={{ width: 400, height: 400 }} source={{ uri: images }} /> */}
        </View>
        <View>
          <View>
            <Text>{listing.title}</Text>
          </View>
          <View>
            <View>
              <Text>
                Location :{listing.location.city} {listing.location.postcode}
              </Text>
            </View>
            <View>
              <Text>Space Rating: {listing.spaceRating}</Text>
            </View>
          </View>
          <View>
            <View>
              <Text>Owner :{listing.owner}</Text>
            </View>
            <View>
              <Text>Space Rating: 4.7</Text>
            </View>
          </View>
          <View>
            <View>
              <Text>Price/Hour: {listing.price}</Text>
            </View>
            <View>
              <Text>Size: {listing.size}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="hours-24"
                size={24}
                color={
                  listing.amenities["_24HourAccess"] ? "#32CD32" : "#DCDCDC"
                }
              />
              <MaterialIcons
                name="wc"
                size={24}
                color={listing.amenities.WC ? "#32CD32" : "#DCDCDC"}
              />
              <FontAwesome
                name="wheelchair"
                size={24}
                color={listing.amenities.accessible ? "#32CD32" : "#DCDCDC"}
              />
              <FontAwesome5
                name="house-user"
                size={24}
                color={listing.amenities.indoor ? "#32CD32" : "#DCDCDC"}
              />
              <FontAwesome5
                name="tree"
                size={24}
                color={listing.amenities.outdoor ? "#32CD32" : "#DCDCDC"}
              />
              <FontAwesome5
                name="parking"
                size={24}
                color={listing.amenities.parking ? "#32CD32" : "#DCDCDC"}
              />
              <Entypo
                name="power-plug"
                size={24}
                color={listing.amenities.power ? "#32CD32" : "#DCDCDC"}
              />
              <MaterialCommunityIcons
                name="microwave"
                size={24}
                color={listing.amenities.kitchen ? "#32CD32" : "#DCDCDC"}
              />
            </View>
            <View>
              <Text>Description: {listing.description}</Text>
            </View>
          </View>
          <View>
            <Button
              title="View on map"
              onPress={() => {
                navigation.navigate("SingleSpaceOnMap", locationObj);
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
            <Modal visible={openReviewModal} animationType="slide">
              <ReviewModal setOpenReviewModal={setOpenReviewModal} />
            </Modal>
            <Button
              title="Write a review"
              onPress={() => setOpenReviewModal(true)}
            />

            <Button
              title="Contact details"
              onPress={() => setOpenContact(!openContact)}
            />
          </View>
          {!!openContact ? (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text style={styles.text}>
                {listing.contactDetails.emailAddress}
              </Text>
              <Text style={styles.text}>
                {listing.contactDetails.phoneNumber}
              </Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default SingleListScreen;
