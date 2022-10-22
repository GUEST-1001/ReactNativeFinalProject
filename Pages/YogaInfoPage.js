import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { SvgUri } from "react-native-svg";

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
  // if (loading === true) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator size="large" color="white" />
  //     </View>
  //   );
  // }

  //Render Yoga Pose
  const _renderItem = ({ item }) => {
    return (
      <SafeAreaView>
        <Text style={styles.infoText}>{item.name}</Text>
        <Text style={styles.infoDes}>{item.description}</Text>
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.infoContainer}>
      <View style={{flex:1,alignItems: "center",justifyContent: "flex-end",}}>
      <SvgUri
        width="250"
        height="250"
        preserveAspectRatio='xMinYMin slice'
        fill='#000'
        uri= {url}
      />
      </View>
      <View style={styles.infoNameCon}>
        <Text style={styles.infoName}>{name}</Text>
      </View>
      <View style={styles.desConrainer}>
        <FlatList
          data={info}
          keyExtractor={(item) => item.id.toString()}
          renderItem={_renderItem}
          refreshing={loading}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        />
      </View>
    </View>
  );
};

export default YogaInfoPage;
