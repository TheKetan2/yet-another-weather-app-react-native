import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import key from "../../key";

export default class Details extends Component {
  componentDidMount() {
    // console.log(key);
    //api.openweathermap.org/data/2.5/weather?zip=94040,us
    const zipcode = 37064;
    fetch(
      `https://samples.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${key}&units=imperial`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(
      `https://samples.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&appid=${key}&units=imperial`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("forecast: ", response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
