import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { RadioButton, Checkbox } from "react-native-paper";
import { Formik } from "formik";
import * as yup from "yup";
import * as ImagePicker from "expo-image-picker";
import { postListing } from "../utils/apiRequests";
const ListingSchema = yup.object({
    title: yup.string().required().min(5),
    location: yup.object().shape({
        postcode: yup.string().required().min(6),
        postcode: yup.string().required().min(6),
    }),
    contactDetails: yup.object().shape({
        phoneNumber: yup.string().required().min(11),
        emailAddress: yup.string().email().required(),
    }),

    description: yup.string().required().min(20),
    price: yup
        .string()
        .required()
        .test("isNumber", "Must be a number", (val) => {
            return parseInt(val) > 0;
        }),
});
export default function PostingForm() {
    const [image, setImage] = useState(
        "https://toppng.com/uploads/preview/add-camera-icon-icon-add-11553485583calilemiyg.png"
    );
    const [value, setValue] = useState("small");
    const [checked, setChecked] = useState(false);
    const [parkingChecked, setParkingChecked] = useState(false);
    const [powerChecked, setPowerChecked] = useState(false);
    const [accessibleChecked, setAccessibleChecked] = useState(false);
    const [indoorChecked, setIndoorChecked] = useState(false);
    const [outdoorChecked, setOutdoorChecked] = useState(false);
    const [WCChecked, setWCChecked] = useState(false);
    const [kitchenChecked, setKitchenChecked] = useState(false);
    const [twentyFourChecked, setTwentyFourChecked] = useState(false);
    const [imageSelected, setImageSelected] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
        });
        if (!result.cancelled) {
            setImage(result.uri);
            setImageSelected(true);
        }
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <Formik
                    validationSchema={ListingSchema}
                    initialValues={{
                        title: "",
                        location: {
                            city: "",
                            postcode: "",
                        },
                        size: "",
                        price: "",
                        description: "",
                        contactDetails: {
                            phoneNumber: "",
                            emailAddress: "",
                        },

                        amenities: {
                            parking: false,
                            power: false,
                            accessible: false,
                            kitchen: false,
                            indoor: false,
                            outdoor: false,
                            WC: false,
                            _24HourAccess: false,
                        },
                        // image_uri: "",
                    }}
                    onSubmit={(values, actions) => {
                        postListing(values);
                        actions.resetForm();
                    }}
                >
                    {(props) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="title"
                                onChangeText={props.handleChange("title")}
                                value={props.values.title}
                                onBlur={props.handleBlur("title")}
                            />
                            {props.errors.title ? (
                                <Text style={styles.errorText}>
                                    {props.touched.title && props.errors.title}
                                </Text>
                            ) : null}
                            <TextInput
                                style={styles.input}
                                placeholder="city"
                                onChangeText={props.handleChange(
                                    "location.city"
                                )}
                                value={props.values.location.city}
                                onBlur={props.handleBlur("location.city")}
                            />
                            {/* <Text style={styles.errorText}>
                {props.touched.location["postcode"] &&
                  props.errors.location["postcode"]}
              </Text> */}
                            <TextInput
                                style={styles.input}
                                placeholder="postcode"
                                onChangeText={props.handleChange(
                                    "location.postcode"
                                )}
                                value={props.values.location.postcode}
                                onBlur={props.handleBlur("location.postcode")}
                            />
                            <View>
                                <RadioButton.Group
                                    onValueChange={(value) => {
                                        setValue(value);
                                        props.setFieldValue("size", value);
                                    }}
                                    value={value}
                                >
                                    <RadioButton.Item
                                        label="Small"
                                        value="small"
                                    />
                                    <RadioButton.Item
                                        label="Medium"
                                        value="medium"
                                    />
                                    <RadioButton.Item
                                        label="Large"
                                        value="large"
                                    />
                                </RadioButton.Group>
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="Price £"
                                onChangeText={props.handleChange("price")}
                                value={props.values.price}
                                onBlur={props.handleBlur("price")}
                                keyboardType="numeric"
                            />
                            {props.errors.price ? (
                                <Text style={styles.errorText}>
                                    {props.touched.price && props.errors.price}
                                </Text>
                            ) : null}
                            <TextInput
                                multiline={true}
                                numberOfLines={100}
                                style={styles.inputDesc}
                                placeholder="Description"
                                onChangeText={props.handleChange("description")}
                                value={props.values.description}
                                onBlur={props.handleBlur("description")}
                            />
                            {props.errors.description ? (
                                <Text style={styles.errorText}>
                                    {props.touched.description &&
                                        props.errors.description}
                                </Text>
                            ) : null}

                            <TextInput
                                style={styles.input}
                                placeholder="phone number"
                                onChangeText={props.handleChange(
                                    "contactDetails.phoneNumber"
                                )}
                                value={props.values.contactDetails.phoneNumber}
                                onBlur={props.handleBlur(
                                    "contactDetails.phoneNumber"
                                )}
                            />
                            {/* <Text style={styles.errorText}>
  {props.touched.contactDetails.phoneNumber &&
    props.errors.contactDetails.phoneNumber}
</Text> */}

                            <TextInput
                                style={styles.input}
                                placeholder="email"
                                onChangeText={props.handleChange(
                                    "contactDetails.emailAddress"
                                )}
                                value={props.values.contactDetails.emailAddress}
                                onBlur={props.handleBlur(
                                    "contactDetails.emailAddress"
                                )}
                            />
                            <View style={styles.imageContainer}>
                                <TouchableOpacity onPress={pickImage}>
                                    {image && (
                                        <Image
                                            value={props.values.image_uri}
                                            source={{ uri: image }}
                                            style={styles.image}
                                        />
                                    )}
                                </TouchableOpacity>
                            </View>
                            {imageSelected && (
                                <View style={styles.imageButton}>
                                    <TouchableOpacity>
                                        <Text
                                            style={styles.buttonText}
                                            onPress={pickImage}
                                        >
                                            Upload image
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            <Checkbox.Item
                                label="Parking"
                                status={
                                    parkingChecked ? "checked" : "unchecked"
                                }
                                onPress={() => {
                                    setParkingChecked(!parkingChecked);
                                    props.setFieldValue(
                                        "amenities.parking",
                                        !parkingChecked
                                    );
                                }}
                            />
                            <Checkbox.Item
                                label="Power"
                                status={powerChecked ? "checked" : "unchecked"}
                                onPress={() => {
                                    setPowerChecked(!powerChecked);
                                    props.setFieldValue(
                                        "amenities.power",
                                        !powerChecked
                                    );
                                }}
                            />
                            <Checkbox.Item
                                label="accessible"
                                status={
                                    accessibleChecked ? "checked" : "unchecked"
                                }
                                onPress={() => {
                                    setAccessibleChecked(!accessibleChecked);
                                    props.setFieldValue(
                                        "amenities.accessible",
                                        !accessibleChecked
                                    );
                                }}
                            />
                            <Checkbox.Item
                                label="Kitchen"
                                status={
                                    kitchenChecked ? "checked" : "unchecked"
                                }
                                onPress={() => {
                                    setKitchenChecked(!kitchenChecked);
                                    props.setFieldValue(
                                        "amenities.kitchen",
                                        !kitchenChecked
                                    );
                                }}
                            />
                            <Checkbox.Item
                                label="Indoor"
                                status={indoorChecked ? "checked" : "unchecked"}
                                onPress={() => {
                                    setIndoorChecked(!indoorChecked);
                                    props.setFieldValue(
                                        "amenities.indoor",
                                        !indoorChecked
                                    );
                                }}
                            />
                            <Checkbox.Item
                                label="Outdoor"
                                status={
                                    outdoorChecked ? "checked" : "unchecked"
                                }
                                onPress={() => {
                                    setOutdoorChecked(!outdoorChecked);
                                    props.setFieldValue(
                                        "amenities.outdoor",
                                        !outdoorChecked
                                    );
                                }}
                            />
                            <Checkbox.Item
                                label="WC"
                                status={WCChecked ? "checked" : "unchecked"}
                                onPress={() => {
                                    setWCChecked(!WCChecked);
                                    props.setFieldValue(
                                        "amenities.WC",
                                        !WCChecked
                                    );
                                }}
                            />
                            <Checkbox.Item
                                label="24HourAccess"
                                status={
                                    twentyFourChecked ? "checked" : "unchecked"
                                }
                                onPress={() => {
                                    setTwentyFourChecked(!twentyFourChecked);
                                    props.setFieldValue(
                                        "amenities['24HourAccess']",
                                        !twentyFourChecked
                                    );
                                }}
                            />
                            <TouchableOpacity
                                style={styles.subButton}
                                onPress={props.handleSubmit}
                            >
                                <Text style={styles.buttonText}>
                                    Make your Space
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#8A2BE2",
        alignItems: "center",
        justifyContent: "center",
        // height: 700,
    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 15,
    },
    errorText: {
        color: "crimson",
        fontWeight: "bold",
        marginBottom: 0,
        marginTop: 0,
        textAlign: "center",
    },
    inputContainer: {
        width: "80%",
    },
    inputDesc: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 25,
        borderRadius: 10,
        marginVertical: 15,
    },
    imageButton: {
        backgroundColor: "#0782F9",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 30,
    },
    buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
    subButton: {
        backgroundColor: "#0782F9",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 30,
        marginBottom: 50,
    },
    image: {
        width: 190,
        height: 190,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
});
