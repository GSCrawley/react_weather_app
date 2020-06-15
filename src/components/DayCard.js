import React from "react";
var moment = require("moment");
//import "../css";

const DayCard = ({ reading, degreeType }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000;
  newDate.setTime(weekday);

  const celsius = Math.round(reading.main.temp - 273);
  const fahrenheit = Math.round(32 + (celsius * 9) / 5);

  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`;

  return (
    <div className="col-sm-2">
      <div
        className="card"
        style={{ backgroundColor: "rgba(52, 52, 52, alpha)", opacity: "0.7" }}
      >
        <h3 className="card-title">{moment(newDate).format("dddd")}</h3>
        <p className="text-muted">
          {moment(newDate).format("MMMM Do, h:mm a")}
        </p>
        <i className={imgURL}></i>
        <h2>{degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</h2>
        <div className="card-body">
          <p className="card-text" style={descStyle}>
            {reading.weather[0].description}
          </p>
        </div>
      </div>
    </div>
  );
};

const descStyle = {
  fontSize: "12px",
};

export default DayCard;