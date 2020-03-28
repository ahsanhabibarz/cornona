import axios from "axios";

export const getGlobalCount = setData => {
  axios
    .get("https://coronavirus-19-api.herokuapp.com/all")
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      setData(null);
    });
};

export const getBDCount = (data, setData) => {
  axios
    .get(
      `https://coronavirus-19-api.herokuapp.com/countries/${data.toLowerCase()}`
    )
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      setData(null);
    });
};

export const getCountryList = setData => {
  axios
    .get("https://coronavirus-19-api.herokuapp.com/countries")
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      setData(null);
    });
};
