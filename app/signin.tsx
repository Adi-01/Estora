import icons from "@/constants/icons";
import images from "@/constants/images";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const { refetch, loading, isLoggedIn } = useGlobalContext();
  if (!loading && isLoggedIn) return <Redirect href="/" />;

  const handleLogin = async () => {
    const result = await login();

    if (result) {
      refetch();
    } else {
      Alert.alert("Error", "Failed to Login");
    }
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <Text className="text-base text-center uppercase font-rubik text-black-200 mb-1">
          Welcome to Estora
        </Text>
        <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
          Let&apos;s Get You Closer to {"\n"}
          <Text className="text-primary-300">Your Ideal Home</Text>
        </Text>
        <Text className="text-lg font-rubik text-black-200 text-center mt-8">
          Login to Estora with Google
        </Text>

        <TouchableOpacity
          onPress={handleLogin}
          className="border border-gray-200 rounded-full w-full py-4 mt-5"
        >
          <View className="flex flex-row items-center justify-center">
            <Image
              source={icons.google}
              className="w-5 h-5"
              resizeMode="contain"
            ></Image>
            <Text className="font-rubik-medium text-black-300 ml-3">
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
