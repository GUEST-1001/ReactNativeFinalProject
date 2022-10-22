import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { SvgUri } from "react-native-svg";

import axios from "axios";

import styles from "../StylesSheets/stryles";

//Start Page
const ChoosePage = ({ navigation }) => {
  //Set Variable
  const [yogaPose, setYogaPose] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  //Get Data
  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://lightning-yoga-api.herokuapp.com/yoga_poses?english_name="
      );
      setYogaPose(res.data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error); //set error to state error
    }
  };

  //Get Data For Search
  const getSearch = async () => {
    try {
      const res = await axios.get(
        "https://lightning-yoga-api.herokuapp.com/yoga_poses?english_name=" +
          search
      );
      setYogaPose(res.data.items);
    } catch (error) {
      setError(error); //set error to state error
    }
  };

  //Call 'getData' Function
  useEffect(() => {
    getData();
  }, []);

  //Call 'getSearch' Function
  useEffect(() => {
    getSearch(search);
  }, [search]);

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
      <SafeAreaView style={styles.Felx}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            navigation.navigate("YogaInfo", {
              id: item.id,
              name: item.english_name,
              url: item.img_url,
            });
          }}
        >
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

  //Main Function
  return (
    <SafeAreaView style={styles.scollViewContainer}>
      <View style={styles.searchBar}>
        <Ionicons name="search-sharp" size={25} color="#000" />
        <TextInput
          style={styles.searchInput}
          value={search}
          onChangeText={(getSearch) => setSearch(getSearch)}
          placeholder="Search here"
        />
      </View>
      <View style={{marginBottom:'10%'}}>
        <FlatList
          data={yogaPose}
          keyExtractor={(item) => item.id.toString()}
          renderItem={_renderItem}
          refreshing={loading}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChoosePage;
