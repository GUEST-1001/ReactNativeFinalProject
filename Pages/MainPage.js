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

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
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
    <View style={styles.container}>
      <TouchableOpacity
        style={{ width: "100%", marginBottom: "3%", backgroundColor: "#fff" }}
      >
        <View
          style={{
            height: 120,
            flexDirection: "row",
            borderRadius: 30,
            backgroundColor: "#fff",
            marginHorizontal: 20,
            padding: 20,
          }}
        >
          <View style={{flex:1}}>
            <Image
              source={require("../assets/icon.png")}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
                backgroundColor: "#fff",
              }}
            />
          </View>
          <Text style={{flex:1}}>Go To CoursePage</Text>
        </View>
      </TouchableOpacity>

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
