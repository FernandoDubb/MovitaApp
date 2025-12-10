import React from "react";
import { StatusBar } from "expo-status-bar";
import * as Notifications from "expo-notifications";
import AppNavigator from "./src/navigation/AppNavigator";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  return (
    <>
      <AppNavigator />
      <StatusBar style="light" />
    </>
  );
}
