import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import styles from "../StylesSheets/stryles";

const CoursePage = ({ navigation }) => {
  const [timePass, setTimePass] = useState(true);

  const [timeLeft, setTimeLeft] = useState(null);
  const [targetTime, setTargetTime] = useState(5000);
  let resendTimerInterval;

  const CountTimeLeft = (finalTime) => {
    const difference = finalTime - +new Date();
    if (difference >= 0) {
      setTimeLeft(Math.round(difference / 1000));
    } else {
        setTimeLeft(Math.round(difference / 1000));
        clearInterval(resendTimerInterval)
        navigation.navigate("MainPage");
    }
  };

  const TiggerTime = () => {
    console.log(+new Date())
    const finalTime = +new Date() + targetTime;
    resendTimerInterval = setInterval(() => {
        CountTimeLeft(finalTime) , 1000
    })
  };

  useEffect(() => {
    TiggerTime();
  }, []);

  // setTimeout(() => {
  //     setTimePass(false);
  // }, 5000);

  return (
    <View>
      <Text>{timeLeft}</Text>
    </View>
  );
};

export default CoursePage;
