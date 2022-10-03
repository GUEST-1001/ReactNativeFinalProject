import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-web";

import styles from "../StylesSheets/stryles";

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.content}
        activeOpacity="1"
        onPress={() => navigation.navigate("DrawerMainPage")}
      >
        <View style={styles.content}>
          <Text style={styles.text}>All Ultimate Yoga Pose</Text>
        </View>

        <Image
          style={styles.image}
          source={require("../assets/YogaLogo.png")}
        />

        <View style={styles.content}>
          <Text style={[styles.text, { color: "white" }]}>
            Touch screen to continue
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;
