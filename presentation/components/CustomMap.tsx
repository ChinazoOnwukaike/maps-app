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
        <Camera followUserLocation maxZoomLevel={4} minZoomLevel={5} />
        <LocationPuck />
        {children}
      </MapView>
    </View>
  );
};

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
