import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
} from "react-native";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { SvgUri } from "react-native-svg";
import axios from "axios";

import styles from "../StylesSheets/stryles";

const MainPage = ({ navigation }) => {
  const [yogaCategories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://lightning-yoga-api.herokuapp.com/yoga_categories"
      );
      setCategories(res.data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error); //set error to state error
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
    let image =
      item.id === 1
        ? "https://cdn0.iconfinder.com/data/icons/fitness-57/50/Fitness_Outline-06-512.png"
        : item.id === 2
        ? "https://cdn-icons-png.flaticon.com/512/93/93357.png"
        : item.id === 3
        ? "https://icon-library.com/images/strengthen-icon/strengthen-icon-1.jpg"
        : item.id === 4
        ? "https://static.thenounproject.com/png/1861021-200.png"
        : item.id === 5
        ? "https://pic.onlinewebfonts.com/svg/img_22599.png"
        : item.id === 6
        ? "https://static.thenounproject.com/png/637471-200.png"
        : item.id === 7
        ? "https://cdn-icons-png.flaticon.com/512/62/62270.png"
        : item.id === 8
        ? "https://cdn-icons-png.flaticon.com/512/10/10522.png"
        : item.id === 9
        ? "https://cdn1.iconfinder.com/data/icons/jumpicon-beauty-line/32/-_Yoga-Sit-Relax-Meditation-Relaxation-Exercise-512.png"
        : item.id === 10
        ? "https://www.givemehistory.com/wp-content/uploads/2020/10/Yin-and-Yang.png"
        : item.id === 11
        ? "https://www.uschamberfoundation.org/sites/default/files/styles/detail_image800w/public/media-uploads/intro-icon-final_EntryPoint.png?itok=c9spVDnD"
        : "https://cdn-icons-png.flaticon.com/512/173/173465.png";
    return (
      <SafeAreaView style={styles.Felx}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            navigation.navigate("CourseDetail", {
              id: item.id,
              name: item.name,
              des: item.description,
              imageUrl: image,
            });
          }}
        >
          <View style={styles.Felx}>
            <View style={styles.ButtonContainer}>
              <View style={styles.Thumbnail}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                  source={{ uri: image }}
                />
              </View>
              <Text style={styles.courseName}>{item.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={styles.scollViewContainer}>
      <View style={styles.searchBar}>
        <Text style={styles.haderText}>YOGA Course</Text>
      </View>
      <View style={{ marginBottom: "10%" }}>
        <FlatList
          data={yogaCategories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={_renderItem}
          refreshing={loading}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainPage;
