import React from "react";
import WeatherCardSubheader from "./WeatherCardSubheader";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  atmospheric: {
    fontSize: "28px",
    padding: "5px",
  },
  buttons: {
    color: "black",
  },
  card: {
    minWidth: 600,
    minHeight: 150,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  error: {
    color: "red",
    padding: "10px",
  },
  fullList: {
    width: "auto",
  },
  layout: {
    marginTop: "10px",
  },

  root: {
    flexiGrow: 1,
    color: "black",
  },
  search: {
    marginTop: "20px",
  },
  wi: {
    color: "#673ab7",
  },
}));

export default function AppLayout(props) {
  const classes = useStyles();
  const { city, currentWeather } = props;

  if (city !== "") {
    return (
      <div className={classes.layout}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <WeatherCard city={city} currentWeather={currentWeather} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const WeatherCard = (props) => {
  const classes = useStyles();
  const { currentWeather } = props;

  return (
    <Card
      className={classes.card}
      style={{
        marginBottom: "5%",
        backgroundColor: "white",
        opacity: "0.7",
      }}
    >
      <CardHeader
        title={currentWeather.city + ", " + currentWeather.country}
        subheader={<WeatherCardSubheader currentWeather={currentWeather} />}
      />
      <CardContent>
        <Typography
          variant="h2"
          className="big-temp"
          color="textPrimary"
          component="h2"
          style={{ fontweight:"bold", paddingTop: "15px" }}
        >
          {Math.round(32 + ((currentWeather.temp - 273) * 9) / 5)}&deg;F
        </Typography>
      </CardContent>
    </Card>
  );
};