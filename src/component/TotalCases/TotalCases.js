import React, { useEffect, useState } from "react";
import axios from "axios";
import Case from "../Case/Case";
import Spinner from "../Spinner/Spinner";

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
      <Case isloading={isloading} heading={item[0]} stateArray={item[1]} />
    );
  });

  return (
    <React.Fragment>
      {isloading ? <Spinner /> : <React.Fragment> {caseInfo}</React.Fragment>};
    </React.Fragment>
  );
}
