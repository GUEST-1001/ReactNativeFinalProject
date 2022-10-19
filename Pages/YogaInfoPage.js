import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import axios from "axios";

import styles from "../StylesSheets/stryles";

//Start Page
const YogaInfoPage = ({ navigation, route }) => {
  //Set Variable
  const { id, name, url } = route.params;
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Get Data
  const getData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://lightning-yoga-api.herokuapp.com/yoga_poses/" + id
      );
      console.log(res.data.yoga_categories);
      setInfo(res.data.yoga_categories);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error); //set error to state error
    }
  };

  //Call 'getData' Function
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

  //Show Loading Screen
  if (loading === true) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  //Render Yoga Pose
  const _renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
              <Image
          style={styles.image}
          source={{ uri: url }}
        />
      <Text>{name}</Text>
      <FlatList
        data={info}
        keyExtractor={(item) => item.id.toString()}
        renderItem={_renderItem}
        refreshing={loading}
      />
    </View>
  );
};

export default YogaInfoPage;
