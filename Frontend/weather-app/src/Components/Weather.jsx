import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const key = "30205382581a0fd23ae8c530c66caa42";
  const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const [data, setData] = useState({});

  const [city, setCity] = useState("");
  //   console.log(input);

  const getData = () => {
    axios
      .get(`${api}${city}&appid=${key}`)
      .then((res) => {
        console.log(res.data);
        setData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-[80vh] bg-blue-800 p-10 rounded-lg w-sm md:w-lg xl:w-xl flex flex-col  items-center gap-10 ">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search City"
          className="bg-gray-200  border-none outline-none rounded-full p-2"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="cursor-pointer bg-green-600 rounded-full px-8 py-2 text-white"
          onClick={getData}
        >
          Search
        </button>
      </div>

      <div className="text-white text-center">
        <h6 className="text-3xl mb-6 ">Good Morning</h6>
        <h2 className="text-5xl xl:text-7xl mb-6">
          {data?.main?.temp.toFixed(1)}°C
        </h2>

        <div className="flex justify-between gap-8">
          <div className="border-2 mt-10 border-gray-500 rounded-xl p-4 ">
            <h4 className="text-xl">Humidity</h4>
            <p>{data?.main?.humidity}%</p>
          </div>
          <div className="border-2 mt-10 border-gray-500 rounded-xl p-4 ">
            <h4 className="text-xl">Wind</h4>
            <p>{data?.wind?.speed}km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
