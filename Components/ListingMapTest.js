import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Circle,
} from "react-native-maps";
import * as Location from "expo-location";

export default function SingleListingMap({ location }) {
  const [currantLocation, setCurrantLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [pin, setPin] = useState({
    latitude: 53.472036,
    longitude: -2.238065,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let thisLocation = await Location.getCurrentPositionAsync({});

      setCurrantLocation({
        latitude: thisLocation.coords.latitude,
        longitude: thisLocation.coords.longitude,
      });
      setPin({
        latitude: thisLocation.coords.latitude,
        longitude: thisLocation.coords.longitude,
      });
    })();
  }, []);

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: currantLocation.latitude,
          longitude: currantLocation.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.0035,
        }}
      >
        <Circle
          center={pin}
          radius={1600}
          fillColor={"rgba(200,300,200,0.5)"}
        />

        <Marker
          coordinate={currantLocation}
          draggable={true}
          onDragStart={(e) => {}}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
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
                    style={{
                      width: 60,
                      height: 60,
                      marginHorizontal: 20,
                    }}
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
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#00000000",
                }}
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
