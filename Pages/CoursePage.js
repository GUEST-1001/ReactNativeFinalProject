import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { HeaderBackButton } from "react-navigation-header-buttons";
import { SvgUri } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";

import axios from "axios";

import styles from "../StylesSheets/stryles";
import { Easing } from "react-native-reanimated";

const CoursePage = ({ navigation, route }) => {
  const { id, name } = route.params;
  let index = 0;

  const [timeLeft, setTimeLeft] = useState(null);
  let targetTime = 5000;
  let resendTimerInterval;

  const [yoga, setYoga] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let yogaIndex = useRef(0);
  let yogaLength = null;

  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const reactive = useRef(new Animated.Value(0)).current;

  const CountTimeLeft = (finalTime) => {
    const difference = finalTime - +new Date();
    if (difference >= 0) {
      setTimeLeft(Math.round(difference / 1000));
    } else {
      clearInterval(resendTimerInterval);
      yogaIndex.current = yogaIndex.current + 1
      console.log(yogaIndex.current)
      getData()
      // navigation.goBack();
    }
  };

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://lightning-yoga-api.herokuapp.com/yoga_categories/" + id
      );
      setYoga(res.data.yoga_poses[yogaIndex.current]);
      yogaLength = res.data.yoga_poses.length
      console.log(yogaIndex.current)
      console.log(res.data.yoga_poses[yogaIndex.current])
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };


  useEffect(() => {
    getData();
  }, []);


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

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
      </View>
    );
  }

  const OnLoading = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: "5%",
        }}
      >
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  };

  const _renderItem = ({ item, index }) => {
    console.log(item.english_name);
    return (
      <View>
        <Text>{item.english_name}</Text>
      </View>
    );
  };

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
      <View>
        {/* <FlatList
          data={yoga}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={_renderItem}
        /> */}
      </View>
      <Text>{yoga.english_name}</Text>
      {console.log('-------------------------------')}
    </SafeAreaView>
  );
};

export default CoursePage;
