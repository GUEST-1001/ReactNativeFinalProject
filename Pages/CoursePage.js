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
  const [yogaPre, setYogaPre] = useState([]);
  const [yogaNext, setYogaNext] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let yogaIndex = useRef(0);
  let yogaLength = useRef(0);

  const [width, setWidth] = useState(0);
  const [safeWidth, setSafeWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const reactive = useRef(new Animated.Value(0)).current;

  const CountTimeLeft = (finalTime) => {
    const difference = finalTime - +new Date();
    if (difference >= 0) {
      setTimeLeft(Math.round(difference / 1000));
    } else {
      clearInterval(resendTimerInterval);
      yogaIndex.current = yogaIndex.current + 1;
      getData();
      animatedValue.setValue(0);
      if (yogaIndex.current === yogaLength.current) {
        navigation.goBack();
      } else {
        TiggerTime();
      }
    }
  };

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://lightning-yoga-api.herokuapp.com/yoga_categories/" + id
      );
      setYoga(res.data.yoga_poses[yogaIndex.current]);
      yogaLength.current = res.data.yoga_poses.length;
      if (yogaIndex.current != 0) {
        setYogaPre(res.data.yoga_poses[yogaIndex.current - 1]);
      } else {
        setYogaPre([]);
      }
      if (yogaIndex.current+1 != yogaLength.current) {
        setYogaNext(res.data.yoga_poses[yogaIndex.current + 1]);
      } else {
        setYogaNext([]);
      }
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
    RunAnimated();
  }, [width, yogaIndex.current]);

  const RunAnimated = () => {
    reactive.setValue(-width);
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: targetTime,
      useNativeDriver: true,
      easing: Easing.linear(),
    }).start();
  };

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
    <SafeAreaView
      onLayout={(e) => {
        const newWidth = e.nativeEvent.layout.width;
        setSafeWidth(newWidth);
      }}
      style={styles.courseContainer}
    >
      <View>
        <View
          style={{
            Felx: 1,
            height: "80%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SvgUri
            width={safeWidth * 0.85}
            height={safeWidth * 0.85}
            fill="#000"
            uri={yoga.img_url}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              Felx: 1,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 30,
                fontWeight: "bold",
                color: "#000",
                margin: 5,
              }}
            >
              {yoga.english_name}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>

        <View style={{}}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <SvgUri
                width={safeWidth * 0.20}
                height={safeWidth * 0.20}
                fill="#000"
                uri={yogaPre.img_url}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Ionicons name="hourglass" size={30} color="#000" />
              <Text style={{ fontSize: 30 }}>{timeLeft}</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <SvgUri
                width={safeWidth * 0.20}
                height={safeWidth * 0.20}
                fill="#000"
                uri={yogaNext.img_url}
              />
            </View>
          </View>
        </View>

        <View>
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
                transform: [
                  {
                    translateX: animatedValue,
                  },
                ],
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CoursePage;
