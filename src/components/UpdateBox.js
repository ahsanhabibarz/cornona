import React, { useState, useEffect } from "react";
import { getGlobalCount } from "../api/apiCalls";
import AnimatedNumber from "animated-number-react";

export default function UpdateBox() {
  const [data, setData] = useState("");
  useEffect(() => {
    getGlobalCount(setData);
  }, []);
  const formatValue = value => value.toFixed(0);
  return (
    <div>
      <div className="heading">
        <h2>বিশ্বব্যাপী করোনা ডেটা</h2>
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
      </div>
    </div>
  );
}
