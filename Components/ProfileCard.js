import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ProfileCard = () => {
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
        <Text>Display Name: </Text>
        <Text>Username: </Text>
        <Text>Email:</Text>
        <TouchableOpacity>
          <Text style={{ color: "blue" }}>Change password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileCard;
