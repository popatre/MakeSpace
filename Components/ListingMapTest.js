import React from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Polygon,
  Circle,
} from "react-native-maps";

export default function SingleListingMap({ location }) {
  // console.log(location, "<<<<<<llllloooocccattiionnnn");
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
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 53.473219,
          longitude: -2.256017,
          latitudeDelta: 0.09,
          longitudeDelta: 0.0035,
        }}
      >
        <Circle
          center={{ latitude: 53.473219, longitude: -2.256017 }}
          radius={1000}
          fillColor={"rgba(200,300,200,0.5)"}
        />

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
        {location.map((marker) => {
          // console.log(marker, "<<<<<<<<<<<obj");
          return (
            <Marker
              key={marker.id}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.name}
            >
              <Callout
                style={{
                  width: 200,
                  height: 100,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View>
                  <Image
                    style={{ width: 60, height: 60, marginHorizontal: 20 }}
                    source={{
                      uri: "https://www.tibs.org.tw/images/default.jpg",
                    }}
                  />
                </View>
                <View>
                  <Text>{marker.name}</Text>
                  <Text>Size: {marker.size}</Text>
                  <Text>Price: £{marker.price}</Text>
                  <Text>Rating: {marker.spaceRating}</Text>
                </View>
              </Callout>
              <Image
                style={{ width: 35, height: 35 }}
                source={{
                  uri: "https://w7.pngwing.com/pngs/652/32/png-transparent-google-maps-pin-bing-maps-mapquest-map-map-location-red.png",
                }}
              />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: { height: "100%" },
});
