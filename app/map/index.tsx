import { StyleSheet, View } from "react-native";
import React from "react";
import Mapbox, {
  Images,
  MapView,
  MarkerView,
  ShapeSource,
  SymbolLayer,
} from "@rnmapbox/maps";
import Constants from "expo-constants";
import CustomMap from "@/presentation/components/CustomMap";
import purplePin from "../../assets/images/pin-purple.png";
import { featureCollection, point } from "@turf/helpers";

const accessToken =
  Constants.expoConfig?.extra?.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN;

Mapbox.setAccessToken(accessToken);

const coords = [
  { lng: -122.431297, lat: 37.773972 },
  { lat: 37.335278, lng: -121.891944 },
]; //latlng are flipped for some unknown reason!

const MapScreen = () => {
  const points = coords.map((coord) => point([coord.lng, coord.lat]));
  return (
    <View style={styles.page}>
      <CustomMap>
        <ShapeSource id="pins" shape={featureCollection(points)}>
          <SymbolLayer
            id="pins-icon"
            minZoomLevel={1}
            style={{
              iconImage: "purplePin",
              iconAllowOverlap: true,
              iconSize: 1,
            }}
          />
          <Images images={{ purplePin }} />
        </ShapeSource>
      </CustomMap>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },

  map: {
    flex: 1,
  },
});
