import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

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
      <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            navigation.navigate("CoursePage");
          }}
        >
          <View style={styles.ButtonContainer}>
            <Text>Go To CoursePage</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
};

export default MainPage;
