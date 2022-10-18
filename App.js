import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-web";

import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import HomePage from "./Pages/HomePage";
import DrawerMainPage from "./Pages/DrawerMainPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomePage'
        screenOptions={{
          headerStyle: {backgroundColor: '#fff'},
          headerTintColor: '#000', 
          headerTitleStyle:{fontWeight:'bold',fontSize:20},
          headerShown: false
        }}
      >
        <Stack.Screen name='HomePage' component={HomePage}/>
        <Stack.Screen name='DrawerMainPage' component={DrawerMainPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
