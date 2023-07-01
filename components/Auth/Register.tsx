import React from "react";
import { Button, Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "../Themed";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
  return (
    <SafeAreaView>
      <View className="h-full flex p-5 justify-center ">
        <View>
          <Text className="font-bold text-4xl  text-main-default">
            Register
          </Text>
        </View>
        <View>
          <View>
            <View className="my-2">
              <Text className="m-1 text-gray-600">Email Adress</Text>
              <TextInput
                className={"py-2 px-4 border border-gray-300 rounded-md"}
                placeholder="Enter your email..."
              />
            </View>
            <View>
              <TouchableOpacity className="bg-main-default rounded ">
                <Button color="white" title="Continue" />
              </TouchableOpacity>
            </View>
          </View>

          <Text className="text-center text-gray-400 my-5 ">Or</Text>

          <View className="my-2">
            <TouchableOpacity className="bg-slate-100 rounded ">
              <Button color="gray" title="Sign in with Google" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity className="bg-slate-100 rounded ">
              <Button color="gray" title="Sign in with Apple" />
            </TouchableOpacity>
          </View>
          <Text className="font-medium text-gray-500 text-center my-2">
            Already have an account?
            <Text className="text-main-default font-bold"> Login</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
