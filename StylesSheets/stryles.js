import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#63E0A3",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "center",
  },
  image: {
    flex: 5,
    width: "100%",
    resizeMode: "contain",
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },


  Button: {
    width: "100%",
    marginBottom: '1%',
  },
  Felx: {
    flex: 1
  },
  ButtonContainer: {
    height: '15%',
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  Thumbnail: {
    width: "100%",
    resizeMode: "contain"
  },
  dataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    color: "#888",
    fontWeight: "700",
  },
});

export default styles;
