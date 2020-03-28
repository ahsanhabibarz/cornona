import React, { useState, useEffect } from "react";
import { getBDCount } from "../api/apiCalls";
import AnimatedNumber from "animated-number-react";
import { countries } from "./Countries";
import { Pie } from "react-chartjs-2";

export default function BdUpdateBox() {
  const [data, setData] = useState("");
  const [country, setCountry] = useState("Bangladesh");
  useEffect(() => {
    getBDCount(country, setData);
  }, [country]);
  const onSelectCountry = event => {
    setCountry(event.target.value);
  };

  var legendOpts = {
    display: true,
    position: "right",
    fullWidth: true,
    reverse: false,
    labels: {
      fontColor: "#000"
    }
  };

  let chartData = {
    labels: ["Cases", "Recovered", "Deaths"],
    datasets: [
      {
        data: [
          data ? data.cases : 0,
          data ? data.recovered : 0,
          data ? data.deaths : 0
        ],
        backgroundColor: ["#F57C00", "#2E7D32", "#D32F2F"],
        borderWidth: 0,
        hoverBackgroundColor: ["#F57C00", "#2E7D32", "#D32F2F"]
      }
    ]
  };

  const formatValue = value => value.toFixed(0);
  let chart = "";
  if (data && data.cases) {
    chart = (
      <div className="pieContainer">
        <Pie data={chartData} legend={legendOpts} height={128} />
      </div>
    );
  }

  return (
    <div>
      <div>
        <div
          className="heading"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h2 style={{ marginRight: "1rem" }}>করোনা ডেটা </h2>
          <img
            style={{
              marginTop: "0.275rem"
            }}
            src={`https://www.countryflags.io/${
              countries.find(x => x.name === country).code
            }/flat/32.png`}
            alt=""
          ></img>
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
        <div className="box" style={{ color: "#F57C00" }}>
          <AnimatedNumber
            className="count"
            value={data ? data.cases : 0}
            formatValue={formatValue}
            duration={800}
          />
          <span style={{ background: "#FFF3E0" }}>আক্রান্ত</span>
        </div>
        <div className="box" style={{ color: "#2E7D32" }}>
          <AnimatedNumber
            className="count"
            value={data ? data.recovered : 0}
            formatValue={formatValue}
            duration={800}
          />
          <span style={{ background: "#E8F5E9" }}>আরোগ্য লাভ</span>
        </div>
        <div className="box" style={{ color: "#C62828" }}>
          <AnimatedNumber
            className="count"
            value={data ? data.deaths : 0}
            formatValue={formatValue}
            duration={800}
          />
          <span style={{ background: "#FFEBEE" }}>মৃত্যু</span>
        </div>
        <div className="box">
          <AnimatedNumber
            className="count"
            value={data ? data.todayCases : 0}
            formatValue={formatValue}
            duration={800}
          />
          <span>আজকের সংক্রামণ</span>
        </div>
        <div className="box">
          <AnimatedNumber
            className="count"
            value={data ? data.todayDeaths : 0}
            formatValue={formatValue}
            duration={800}
          />
          <span>আজকের মৃত্যু</span>
        </div>
        <div className="box" style={{ color: "#F57C00" }}>
          <AnimatedNumber
            className="count"
            value={data ? data.critical : 0}
            formatValue={formatValue}
            duration={800}
          />
          <span style={{ background: "#FFE0B2" }}>সংকটপূর্ণ রোগী</span>
        </div>
      </div>
      {chart}
      <div className="devContainer">
        <a href="https://www.facebook.com/habiib4">
          <img src={require("../assets/dev.jpg")} alt="" />
          <div>
            <p>
              প্রোজেক্টটি একটি ওপেন সোর্স গিটহাব এপিয়াই থেকে ডেটা নিয়ে বিল্ড
              করা। ভুল ত্রুটি ক্ষমার দৃষ্টিতে দেখবেন। আল্লাহ সবাইকে হেফাজতে
              রাখুখ।
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
