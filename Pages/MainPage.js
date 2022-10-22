import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
} from "react-native";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { SvgUri } from "react-native-svg";

import styles from "../StylesSheets/stryles";

const MainPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

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
          <View style={{ flex: 1 }}>
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
          <Text style={{ flex: 1 }}>Go To CoursePage</Text>
        </View>
      </TouchableOpacity>

      <View style={{ width: "100%", height: "50%", backgroundColor: "#fff" }}>
        <View style={styles.Felx}>
          <SvgUri
            width="100%"
            height="100%"
            preserveAspectRatio="xMinYMin slice"
            fill="#000"
            uri="https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1"
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          navigation.navigate("CoursePage");
        }}
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
          <Text style={{ flex: 1 }}>Go To CoursePage</Text>
        </View>
        
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default MainPage;
