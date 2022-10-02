import { screensEnabled } from "react-native-screens";
import { Text } from "react-native";
import { View } from "react-native";
import { Image } from "react-native";
import { Button } from "galio-framework";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import Progress from "./Progress";
import * as React from "react";

const Loading = ({ navigation }) => {

  setTimeout(() => {
    navigation.navigate("Result"); //this.props.navigation.navigate('Login')
  }, 6000); //5000 milliseconds

  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <Text
        style={{
          marginTop: 350,
          marginLeft: 120,
          color: "white",
          fontSize: 30,
        }}
      >
        Generating ...
      </Text>
      <Progress />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  buttons: {
    height: 100,
    width: 325,
    marginLeft: 30,
    marginBottom: 15,
    backgroundColor: "#383838",
  },
});
