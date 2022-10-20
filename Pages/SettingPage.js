import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SettingPage = ({ navigation }) => {
  
  let date = new Date();
  let endHours = date.getHours();
  let endMinutes = date.getMinutes();
  let endSeconds = date.getSeconds();
  console.log(`${endHours}:${endMinutes}:${endSeconds}`);

  return (
    <View>
      <Text>SettingPage</Text>
    </View>
  );
};

export default SettingPage;
