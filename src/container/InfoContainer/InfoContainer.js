import React from "react";
import classes from "./InfoContainer.module.css";

export default function Container(props) {
  return <div className={classes.info_area}>{props.children}</div>;
}
