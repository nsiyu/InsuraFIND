import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Button } from "galio-framework";
import { Image } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <View style={styles.container}>
        <Image
          source={require("./assets/logo.png")}
          style={{ width: 60, height: 60 }}
        ></Image>
        <Text style={styles.head}>StateFarm</Text>
        <Text style={styles.text}>InsuraFIND</Text>
        <StatusBar style="auto" />
        <Button
          onPress={() => navigation.navigate("Started")}
          color="#383838"
          shadowless
          size="large"
          style={{ height: 100, width: 325, marginLeft: -5 }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>
            Let's get started!
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: "50%",
    marginLeft: "10%",
  },
  text: {
    color: "#fff",
    fontSize: "40",
    fontWeight: "700",
    marginBottom: "40%",
  },
  head: {
    color: "#fff",
    fontSize: "50",
    fontWeight: "900",
  },
});
