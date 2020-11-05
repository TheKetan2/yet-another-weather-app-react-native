import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import key from "../../key";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
    };
  }
  componentDidMount() {
    // console.log(key);
    //api.openweathermap.org/data/2.5/weather?zip=94040,us
    const zipcode = 37064;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${key}&units=imperial`
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log("response", response);
        this.setState({
          weather: response,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&appid=${key}&units=imperial`
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log("forecast: ", response);
      })
      .catch((err) => {
        console.log(err);
      });

    navigator.geolocation.getCurrentPosition((position) => {
      console.log("position: ", position);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.weather ? (
          <>
            <Text>City: {this.state.weather.name}</Text>
            <Text>Country: {this.state.weather.sys.country}</Text>
            <Text>Temperature: {this.state.weather.main.feels_like}</Text>
            <Text>Max Temperature: {this.state.weather.main.temp_max}</Text>
            <Text>Min Temperature: {this.state.weather.main.temp_min}</Text>

            <Text>Humidity: {this.state.weather.main.humidity}</Text>
          </>
        ) : (
          <Text>Loading</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
