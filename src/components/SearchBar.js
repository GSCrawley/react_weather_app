import React, { Component } from "react";
import { cityConstants } from "../constants/constants";
import { Button } from "@material-ui/core";

//const cityConstant = "";

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    fields: { City: "" },
  };
  onSubmit = (e) => {
    e.preventDefault(); //to prevent by deafult submit of vanilla javascript
    this.props.searchCity(this.state.fields.City); //for adding
    this.setState({ City: "" }); //to clear after adding
  };

  onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let cityConstants = e.target.value;
    this.setState((prevState) => {
      prevState.fields[name] = value;
      return {
        fields: prevState.fields,
      };
    });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <input
          type="text"
          name="City"
          placeholder="Please enter a city ..."
          style={{ flex: "2", marginTop: "50px", marginLeft: "30%" }}
          value={this.state.fields.City || ""} //can't add value prop without onChange
          onChange={this.onChange}
        />
        <Button
          variant="contained"
          color="inherit"
          type="submit"
          onClick={(e) => this.onSubmit(e)}
          className="btn"
          style={{
            flex: 1,
            marginTop: "50px",
            marginRight: "35%",
            marginLeft: "2%",
          }}
        >
          Submit
        </Button>
      </form>
    );
  }
}

export default SearchBar;
