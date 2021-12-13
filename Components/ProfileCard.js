import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/User";
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
    const [userDetails, setUserDetails] = useState({});
    const { user } = useContext(UserContext);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            const uid = user.uid;
            getUserById(uid).then((user) => {
                setUserDetails(user);
            });
        });
        return unsubscribe;
    }, [user]);
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
                <Text>Display Name:{userDetails.displayName} </Text>
                <Text>Username: {userDetails.username}</Text>
                {user === userDetails.username ? (
                    <Text>Email: {userDetails.emailAddress}</Text>
                ) : null}
                <TouchableOpacity>
                    <Text style={{ color: "blue" }}>Change password</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfileCard;
