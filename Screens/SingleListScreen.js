import React, { useState, useEffect, useContext } from "react";

import { Paragraph, Dialog, Portal, Provider } from "react-native-paper";

import { UserContext } from "../context/User";
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import ReviewModal from "../Components/ReviewModal";

import {
  getSingleListingById,
  deleteListingById,
  patchListingById,
} from "../utils/apiRequests";
import CalendarComp from "../Components/Calendar";
import ReviewCard from "../Components/ReviewCard";
import ImagesSwiper from "react-native-image-swiper";

const SingleListScreen = ({ route, navigation }) => {
  const [reviewsLength, setReviewsLength] = useState(0);
  const [openContact, setOpenContact] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [listing, setListing] = useState({});
  const [visible, setVisible] = useState(false);
  const [markedDates, setMarkedDates] = useState({});
  const [isBooked, setIsBooked] = useState(false);
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
    });
  };
  const handleBooking = () => {
    const newObj = { ...markedDates };

    for (const date in newObj) {
      newObj[date].color = "grey";
    }
    const updatedListing = { bookedDays: [newObj] };
    patchListingById(id, updatedListing).then((res) => {
      setMarkedDates(newObj);
      navigation.replace("BookingSuccess");
    });
  };

  useEffect(() => {
    getSingleListingById(id).then((res) => {
      setListing(res);
      setMarkedDates(res.bookedDays[0]);
    });
  }, [id, isBooked, reviewsLength]);

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
      images: listing.images,
    };
    const image = {
      uri: "https://www.transparenttextures.com/patterns/old-map.png",
    };
    return (
      <Provider>
        <ScrollView>
          <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
              <ImagesSwiper
                images={listing.images}
                autoplay={true}
                autoplayTimeout={2.5}
                showsPagination={true}
                style={{ width: 400, height: 400 }}
              />
            </ScrollView>
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
              <CalendarComp
                listing={listing}
                markedDates={markedDates}
                setMarkedDates={setMarkedDates}
              />
              <TouchableOpacity
                style={styles.mapButton}
                onPress={handleBooking}
              >
                <Text style={styles.buttonText}>Book now</Text>
              </TouchableOpacity>

              <View style={styles.bottomRow}>
                <Button
                  title="Reviews"
                  onPress={() => setOpenReview(!openReview)}
                />
                <Modal visible={openReviewModal} animationType="slide">
                  <ReviewModal
                    setOpenReviewModal={setOpenReviewModal}
                    setReviewsLength={setReviewsLength}
                    username={user}
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
              <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                  <Dialog.Title>Contact</Dialog.Title>
                  <Dialog.Content>
                    <Paragraph>{listing.contactDetails.emailAddress}</Paragraph>
                    <Paragraph>
                      Tel: {listing.contactDetails.phoneNumber}
                    </Paragraph>
                  </Dialog.Content>
                  <Dialog.Actions>
                    <Button title="Done" onPress={hideDialog} />
                  </Dialog.Actions>
                </Dialog>
              </Portal>
              {/* </View> */}
              {!openReview ? null : (
                <View>
                  {listing.reviews.length === 0 ? (
                    <View style={styles.hidden}>
                      <Text style={styles.text}>
                        No reviews yet? Leave the very first one!
                      </Text>
                    </View>
                  ) : (
                    <View>
                      {listing.reviews.map((review) => {
                        return (
                          <View key={review._id}>
                            <ReviewCard review={review} />
                          </View>
                        );
                      })}
                    </View>
                  )}
                </View>
              )}

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
            </View>
          </ImageBackground>
        </ScrollView>
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  hidden: {
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
  },
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
    fontSize: 16,
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
  book: { justifyContent: "center", alignItems: "center" },
  details: { fontSize: 18, marginTop: 20 },
});

export default SingleListScreen;
