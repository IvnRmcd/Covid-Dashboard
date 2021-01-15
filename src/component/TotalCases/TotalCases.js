import React, { useEffect, useState } from "react";
import axios from "axios";
import Case from "../Case/Case";
import Spinner from "../Spinner/Spinner";
import classes from "./TotalCases.module.css";

export default function TotalCases() {
  const [cases, setCases] = useState({});
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=2")
      .then((response) => {
        setCases(response.data);
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(true));
  }, []);

  const caseInfo = Object.entries(cases).map((item) => {
    return (
      <Case isloading={isloading} heading={item[0]} stateArray={item[1]} key={Math.random() *10}/>
    );
  });

  return (
    <div className={classes.Dashboard_A}>
      {isloading ? <Spinner /> : <React.Fragment> {caseInfo}</React.Fragment>}
    </div>
  );
}
