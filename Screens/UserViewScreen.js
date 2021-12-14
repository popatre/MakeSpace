import React, { useState, useEffect } from "react";
import { UserContext } from "../context/User";
import {
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
    StyleSheet,
    Modal,
    TextInput,
} from "react-native";

import {
    getUserById,
    getUserByUsername,
    patchUser,
} from "../utils/apiRequests";

const UserViewScreen = ({ route, navigation }) => {
    const { owner } = route.params;

    useEffect(() => {
        getUserByUsername(owner).then((user) => {});
    }, [owner]);

    return (
        <View style={{ flexDirection: "row" }}>
            <Button
                onPress={() => navigation.navigate("MyListings")}
                title="User listings"
            />
            {/* <View>
                <Image
                    style={{ width: 200, height: 200 }}
                    source={{
                        uri: owner.avatar,
                    }}
                />
            </View>
            <View>
                <Text>Display Name:{owner.displayName} </Text>

                <Text>Username: {owner.username}</Text>
                {user === owner.username ? (
                    <Text>Email: {owner.emailAddress}</Text>
                ) : null}
            </View> */}
        </View>
    );
};

export default UserViewScreen;

const styles = StyleSheet.create({});
