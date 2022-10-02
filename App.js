import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import Started from "./Started.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Q1 from "./Q1.js";
const Stack = createNativeStackNavigator();
import Home from "./Home.js";
import Q2 from "./Q2.js";
import Q3 from "./Q3.js";
import Q4 from "./Q4.js";
import Q5 from "./Q5.js";
import Loading from "./Loading.js";
import Result from "./Result.js";
import Chat from "./Chat.js";


export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Started" component={Started}></Stack.Screen>
        <Stack.Screen name="Q1" component={Q1}></Stack.Screen>
        <Stack.Screen name="Q2" component={Q2}></Stack.Screen>
        <Stack.Screen name="Q3" component={Q3}></Stack.Screen>
        <Stack.Screen name="Q4" component={Q4}></Stack.Screen>
        <Stack.Screen name="Q5" component={Q5}></Stack.Screen>
        <Stack.Screen name="Loading" component={Loading}></Stack.Screen>
        <Stack.Screen name="Result" component={Result}></Stack.Screen>
        <Stack.Screen name="Chat" component={Chat}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  text: {
    color: "#fff",
  },
});
