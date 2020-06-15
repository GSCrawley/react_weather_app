import React from "react";
// import from "./css";
import AppLayout from "./AppLayout";

var moment = require("moment");

export default function TodaysWeather(props) {
  const { city, currentWeather } = props;
  if (currentWeather) {
    // const prefix = "wi wi-";
    // const icon = prefix + weatherIcons.default[currentWeather.icon_id].icon;
    // const recommendation =
    //   recommendations.default[currentWeather.icon_id].recommendation;

    return (
      <div>
        <AppLayout city={city} currentWeather={currentWeather} />
      </div>
    );
  }
}