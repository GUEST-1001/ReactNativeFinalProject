import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import NavMainPage from "./NavMainPage";
import NavChoosePage from "./NavChoosePage";

const Tab = createBottomTabNavigator();

const DrawerMainPage = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "NavMainPage") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "NavChoosePage") {
            iconName = focused ? "body" : "body-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#63E0A3",
        tabBarInactiveTintColor: "#000",
        headerShown: false,
      })}
      initialRouteName="NavMainPage"
    >
      <Tab.Screen
        options={{ title: "Home" }}
        name="NavMainPage"
        component={NavMainPage}
      />
      <Tab.Screen
        options={{ title: "All YOGA Pose" }}
        name="NavChoosePage"
        component={NavChoosePage}
      />
    </Tab.Navigator>
  );
};

export default DrawerMainPage;
