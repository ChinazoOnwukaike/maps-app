import { StyleSheet, View } from "react-native";
import React from "react";
import Mapbox, {
  Images,
  MapView,
  ShapeSource,
  SymbolLayer,
} from "@rnmapbox/maps";
import Constants from "expo-constants";
import CustomMap from "@/presentation/components/CustomMap";
import purplePin from "../../assets/images/pin-purple.svg";

const accessToken =
  Constants.expoConfig?.extra?.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN;

Mapbox.setAccessToken(accessToken);

const MapScreen = () => {
  return (
    <View style={styles.page}>
      <CustomMap>
        <ShapeSource>
          <SymbolLayer
            id="pins"
            minZoomLevel={1}
            style={{ iconImage: "pin" }}
          />
          <Images images={{ purplePin }} />
        </ShapeSource>
      </CustomMap>
      {/* <CustomMap style={{ height: "50%" }} /> */}
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
