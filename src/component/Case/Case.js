import React from "react";
import classes from "./Case.module.css";
import Spinner from "../Spinner/Spinner";

export default function Case(props) {
  function getHigherValue(objectCount) {
    let arr = Object.values(objectCount).map((cases) => cases);
    let highestValue = Math.max(...arr);
    let highestValueIndex = arr.indexOf(highestValue);

    if (highestValueIndex === 0) {
      return (
        <React.Fragment>
          {highestValue} <span className={classes.arrow_down}></span>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        {highestValue} <span className={classes.arrow_up}></span>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.case_information}>
      {props.isloading ? (
        <Spinner />
      ) : (
        <div className={classes.case_number_font}>
          <h3>{props.heading}</h3>
          {getHigherValue(props.stateArray)}
        </div>
      )}
    </div>
  );
}
