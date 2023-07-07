import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import React, { useRef, useState } from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
// @ts-ignore
import OtpInput from "react-native-otp-textinput";
import Colors from "../constants/Colors";

const Verification = () => {
  const [code, setCode] = useState("");
  return (
    <>
      <Stack.Screen
        options={{ title: "Verification Code", headerBackTitle: "Back" }}
      />
      <SafeAreaView>
        <View className="container flex h-full w-full p-4 align-middle">
          <Text className="font-bold text-2xl text-center ">
            We Sent a Code
          </Text>
          <Text className="text-center pt-3">
            Please enter the verification code we have sent to your email
            address.
          </Text>
          <View className="flex flex-row gap-2 my-3 justify-center">
            <Ionicons name="mail" color={Colors.main} size={18} />
            <Text className="font-medium">muhdajeer@gmail.com</Text>
          </View>
          <View className="my-3">
            <OtpInput
              autoFocus
              handleTextChange={(code: string) => {
                setCode(code);
              }}
              tintColor="black"
              offTintColor="#D3D3D3"
              textInputStyle={styles.textContainer}
            />
          </View>
          <View>
            <Text className="text-center text-gray-700">
              Did'nt receive code? (00:23)
            </Text>
          </View>
          <View className="my-3">
            <TouchableOpacity
              style={{
                backgroundColor: code.length === 4 ? Colors.main : "#fff3ec",
              }}
              className="rounded"
            >
              <Button
                disabled={code.length !== 4}
                color={code.length === 4 ? "white" : "orange"}
                title="Next"
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    borderRadius: 8,
    borderColor: "#000000",
    borderWidth: 1,
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: "#fff3ec",
  },
});

export default Verification;
