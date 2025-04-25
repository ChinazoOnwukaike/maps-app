import { PropsWithChildren, useEffect } from "react";
import { AppState } from "react-native";
import { usePermissionsStore } from "../store/usePermissions";
import { PermissionStatus } from "@/infrastructure/interfaces/location";
import { router } from "expo-router";

const PermissionsCheckerProvider = ({ children }: PropsWithChildren) => {
  const { locationStatus, checkLocationPermission } = usePermissionsStore();

  useEffect(() => {
    if (locationStatus === PermissionStatus.GRANTED) {
      router.replace("/map");
    } else if (locationStatus !== PermissionStatus.CHECKING) {
      router.replace("/permissions");
    }
  }, [locationStatus]);

  useEffect(() => {
    checkLocationPermission();
  }, [checkLocationPermission]);

  useEffect(() => {
    const susbcription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "active") {
        checkLocationPermission();
      }
    });

    return () => {
      susbcription.remove();
    };
  }, [checkLocationPermission]);

  return <>{children}</>;
};

export default PermissionsCheckerProvider;
