import { StatusBar } from "expo-status-bar";
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert, Text } from "react-native";
import axios from "axios";
import Weather from "./Weather";

//openweather API KEY
const API_KEY = "c063fc65e2d04bc322f39845af13496d";

// class Component를 만들 때 굳이 className을 안 써줘도 됨.
export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      temp,
      condition: weather[0].main,
    });
    console.log(weather[0].main);
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      // const location = await Location.getCurrentPositionAsync();
      // console.log(location.coords.latitude, location.coords.longitude);
      // es6로 변경
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      // console.log(
      //   //"latitude : " + coords.latitude + " , longitude : " + coords.longitude
      //   "latitude : " + latitude + ", longitude : " + longitude
      // );
    } catch (error) {
      Alert.alert("Can't Find You!", "Allow Permission!");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={temp} condition={condition} />
    );
  }
}
