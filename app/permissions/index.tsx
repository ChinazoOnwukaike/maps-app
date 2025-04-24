import { View, Text, Pressable } from "react-native";
import React from "react";
import { ThemedText } from "@/presentation/components/shared/ThemedText";
import { usePermissionsStore } from "@/presentation/store/usePermissions";
import { requestLocationPermission } from "@/core/actions/permissions/location";
import ThemedPressable from "@/presentation/components/shared/ThemedPressable";

const PermissionsScreen = () => {
  const { locationStatus } = usePermissionsStore();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedPressable onPress={requestLocationPermission}>
        Habilitar ubicación
      </ThemedPressable>
      <ThemedText>Estado actual: {locationStatus}</ThemedText>
    </View>
  );
};

export default PermissionsScreen;
