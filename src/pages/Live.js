import React from "react";
import UpdateBox from "../components/UpdateBox";
import BdUpdateBox from "../components/BdUpdateBox";
import CountryList from "../components/CountryList";

export default function Live() {
  return (
    <div className="liveContainer">
      <div className="left">
        <UpdateBox />
        <CountryList />
      </div>
      <div>
        <BdUpdateBox />
      </div>
    </div>
  );
}
