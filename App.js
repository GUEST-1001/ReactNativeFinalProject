import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "./Pages/HomePage";
import DrawerMainPage from "./Pages/DrawerMainPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="DrawerMainPage" component={DrawerMainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
