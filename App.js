import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ContentListScreen from "./src/screens/ContentListScreen";
import DetailScreen from "./src/screens/DetailScreen";
import ChecklistScreen from "./src/screens/ChecklistScreen";
import FaqScreen from "./src/screens/FaqScreen";
import StepOrderScreen from "./src/screens/StepOrderScreen";
import QuizScreen from "./src/screens/QuizScreen";
import SearchScreen from "./src/screens/SearchScreen";
import RemindersScreen from "./src/screens/RemindersScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import AboutScreen from "./src/screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#1565C0" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "900" },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Akıllı İlaç Uygulama Asistanı" }} />
        <Stack.Screen name="ContentList" component={ContentListScreen} options={{ title: "Sorular" }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "Bilgi" }} />
        <Stack.Screen name="Checklist" component={ChecklistScreen} options={{ title: "Kontrol Listesi" }} />
        <Stack.Screen name="FAQ" component={FaqScreen} options={{ title: "Sorular" }} />
        <Stack.Screen name="StepOrder" component={StepOrderScreen} options={{ title: "Sıralama Soruları" }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: "Sorular" }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: "Arama" }} />
        <Stack.Screen name="Reminders" component={RemindersScreen} options={{ title: "Hatırlatıcı" }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Profil" }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: "Hakkında" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}