import React from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
// import MapView, {
//   PROVIDER_GOOGLE,
//   Marker,
//   Callout,
//   Polygon,
//   Circle,
// } from "react-native-maps";

export default function ListingMap() {
  const places = [
    { name: "JD Gym", latitude: 53.475201, longitude: -2.240162 },
    { name: "Spinning Field", latitude: 53.479553, longitude: -2.252921 },
    { name: "Communicate School", latitude: 53.480249, longitude: -2.233487 },
    { name: "Barry Court", latitude: 53.429531, longitude: -2.23191 },
    { name: "Boots", latitude: 53.4765, longitude: -2.242294 },
  ];

  const showWelcomeMessage = () => {
    Alert.alert("Welcome to Northcoders", "The course is fantastic", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK" },
    ]);
  };

  return (
    <View>
      <Text>ListingMap</Text>
      {/* <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 53.473219,
          longitude: -2.256017,
          latitudeDelta: 0.09,
          longitudeDelta: 0.0035,
        }}
      >
        <Polygon
          coordinates={places}
          fillColor={"rgba(100, 100, 200, 0.3)"}
          strokeWidth={3}
        />
        <Circle
          center={{ latitude: 53.473219, longitude: -2.256017 }}
          radius={1000}
          fillColor={"rgba(200,300,200,0.5)"}
        />

        <Marker coordinate={{ latitude: 53.471951, longitude: -2.238245 }}>
          <Callout onPress={showWelcomeMessage}>
            <Image
              style={{ width: 20, height: 20 }}
              source={{
                uri: "https://pbs.twimg.com/profile_images/1333392601450426370/x_DT51WI_400x400.jpg",
              }}
            />
            <Text>Northcoders</Text>
          </Callout>
          <Image
            style={{ width: 30, height: 30 }}
            source={{
              uri: "https://pbs.twimg.com/profile_images/1333392601450426370/x_DT51WI_400x400.jpg",
            }}
          />
        </Marker>
        <Marker
          draggable
          coordinate={{ latitude: 53.473219, longitude: -2.256017 }}
        >
          <Callout>
            <Image
              style={{ width: 20, height: 20 }}
              source={{
                uri: "https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/person.png",
              }}
            />
            <Text>I'm here</Text>
          </Callout>
          <Image
            style={{ width: 30, height: 30 }}
            source={{
              uri: "https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/person.png",
            }}
          />
        </Marker>
        {places.map((marker) => (
          <Marker
            key={marker.name}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.name}
          >
            <Callout>
              <Image
                style={{ width: 20, height: 20 }}
                source={{
                  uri: "https://w7.pngwing.com/pngs/652/32/png-transparent-google-maps-pin-bing-maps-mapquest-map-map-location-red.png",
                }}
              />
              <Text>{marker.name}</Text>
            </Callout>
            <Image
              style={{ width: 20, height: 20 }}
              source={{
                uri: "https://w7.pngwing.com/pngs/652/32/png-transparent-google-maps-pin-bing-maps-mapquest-map-map-location-red.png",
              }}
            />
          </Marker>
        ))}
      </MapView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  map: { height: "100%" },
});
