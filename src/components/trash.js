import React, { useState, useEffect } from "react";
import { getBDCount } from "../api/apiCalls";
import AnimatedNumber from "animated-number-react";
import { countries } from "./Countries";
import CanvasJSReact from "../assets/canvas/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function BdUpdateBox() {
  const [data, setData] = useState("");
  const [country, setCountry] = useState("Bangladesh");
  useEffect(() => {
    getBDCount(country, setData);
  }, [country]);
  const onSelectCountry = event => {
    setCountry(event.target.value);
  };

  console.log(data);

  const options = {
    exportEnabled: false,
    animationEnabled: true,
    title: {
      text: `Graphical Overview`
    },
    height: 300,
    data: [
      {
        type: "doughnut",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} : {y}",
        dataPoints: [
          {
            y: data ? data.cases : 0,
            label: "Total Cases",
            color: "#D32F2F"
          },
          {
            y: data ? data.recovered : 0,
            label: "Recovered",
            color: "#388E3C"
          },
          {
            y: data ? data.deaths : 0,
            label: "Deaths",
            color: "#263238"
          }
        ]
      }
    ]
  };

  const formatValue = value => value.toFixed(0);
  let chart = "";
  if (data && data.cases) {
    chart = (
      <div className="pieContainer">
        <CanvasJSChart style={{ height: "100px" }} options={options} />
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="heading">
          <h2>Corona Update In {country}</h2>
        </div>
        <select
          name="country"
          id="country"
          defaultValue={country}
          onChange={onSelectCountry}
        >
          <option>Select</option>
          {countries.map((l, k) => (
            <option key={k} value={l.name}>
              {l.name}
            </option>
          ))}
        </select>
      </div>

      <div className="liveinfo">
        <div className="box" style={{ color: "#C62828" }}>
          <AnimatedNumber
            className="count"
            value={data ? data.cases : 0}
            formatValue={formatValue}
            duration={800}
          />
          <span style={{ background: "#FFEBEE" }}>Total Cases</span>
        </div>
        <div className="box" style={{ color: "#2E7D32" }}>
          <AnimatedNumber
            className="count"
            value={data ? data.recovered : 0}
            formatValue={formatValue}
            duration={800}
          />
          <span style={{ background: "#E8F5E9" }}>Recovered</span>
        </div>
        <div className="box">
          <AnimatedNumber
            className="count"
            value={data ? data.deaths : 0}
            formatValue={formatValue}
            duration={800}
          />
          <span>Deaths</span>
        </div>
        <div className="box">
          <AnimatedNumber
            className="count"
            value={data ? data.todayCases : 0}
            formatValue={formatValue}
            duration={800}
          />
          <span>Today Cases</span>
        </div>
        <div className="devContainer">
          <a href="https://www.facebook.com/habiib4">
            <img src={require("../assets/dev.jpg")} alt="" />
            <div>
              <p>
                This project is built on an open source rest api from git hub.
                So it may not work sometime.
              </p>
            </div>
          </a>
        </div>
        <div className="box">
          <AnimatedNumber
            className="count"
            value={data ? data.todayDeaths : 0}
            formatValue={formatValue}
            duration={800}
          />
          <span>Todays Deaths</span>
        </div>
        <div className="box">
          <AnimatedNumber
            className="count"
            value={data ? data.critical : 0}
            formatValue={formatValue}
            duration={800}
          />
          <span>Critical</span>
        </div>
      </div>
      {chart}
    </div>
  );
}
