import { View, ViewProps, StyleSheet } from "react-native";
import React, { ReactElement } from "react";
import { Camera, LocationPuck, MapView } from "@rnmapbox/maps";

type CustomMapProps = ViewProps & {
  // initialLocation: { lat: number; lng: number };
  showUserLocation?: boolean;
  children?: string | ReactElement;
};

const CustomMap = ({
  showUserLocation = true,
  children,
  ...rest
}: CustomMapProps) => {
  return (
    <View {...rest} style={styles.container}>
      <MapView style={styles.map}>
        <Camera
          centerCoordinate={[-87.6500523, 41.850033]}
          minZoomLevel={2}
          maxZoomLevel={12}
        />
        {/* <LocationPuck />s */}
        {children}
      </MapView>
    </View>
  );
};

// Must implement our own zoom btn controls using native gestures, uses the zoomEnabled prop.

export default CustomMap;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1,
  },
});
