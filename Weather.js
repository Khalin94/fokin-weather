import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#215f00", "#e4e4d9"],
    title: "Smoke",
    subtitle: "drizzle is so Bad!",
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["", ""],
    title: "",
    subtitle: "",
  },
  Drizzle: {
    iconName: "weather-cloudy-alert",
    gradient: ["", ""],
    title: "",
    subtitle: "",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["", ""],
    title: "",
    subtitle: "",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["", ""],
    title: "",
    subtitle: "",
  },
  Atmosphere: {
    iconName: "weather-sunset",
    gradient: ["", ""],
    title: "",
    subtitle: "",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["", ""],
    title: "",
    subtitle: "",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["", ""],
    title: "Cloudy",
    subtitle: "really dark outSide!",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        {/* <MaterialCommunityIcons name="weather-cloudy" size={90} color="white" /> */}
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={90}
          color="white"
        />
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Smoke",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 30,
    color: "white",
  },
  title: {
    fontSize: 30,
    fontWeight: "400",
    color: "white",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    textAlign: "left",
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingBottom: 20,
  },
});
