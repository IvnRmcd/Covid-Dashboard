import React, {useEffect, useState } from "react";
import axios from "axios";
import classes from "./Map.module.css";
import { MapContainer, GeoJSON } from "react-leaflet";
import MapData from "../../../src/Data/countries.json";
import "leaflet/dist/leaflet.css"
import "./map.css"
import Spinner from "../Spinner/Spinner";

export default function Map() {
    const [covidData, setcovidData] = useState(null)
    const [isLoading, setisLoading] = useState(true)

    const countryStyle = {
        landMass:{
            fillColor: 'red',
            color:'black',
            weight: 1,
        }
    }

useEffect( () => {
  const getData = async () => {
      await axios.get('https://disease.sh/v3/covid-19/countries').then(response => {
      setcovidData(response.data)
      setisLoading(false)
    })
    .catch(setisLoading(true))
  }
  getData()
},[])


const returnCaseData = (event) => {
 covidData.map(item => {
  if (event.target.feature.properties.ADMIN === item.country){
    console.log(item.cases)
    return item
  }
  return item.cases
})
}


 const onEachCountry = (feature, layer) => {
       const ISO = feature.properties.ISO_A3
        layer.bindPopup(ISO)

        layer.on({
          click:  returnCaseData,
          
        })
    }

    const map =  
    <MapContainer style={{ height:"80%", width:"65%" }} zoom={1.5} center={[30,30]}>
        <GeoJSON 
        style={countryStyle.landMass} 
        data={MapData} 
        onEachFeature={onEachCountry}/>
      </MapContainer>

  return (
    <div className={classes.Map}>
      <p className={classes.Headings}>Covid - 19 World Map</p>
      {isLoading ? <Spinner/> : map}
    </div>
  );
}