import { Text, View, Button, TextInput, StyleSheet, Image } from "react-native";
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-web";

import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import ChoosePage from "./ChoosePage"
import YogaInfoPage from "./YogaInfoPage";

const Stack = createNativeStackNavigator();

const NavChoosePage = () => {
  return (
      <Stack.Navigator
        initialRouteName='ChoosePage'
        screenOptions={{
          headerStyle: {backgroundColor: '#fff'},
          headerTintColor: '#000',
          headerTitleStyle:{fontWeight:'bold',fontSize:20},
          headerShown: false
        }}
      >
        <Stack.Screen name='ChoosePage' component={ChoosePage}/>
        <Stack.Screen name='YogaInfo' component={YogaInfoPage}/>
      </Stack.Navigator>
  )
}

export default NavChoosePage
