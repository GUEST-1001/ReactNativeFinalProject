import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import axios from "axios";

import styles from "../StylesSheets/stryles";


//Start Page
const ChoosePage = ({ navigation }) => {
  const [yogaPose, setYogaPose] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  //Get Data
  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://lightning-yoga-api.herokuapp.com/yoga_poses"
      );
      setYogaPose(res.data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error); //set error to state error
    }
  };

  //Call 'getData' Function
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );


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
  const _renderItem = ({ item, index }) => {
    return (
      <SafeAreaView style={styles.Felx}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            navigation.navigate("", {
              id: item.id,
              title: item.english_name,
            });
          }}
        >
          <View style={styles.Felx}>
            <View style={styles.ButtonContainer}>
              <Image
                style={styles.thumbnail}
                source={{ uri: item.img_url }}
                resizeMode="cover"
              />

              <View style={styles.dataContent}>
                <Text style={styles.english_name}>{item.english_name}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };


  //Main Function
  return (
    <View style={styles.container}>
      <FlatList
        data={yogaPose}
        keyExtractor={(item) => item.id.toString()}
        renderItem={_renderItem}
        refreshing={loading}
      />
    </View>
  );
};

export default ChoosePage;
