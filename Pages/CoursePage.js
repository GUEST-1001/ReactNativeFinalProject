import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

let date = new Date();
let endHours = date.getHours();
let endMinutes = date.getMinutes();
let endSeconds = date.getSeconds();

const CoursePage = () => {
    
    useEffect(() => {
        endHours = date.getHours();
        endMinutes = date.getMinutes();
        endSeconds = date.getSeconds();
      }, [date.getSeconds()]);

  return (
    <View>
      <Text>
        {endHours}:{endMinutes}:{endSeconds}
      </Text>
    </View>
  );
};

export default CoursePage;

const styles = StyleSheet.create({});
