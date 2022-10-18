import React from "react";
import { Text, View } from "react-native";

import { NavigationContainer ,DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import styles from "../StylesSheets/stryles";

const MainPage = ({ navigation }) => {
  return (
    <View  style={styles.container}>
      <Text>MainPage</Text>
    </View>
  );
};

export default MainPage;
