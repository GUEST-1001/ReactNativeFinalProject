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

import MainPage from "./MainPage";
import ChoosePage from "./ChoosePage";
import NavChoosePage from "./NavChoosePage";
import SettingPage from "./SettingPage";

const Drawer = createDrawerNavigator();

const DrawerMainPage = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerStyle: {
          width: "70%",
        },
      }}
    >
      <Drawer.Screen
        options={{ headerTitle: "", drawerLabel: "Home" }}
        name="MainPage"
        component={MainPage}
      />
      <Drawer.Screen
        options={{ headerTitle: "", drawerLabel: "Choose" }}
        name="ChoosePage"
        component={NavChoosePage}
      />
      <Drawer.Screen
        options={{ headerTitle: "", drawerLabel: "Setting" }}
        name="SettingPage"
        component={SettingPage}
      />
    </Drawer.Navigator>
  );
};

export default DrawerMainPage;
