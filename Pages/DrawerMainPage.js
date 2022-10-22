import React from "react";
import { Text, View } from "react-native";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import NavMainPage from "./NavMainPage";
import MainPage from "./MainPage";
import NavChoosePage from "./NavChoosePage";
import SettingPage from "./SettingPage";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const DrawerMainPage = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "NavMainPage") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "NavChoosePage") {
            iconName = focused ? "body" : "body-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#63E0A3",
        tabBarInactiveTintColor: "#000",
        headerShown: false,
      })}
      initialRouteName="NavMainPage"
    >
      <Tab.Screen
        options={{ title: "Home" }}
        name="NavMainPage"
        component={NavMainPage}
      />
      <Tab.Screen
        options={{ title: "All YOGA Pose" }}
        name="NavChoosePage"
        component={NavChoosePage}
      />
    </Tab.Navigator>

    // <Drawer.Navigator
    //   useLegacyImplementation
    //   screenOptions={{
    //     drawerStyle: {
    //       width: "70%",
    //     },
    //   }}
    // >
    //   <Drawer.Screen
    //     options={{ headerTitle: "", drawerLabel: "Home" }}
    //     name="NavMainPage"
    //     component={NavMainPage}
    //   />
    //   <Drawer.Screen
    //     options={{ headerTitle: "", drawerLabel: "Choose" }}
    //     name="NavChoosePage"
    //     component={NavChoosePage}
    //   />
    //   <Drawer.Screen
    //     options={{ headerTitle: "", drawerLabel: "Setting" }}
    //     name="SettingPage"
    //     component={SettingPage}
    //   />
    // </Drawer.Navigator>
  );
};

export default DrawerMainPage;
