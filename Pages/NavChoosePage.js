import { Text, View, Button, TextInput, StyleSheet, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-web";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChoosePage from "./ChoosePage";
import YogaInfoPage from "./YogaInfoPage";

const Stack = createNativeStackNavigator();

const NavChoosePage = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChoosePage"
      screenOptions={{
        headerStyle: { backgroundColor: "#63E0A3" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
        headerShown: false,
      }}
    >
      <Stack.Screen name="ChoosePage" component={ChoosePage} />
      <Stack.Screen
        name="YogaInfo"
        component={YogaInfoPage}
        options={{
          headerTitle: "",
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default NavChoosePage;
