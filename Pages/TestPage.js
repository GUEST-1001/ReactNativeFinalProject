import {
  Text,
  StyleSheet,
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

import styles from "../StylesSheets/stryles";

import axios from "axios";

// import styles from "../StylesSheets/stryles";

const TestPage = ({ navigation }) => {

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://lightning-yoga-api.herokuapp.com/yoga_categories/1"
      );
      setDetail(res.data.yoga_poses);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error); //set error to state error
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
      </View>
    );
  }


  const _renderItem = ({ item }) => {
    console.log(item.english_name);
    return <Text style={styles.textStyle}> {item.english_name} </Text>;
  };

  return (
    <View>
    <FlatList
      style={styles.listStyle}
      data={detail}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      inverted
      showsHorizontalScrollIndicator={false}
      renderItem={_renderItem}
    />
    </View>
  );
};

export default TestPage;
