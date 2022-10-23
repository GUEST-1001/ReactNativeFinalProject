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
      console.log(res.data.yoga_poses);
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
        <ActivityIndicator size="large" color="#63E0A3" />
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
    return (
      <SafeAreaView style={styles.Felx}>
        <TouchableOpacity style={styles.Button}>
          <View style={styles.Felx}>
            <View style={styles.ButtonContainer}>
              <View style={{ flex: 4 }}>
                <SvgUri
                  width="100"
                  height="100"
                  fill="#000"
                  uri={item.img_url}
                />
              </View>

              <View style={styles.dataContent}>
                <Text style={styles.name}>{item.english_name}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
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
      <View style={styles.infoNameCon}>
        <Text style={styles.infoName}>{name}</Text>
      </View>
      <View style={styles.couseDesCon}>
        <Text style={styles.couseDes}>{des}</Text>
      </View>
      <View style={{ marginBottom: "10%" }}>
        <FlatList
          horizontal
          data={detail}
          keyExtractor={(item) => item.id.toString()}
          renderItem={_renderItem}
          refreshing={loading}
        />
      </View>
    </View>
  );
};

export default CourseDetail;
