import React, { useState, useEffect } from "react";
import { getCountryList } from "../api/apiCalls";
import classnames from "classnames";

export default function CountryList() {
  const [data, setData] = useState("");
  useEffect(() => {
    getCountryList(setData);
  }, []);

  return (
    <div className="countryList">
      <div className="dataTableContainer">
        <table id="countriesTable" cellSpacing="0">
          <thead>
            <tr>
              <th>দেশ</th>
              <th>আক্রান্ত</th>
              <th>আরোগ্য লাভ</th>
              <th>মৃত্যু</th>
              <th>আজকের মৃত্যু</th>
              <th>সংকটপূর্ণ রোগী</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.slice(0, 20).map((l, k) => (
                <tr key={k}>
                  <td>{l.country}</td>
                  <td>{l.cases}</td>
                  <td>{l.recovered}</td>
                  <td>{l.deaths}</td>
                  <td
                    className={classnames("", {
                      alert: l.todayDeaths > 0
                    })}
                  >
                    {l.todayDeaths}
                  </td>
                  <td>{l.critical}</td>
                </tr>
              ))
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
