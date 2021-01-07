import React from "react";
import logo from "../../images/COVID-19-icon.png";
import classes from "./Navigation.module.css";
import IconBar from "../IconElements/IconElements";

export default function Navigation() {
  return (
    <React.Fragment>
      <div className={classes.Navigation}>
        <img src={logo} alt="logo" className={classes.covid_image} />
        <ul className={classes.List_elements}>
          <IconBar />
        </ul>
      </div>
    </React.Fragment>
  );
}
