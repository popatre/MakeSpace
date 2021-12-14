import React, { useState, useEffect, useContext } from "react";
import { Paragraph, Dialog, Portal, Provider } from "react-native-paper";
import { UserContext } from "../context/User";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  ImageBackground,
  Button,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import ReviewModal from "../Components/ReviewModal";
import { getSingleListingById, deleteListingById } from "../utils/apiRequests";

const SingleListScreen = ({ route, navigation }) => {
  const [openContact, setOpenContact] = useState(false);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [listing, setListing] = useState({});
  const [visible, setVisible] = useState(false);
  const { user } = useContext(UserContext);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  const { id, setUserListings } = route.params;

  const handleOwnerRequest = () => {
    navigation.navigate("UserProfile", { owner: listing.owner });
  };
  const handleDelete = () => {
    deleteListingById(id).then(() => {
      navigation.navigate("MyListings");
      setUserListings((prevListings) => {
        return prevListings.filter((listing) => listing._id !== id);
      });
      console.log("deleted in front");
    });
  };

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
    const image = {
      uri: "https://www.transparenttextures.com/patterns/old-map.png",
    };
    return (
      <Provider>
        <ScrollView>
          <View>
            <Image
              style={{ width: "100%", height: 300 }}
              source={{
                uri: "https://cdn.britannica.com/42/91642-050-332E5C66/Keukenhof-Gardens-Lisse-Netherlands.jpg",
              }}
            />
          </View>
          <ImageBackground
            source={image}
            resizeMode="repeat"
            style={styles.image}
          >
            <View>
              <View>
                <Text style={styles.title}>{listing.title}</Text>
              </View>
              <View>
                <View>
                  <Text style={styles.text}>
                    Location: {listing.location.city}{" "}
                    {listing.location.postcode}
                  </Text>
                </View>
                <View>
                  <Text style={styles.text}>
                    Space Rating: {listing.spaceRating}
                  </Text>
                </View>
              </View>
              <View>
                <View>
                  <TouchableOpacity onPress={handleOwnerRequest}>
                    <Text style={styles.text}>Owner: {listing.owner}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.text}>Price/Hour: {listing.price}</Text>
                </View>
                <View>
                  <Text style={styles.text}>Size: {listing.size}</Text>
                </View>

                <View style={styles.amens}>
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
                <View style={styles.descContainer}>
                  <Text style={styles.desc}>{listing.description}</Text>
                </View>
              </View>
              <View style={styles.mapView}>
                <TouchableOpacity
                  style={styles.mapButton}
                  onPress={() => {
                    navigation.navigate("SingleSpaceOnMap", locationObj);
                  }}
                >
                  <Text style={styles.mapButtonText}>View on map</Text>

                  <FontAwesome5 name="map-marked-alt" size={24} color="white" />
                </TouchableOpacity>
              </View>

              <View style={styles.bottomRow}>
                <Button title="Reviews" />
                <Modal visible={openReviewModal} animationType="slide">
                  <ReviewModal
                    setOpenReviewModal={setOpenReviewModal}
                    listing={listing}
                  />
                </Modal>
                {listing.owner !== user ? (
                  <Button
                    title="Write a review"
                    onPress={() => setOpenReviewModal(true)}
                  />
                ) : null}
                <Button
                  title="Contact details"
                  // onPress={() => setOpenContact(!openContact)}
                  onPress={showDialog}
                />
              </View>
              <View>
                <Portal>
                  <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Contact</Dialog.Title>
                    <Dialog.Content>
                      <Paragraph>
                        {listing.contactDetails.emailAddress}
                      </Paragraph>
                      <Paragraph>
                        Tel: {listing.contactDetails.phoneNumber}
                      </Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                      <Button title="Done" onPress={hideDialog} />
                    </Dialog.Actions>
                  </Dialog>
                </Portal>
              </View>

              {/* {!!openContact ? (
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
                            ) : null} */}
            </View>
            {listing.owner === user ? (
              <View style={styles.deleteRow}>
                <TouchableOpacity
                  onPress={handleDelete}
                  style={styles.deleteButton}
                >
                  <Text style={styles.buttonText}>Delete Listing</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </ImageBackground>
        </ScrollView>
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginVertical: 8,
    marginHorizontal: 20,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "red",
    width: "40%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
  title: {
    fontSize: 24,
    marginVertical: 21,
    marginHorizontal: 10,
    width: "90%",
    fontWeight: "bold",
    textAlign: "center",
  },
  amens: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
    marginLeft: 10,
    marginBottom: 30,
  },
  desc: {
    fontSize: 17,
    lineHeight: 35,
    textAlign: "center",
    marginHorizontal: 12,
    fontWeight: "600",
  },
  descContainer: {
    marginBottom: 20,
    // borderWidth: 1,
    paddingVertical: 30,
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 8 },
    shadowColor: "#333",
    shadowOpacity: 0.5,
  },
  image: {
    // flex: 1,
    justifyContent: "center",
    // width: 500,
    // height: 600,
    opacity: 1,
    backgroundColor: "white",
  },
  mapButton: {
    marginVertical: 20,
    flexDirection: "row",

    justifyContent: "center",
    backgroundColor: "#0782F9",
    width: "40%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  mapButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    marginRight: 10,
  },
  mapView: { justifyContent: "center", alignItems: "center" },
  bottomRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginVertical: 10,
    backgroundColor: "white",
    // shadowOffset: { width: 1, height: 3 },
    shadowColor: "#333",
    shadowOpacity: 0.1,
    paddingVertical: 15,
    marginTop: 30,
  },
  deleteRow: {
    marginTop: 20,
    marginBottom: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SingleListScreen;
