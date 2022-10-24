import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";


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
          <Text style={[styles.text, { color: "#fff" }]}>
            Touch screen to continue
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;
