import React, { useEffect, useState, useRef } from "react";
import { Text, View, StyleSheet, Animated, Button } from "react-native";
import Constants from "expo-constants";

const Progress = () => {
  const counter = useRef(new Animated.Value(0)).current;
  const countInterval = useRef(null);
  const [count, setCount] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    countInterval.current = setInterval(
      () => setCount((old) => old + 25),
      1000
    );

    return () => {
      clearInterval(countInterval);
    };
  }, []);

  useEffect(() => {
    load(count);
    if (count >= 100) {
      setCount(100);
      clearInterval(countInterval);
    }
  }, [count]);

  const load = (count) => {
    Animated.timing(counter, {
      toValue: count,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const width = counter.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Text>Loading....</Text>
      <View style={styles.progressBar}>
        {shouldShow ? (
          <Animated.View
            style={
              ([StyleSheet.absoluteFill], { backgroundColor: "#ff0000", width })
            }
          ></Animated.View>
        ) : null}

      </View>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,

    paddingTop: Constants.statusBarHeight,
    backgroundColor: "black",

    padding: 8,
  },
  progressBar: {
    height: 20,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 5,
  },
  
});
