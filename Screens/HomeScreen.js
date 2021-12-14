import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import CalendarComp from "../Components/Calendar";

const HomeScreen = ({ navigation }) => {
    const image = {
        uri: "https://www.countryandtownhouse.co.uk/wp-content/uploads/2019/06/Hot-Desk-Space.jpg",
    };
    const [location, setLocation] = useState("");
    return (
        <View>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            ></ImageBackground>
            <View style={styles.container}>
                <Text style={styles.titleText}>Welcome to Make Space</Text>
                <Text style={styles.subText}>
                    Enter your postcode to start searching for spaces in your
                    area
                </Text>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Postcode"
                    placeholderTextColor="grey"
                    value={location}
                    onChangeText={(text) => setLocation(text)}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("Spaces");
                    }}
                >
                    <Text style={styles.buttonText}>Browse Spaces</Text>
                </TouchableOpacity>

                <View>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={() => {
                            navigation.navigate("PostListing");
                        }}
                    >
                        <Text style={styles.buttonText}>Make a Space</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 2,
        width: "60%",
        padding: 15,
        borderRadius: 14,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        backgroundColor: "white",
    },
    image: {
        flex: 0.5,
        justifyContent: "center",
        width: 500,
        height: 600,
        opacity: 0.4,
    },
    titleText: {
        textAlign: "center",
        fontSize: 28,
        marginTop: 90,
        fontWeight: "bold",
    },
    subText: {
        textAlign: "center",
        fontSize: 17,
        fontWeight: "600",
        marginTop: 30,
        width: "85%",
        lineHeight: 25,
        marginBottom: 25,
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
    button: {
        backgroundColor: "#0782F9",
        width: "50%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 40,
    },
    button2: {
        backgroundColor: "#0782F9",
        width: "100%",
        padding: 15,
        paddingHorizontal: 41,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 40,
    },
});

export default HomeScreen;
