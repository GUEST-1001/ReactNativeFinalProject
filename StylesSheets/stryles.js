import { StyleSheet,StatusBar  } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#63E0A3",
    justifyContent: "center",
    padding: "5%",
    marginTop:StatusBar.currentHeight
    
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  Felx: {
    flex: 1,
  },


  scollViewContainer: {
    flex:1,
    backgroundColor: "#63E0A3",
    padding: "5%",
    marginTop:StatusBar.currentHeight
  },
  Button: {
    width: "100%",
    marginBottom: "3%",
  },
  ButtonContainer: {
    alignItems:'center',
    height: 120,
    flexDirection: "row",
    borderRadius: 30,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding: 20,
  },
  Thumbnail: {
    flex: 4,
    resizeMode: "contain",
  },
  dataContent: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
    marginStart: 20,
    textAlign: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  courseName: {
    flex: 6,
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  haderText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },


  infoContainer: {
    flex: 1,
    backgroundColor: "#63E0A3",
    padding: "5%",
  },
  desConrainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    marginTop: 20,
  },
  infoImage: {
    height: "40%",
    resizeMode: "contain",
    marginBottom:10,
  },
  infoNameCon: {
    alignItems: "center",
    justifyContent: "center",
  },
  infoName: {
    fontSize: 30,
    fontWeight: "bold",
  },
  infoText: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  infoDes: {
    fontSize: 13,
    marginTop: 5,
  },

  searchBar: {
    flexDirection: 'row',
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  searchInput: {
    width: '80%',
    padding: 5,
    height: 30,
    borderWidth: 2,
    borderColor: '#000',
    fontSize: 13,
    borderRadius: 30,
  },


  courseContainer: {
    flex: 1,
    backgroundColor: "#63E0A3",
    justifyContent: "center",
    padding: "5%",
  },

  couseDesCon: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#fff",
    padding:20,
    marginBottom:20,
  },
  couseDes: {
    fontSize: 13,
    textAlign:'justify'
  },


  textStyle: {
    fontSize: 20,
    marginBottom:10,
    color: "#000",
  },
  listStyle: {
    textAlign: "center",
  },

  horizontalButton: {
    Felx:1,
    width:150,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    marginLeft:5,
    marginRight:5,
  },
  horizontalButtonContainer: {
    alignItems:'center',
    height: 180,
    flexDirection: "row",
    borderRadius: 30,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding: 20,
  },
});

export default styles;
