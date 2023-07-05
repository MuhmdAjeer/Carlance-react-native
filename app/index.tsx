import { View, Text } from "react-native";
import React from "react";
import Register from "../components/Auth/Register";
import { Stack } from "expo-router";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
};

const Index = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: true }} />
      <Register />
    </>
  );
};

export default Index;
