import { StyleSheet } from "react-native";
import React from "react";
import Mapbox, { MapView } from "@rnmapbox/maps";
import Constants from "expo-constants";

const accessToken =
  Constants.expoConfig?.extra?.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN;

Mapbox.setAccessToken(accessToken);

const MapScreen = () => {
  return <MapView style={styles.map} />;
};

export default MapScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato",
  },
  map: {
    flex: 1,
  },
});
