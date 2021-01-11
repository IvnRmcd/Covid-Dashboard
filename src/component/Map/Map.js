import React from "react";
import classes from "./Map.module.css";
import { MapContainer, GeoJSON } from "react-leaflet";
import MapData from "../../../src/Data/countries.json";
import "leaflet/dist/leaflet.css"

export default function Map() {

  return (
    <div className={classes.Map}>
      <p className={classes.Headings}>Covid - 19 World Map</p>
      <MapContainer style={{ height:"80%", width:"65%" }} zoom={1.5} center={[30,30]}>
        <GeoJSON data={MapData.features} />
      </MapContainer>
    </div>
  );
}