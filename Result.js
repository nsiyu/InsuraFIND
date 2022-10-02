import { screensEnabled } from "react-native-screens";
import { Text } from "react-native";
import { View } from "react-native";
import { Image } from "react-native";
import { Button } from "galio-framework";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import * as React from "react";

const Result = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <Image
        source={require("./assets/logo.png")}
        style={{ width: 60, height: 60, marginTop: 50, marginLeft: 50 }}
      ></Image>

      <Text
        style={{
          color: "#fff",
          marginLeft: 50,
          fontSize: 35,
          fontWeight: "900",
        }}
      >
        Congradulations! You Qualify for..
      </Text>

      <View style={{ marginTop: 80 }}>
        <Text
          style={{
            color: "#fff",
            marginLeft: 50,
            fontSize: 30,
            fontWeight: "900",
            paddingBottom: "5%",
          }}
        >
          : Renters Insurance
        </Text>
        <Text
          style={{
            color: "#fff",
            marginLeft: 50,
            fontSize: 30,
            fontWeight: "900",
            paddingBottom: "5%",
          }}
        >
          Hospital Income Insurance
        </Text>
        <Text
          style={{
            color: "#fff",
            marginLeft: 50,
            fontSize: 30,
            fontWeight: "900",
            paddingBottom: "5%",
          }}
        >
          Medical Supplement Insurance
        </Text>
        <Text
          style={{
            color: "#fff",
            marginLeft: 50,
            fontSize: 30,
            fontWeight: "900",
            paddingBottom: "25%",
          }}
        >
          Pet Insurance :
        </Text>
        <Button
          onPress={() => navigation.navigate("Chat")}
          style={{
            color: "#fff",
            marginLeft: 50,
            fontSize: 30,
            fontWeight: "900",
            width: "60%",
            backgroundColor: "grey",
          }}
        >
          Talk to Jake to learn more!
        </Button>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  buttons: {
    height: 100,
    width: 325,
    marginLeft: 30,
    marginBottom: 15,
    backgroundColor: "#383838",
  },
});
