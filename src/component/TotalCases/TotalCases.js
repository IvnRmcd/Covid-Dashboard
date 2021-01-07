import React, { useEffect, useState } from "react";
import axios from "axios";
import Case from "../Case/Case";

export default function TotalCases() {
  const [totalcases, setTotalcases] = useState({ cases: {} });
  const [totaldeaths, setTotaldeaths] = useState({ deaths: {} });
  const [totalrecoveries, setTotalrecoveries] = useState({ recoveries: {} });
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=2")
      .then((response) => {
        setTotalcases(response.data.cases);
        setTotaldeaths(response.data.deaths);
        setTotalrecoveries(response.data.recovered);
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(true));
  }, []);

  return (
    <React.Fragment>
      <Case
        isloading={isloading}
        heading="Total Cases"
        stateArray={totalcases}
      />
      <Case
        isloading={isloading}
        heading="Total Deaths"
        stateArray={totaldeaths}
      />
      <Case
        isloading={isloading}
        heading="Total Recoveries"
        stateArray={totalrecoveries}
      />
    </React.Fragment>
  );
}
