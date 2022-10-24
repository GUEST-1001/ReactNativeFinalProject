import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { SvgUri } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";

import axios from "axios";

import styles from "../StylesSheets/stryles";

const CourseDetail = ({ navigation, route }) => {
  const { id, name, des, imageUrl } = route.params;
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://lightning-yoga-api.herokuapp.com/yoga_categories/" + id
      );
      setDetail(res.data.yoga_poses);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error); //set error to state error
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  //Show Error if Error
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
        <ActivityIndicator size="large" color='#fff' />
      </View>
    );
  };

  //   // Show Loading Screen
  //   if (loading === true) {
  //     return (
  //       <View style={styles.container}>
  //         <ActivityIndicator size="large" color="white" />
  //       </View>
  //     );
  //   }

  //Render Yoga Pose
  const _renderItem = ({ item }) => {
    console.log(item.english_name);
    return (
      <TouchableOpacity
        style={styles.horizontalButton}
        onPress={() => {
          navigation.navigate("YogaInfo", {
            id: item.id,
            name: item.english_name,
            url: item.img_url,
          });
        }}
      >
        <View style={{ width: 100, height: 100 }}>
          <SvgUri width="100" height="100" fill="#000" uri={item.img_url} />
        </View>

        <Text style={styles.textStyle}>{item.english_name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoImage}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
          source={{ uri: imageUrl }}
        />
      </View>
      <View style={[styles.infoNameCon, { marginBottom: 20 }]}>
        <Text style={styles.infoName}>{name}</Text>
      </View>
      <ScrollView>
        <View style={styles.couseDesCon}>
          <Text style={styles.couseDes}>{des}</Text>
        </View>

        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <TouchableOpacity
            style={{
              width: 150,
              alignItems: "center",
              backgroundColor: "#FF9171",
              borderRadius: 30,
            }}
            onPress={() => {
              navigation.navigate("CoursePage", {
                id: id,
                name: name,
              });
            }}
          >
            <View
              style={{
                margin: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                style={{
                  fontSize: 25,
                  color: "#000",
                }}
                name="caret-forward-sharp"
              />
              <Text
                style={{
                  fontSize: 20,
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                START
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>
          {loading ? (
            <OnLoading />
          ) : (
            <FlatList
              data={detail}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={_renderItem}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default CourseDetail;
