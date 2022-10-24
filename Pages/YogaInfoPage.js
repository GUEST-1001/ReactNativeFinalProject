import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";

import { SvgUri } from "react-native-svg";

import axios from "axios";

import styles from "../StylesSheets/stryles";

const YogaInfoPage = ({ navigation, route }) => {
  const { id, name, url } = route.params;
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://lightning-yoga-api.herokuapp.com/yoga_poses/" + id
      );
      setInfo(res.data.yoga_categories);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

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

  const _renderItem = ({ item }) => {
    return (
      <SafeAreaView>
        <Text style={styles.infoText}>{item.name}</Text>
        <Text style={styles.infoDes}>{item.description}</Text>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={styles.infoContainer}>
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}
      >
        <SvgUri
          width="250"
          height="250"
          preserveAspectRatio="xMinYMin slice"
          fill="#000"
          uri={url}
        />
      </View>
      <View style={styles.infoNameCon}>
        <Text style={styles.infoName}>{name}</Text>
      </View>
      <View style={styles.desConrainer}>
        {loading ? (
          <OnLoading />
        ) : (
          <FlatList
            data={info}
            keyExtractor={(item) => item.id.toString()}
            renderItem={_renderItem}
            refreshing={loading}
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default YogaInfoPage;
