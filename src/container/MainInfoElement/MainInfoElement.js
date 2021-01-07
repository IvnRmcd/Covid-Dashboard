import React from "react";
import classes from "./MainInfoElement.module.css";

export default function MainElement(props) {
  return <div className={classes.main}>{props.children}</div>;
}
