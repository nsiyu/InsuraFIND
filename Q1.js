import { screensEnabled } from "react-native-screens";
import { Text } from "react-native";
import { View } from "react-native";
import { Image } from "react-native";
import { Button } from "galio-framework";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import * as React from "react";

const Q1 = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <Image
        source={require("./assets/logo.png")}
        style={{ width: 60, height: 60, marginTop: 110, marginLeft: 50 }}
      ></Image>
      <Text
        style={{
          color: "#fff",
          marginLeft: 50,
          fontSize: 35,
          fontWeight: "900",
        }}
      >
        Are you a home owner?
      </Text>
      <View style={{ marginTop: 20 }}>
        <Button
          style={styles.buttons}
          color="#fff"
          shadowless
          size="large"
          onPress={() => navigation.navigate("Q2")}
        >
          <Text style={{ fontSize: 20, color: "white" }}>I own a home.</Text>
        </Button>
        <Button
          color="#fff"
          shadowless
          size="large"
          style={styles.buttons}
          onPress={() => navigation.navigate("Q2")}
        >
          <Text style={{ fontSize: 20, color: "white" }}>I rent.</Text>
        </Button>
        <Button
          color="#fff"
          shadowless
          size="large"
          style={styles.buttons}
          onPress={() => navigation.navigate("Q2")}
        >
          <Text style={{ fontSize: 20, color: "white" }}>I own a condo.</Text>
        </Button>
        <Button
          color="#fff"
          shadowless
          size="large"
          style={styles.buttons}
          onPress={() => navigation.navigate("Q2")}
        >
          <Text style={{ fontSize: 20, color: "white" }}>None of the above</Text>
        </Button>
      </View>
    </View>
  );
};

export default Q1;

const styles = StyleSheet.create({
    buttons: {
      height: 100,
      width: 325,
      marginLeft: 30,
      marginBottom: 15,
      backgroundColor: "#383838",
    },
  });