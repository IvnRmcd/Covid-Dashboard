import React from "react";
import classes from "./Spinner.module.css";

export default function Spinner() {
  return (
    <React.Fragment>
      <div className={classes.loader}>Loading...</div>
    </React.Fragment>
  );
}
