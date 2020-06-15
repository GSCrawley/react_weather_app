import React from "react";
//import WeekContainer from "./WeekContainer";

export default function Error(props) {
  console.log(props);

  const { msg } = props;

  if (msg !== "") {
    return <div>{msg}</div>;
  } else {
    return <div></div>;
  }
}