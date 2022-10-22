import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import MainPage from "./MainPage";
import CoursePage from "./CoursePage";

const Stack = createNativeStackNavigator();

const NavMainPage = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainPage"
      screenOptions={{
        headerStyle: { backgroundColor: "#63E0A3" },
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen
        name="CoursePage"
        component={CoursePage}
        options={{
          headerTitle: "",
          headerShown: true,
          headerShadowVisible: false,
          // headerLeft: () => (
          //   <Ionicons name="search-sharp" size={25} color="#000" />
          // ),
        }}
      />
    </Stack.Navigator>
  );
};

export default NavMainPage;
