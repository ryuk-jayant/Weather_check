import React from "react";
import { FaSun } from "react-icons/fa";
export default function icon() {
  return (
    <div>
      {/* <h1>
        <FaSun />
      </h1> */}

      <img
        alt="img not found"
        className="sm:invisible md:invisible w-20 h-10 "
        src="https://cdn.pixabay.com/photo/2012/05/07/02/14/cloud-47591_960_720.png"
      />
    </div>
  );
}
export function Output(prop) {
  if (prop.show === true) {
    return (
      <div className="flex flex-col text-white justify-center bg-gray-500">
        <h1 className="text-green-600 font-bold text-center ">Weather app</h1>
        <br />

        <h1 className="text-center underline">
          Current details for {prop.name}
        </h1>
        <div className="felx flex justify-center hover:font-bold hover:text-3xl hover:h-20">
          <img className=" w\-10 h-10 " src={prop.photu} alt={prop.msg} />
          <h1 className="text-red-500 hover:">{prop.msg}</h1>
        </div>

        <h1 className="text-center underline  hover:font-bold">
          Time:{prop.time}
        </h1>
        <div className="flex flex-row justify-evenly">
          <ul className="list-disc ">
            <li>Temprature</li>
            <li>Humidity</li>
            <li>Real feel(in celcius)</li>
            <li>Wind Speed(mph)</li>
          </ul>
          <br />
          <ul className="list-none">
            <li>{prop.temp}</li>
            <li>{prop.humid}</li>
            <li>{prop.realfeel} `C</li>
            <li>{prop.windspeed}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-green-600 font-bold text-center hover:text-black ">
          Weather app
        </h1>
      </div>
    );
  }
}
