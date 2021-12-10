import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getUserById } from "../utils/apiRequests";

const ProfileCard = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            const uid = user.uid;
            getUserById(uid).then((user) => {
                setUser(user);
            });
        });
        return unsubscribe;
    }, []);
    return (
        <View style={{ flexDirection: "row" }}>
            <View>
                <Image
                    style={{ width: 200, height: 200 }}
                    source={{
                        uri: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.sbcc.sg/wp-content/themes/healthway/images/user-default.png",
                    }}
                />
            </View>
            <View>
                <Text>Display Name:{user.displayName} </Text>
                <Text>Username: {user.username}</Text>
                <Text>Email: {user.emailAddress}</Text>
                <TouchableOpacity>
                    <Text style={{ color: "blue" }}>Change password</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfileCard;
