import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { SvgUri } from "react-native-svg";

import axios from "axios";

import styles from "../StylesSheets/stryles";

const ChoosePage = ({ navigation }) => {
  const [yogaPose, setYogaPose] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

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
      setError(error);
    }
  };

  const getSearch = async () => {
    try {
      const res = await axios.get(
        "https://lightning-yoga-api.herokuapp.com/yoga_poses?english_name=" +
          search
      );
      setYogaPose(res.data.items);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getSearch(search);
  }, [search]);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
      </View>
    );
  }

  if (loading === true) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

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
      <View style={{ marginBottom: "10%" }}>
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
