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
    marginBottom: '3%'
  },
  Felx: {
    flex: 1
  },
  ButtonContainer: {
    height : 120,
    flexDirection: "row",
    borderRadius: 30,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding:20
  },
  Thumbnail: {
    flex: 4,
    alignItems: "end",
    resizeMode: "contain"
  },
  dataContent: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "center",
    marginStart:20,
    textAlign:'center'
  },
  data0Content: {
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
