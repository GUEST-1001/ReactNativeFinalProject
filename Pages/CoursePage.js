import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { HeaderBackButton } from "react-navigation-header-buttons";

import styles from "../StylesSheets/stryles";
import { Easing } from "react-native-reanimated";

const CoursePage = ({ navigation }) => {
  const [timeLeft, setTimeLeft] = useState(null);
  let targetTime = 5000;
  let resendTimerInterval;

  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const reactive = useRef(new Animated.Value(0)).current;

  const CountTimeLeft = (finalTime) => {
    const difference = finalTime - +new Date();
    if (difference >= 0) {
      setTimeLeft(Math.round(difference / 1000));
    } else {
      clearInterval(resendTimerInterval);
      // navigation.goBack();
    }
  };

  const TiggerTime = () => {
    const finalTime = +new Date() + targetTime;
    resendTimerInterval = setInterval(() => {
      CountTimeLeft(finalTime), 1000;
    });
  };

  useEffect(() => {
    TiggerTime();
  }, []);

  useEffect(() => {
    reactive.setValue(-width);
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: targetTime,
      useNativeDriver: true,
      easing: Easing.linear(),
    }).start();
  }, [width]);

  return (
    <SafeAreaView style={styles.courseContainer}>
      <Text>{timeLeft}</Text>
      <View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          height: 20,
          backgroundColor: "#00000033",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <Animated.View
          style={{
            height: 20,
            borderRadius: 20,
            width: "100%",
            backgroundColor: "#00000088",
            position: "absolute",
            left: 0,
            top: 0,
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CoursePage;
