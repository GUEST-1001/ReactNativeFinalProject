import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainPage from "./MainPage";
import CoursePage from "./CoursePage";
import CourseDetail from "./CourseDetail";
import YogaInfoPage from "./YogaInfoPage";

const Stack = createNativeStackNavigator();

const NavMainPage = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainPage"
      screenOptions={{
        headerStyle: { backgroundColor: "#63E0A3" },
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetail}
        options={{
          headerTitle: "",
          headerShown: true,
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="YogaInfo"
        component={YogaInfoPage}
        options={{
          headerTitle: "",
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen name="CoursePage" component={CoursePage} />
    </Stack.Navigator>
  );
};

export default NavMainPage;
