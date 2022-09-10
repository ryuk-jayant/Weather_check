import React, { useState } from "react";
import { get } from "request";

import Icon, { Output } from "./icon.js";
//import Output from "./navbar";

function Main() {
  let [clicked, clk] = useState(false);
  let [value, placename] = useState("");
  let [temp, ontemp] = useState("not def");
  let [time, ontime] = useState(0);
  let [humid, onhumid] = useState(0);
  let [ws, onws] = useState(0);
  let [real_feel, onreal_f] = useState(0);
  let [w_icon, onw_icon] = useState(0);
  let [w_msg, onw_msg] = useState(0);
  //let [cross,oncross]=useState(false);
  function HandelSubmit() {
    let name;
    placename((name = String(value)));
    //api call will be made hear
    let url = name;
    //   "https://api.weatherapi.com/v1/current.json?key=e7922bed5f094eb488a135318222405 &q=" +
    //   { value };
    var website = {
      uri: `https://api.weatherapi.com/v1/current.json?key=e7922bed5f094eb488a135318222405 &q=${encodeURIComponent(
        url
      )} &aqi=no`,
      method: "GET",

      origin: "https://skp841.csb.app/"
    };
    // fetch(website).then((resp) => {
    //   resp.json().then((result) => {
    //     console.log(result);
    //   });
    // });
    console.log({ value });
    get(website, (err, res, body) => {
      if (err) {
        console.log("Errrr..\n" + err + body);
      } else if (res.statusCode === 200) {
        let json = JSON.parse(body);
        console.log(json);
        onw_icon(json.current.condition.icon);
        ontemp(json.current.temp_c + " `C");
        ontime(json.location.localtime);
        onws(json.current.wind_mph);
        onreal_f(json.current.feelslike_c);
        onhumid(json.current.humidity);
        onw_msg(json.current.condition.text);
      } else {
        onw_icon(0);
        ontemp(0);
        ontime(res.headers.Date);
        onws(0);
        onreal_f(0);
        onhumid(0);
        onw_msg("location is not found!!");
        console.warn(body);
        alert("please enter correct details as place name is not spoted ");
      }
    });
    // ontemp("78");
    // ontime((time = 46));
    clk((clicked = true));
  }

  return (
    <div>
      <header className="flex  bg-gradient-to-r from-green-500 to-green-700 justify-center sticky box-border h-32 w-{60px} p-4 border-4">
        <div className="flex flex- ">
          <div className="bg-green-500 shadow-md hover:bg-gradient-to-l p-[10px]">
            <h1 className="text-white font-bold h-15 text-center shadow-md">
              How's the Mausam
            </h1>
            <Icon />
          </div>
          <br />
          <div className="flex flex-col">
            <input
              onChange={(e) => {
                placename((value = e.target.value));
              }}
              value={value}
              type="text"
              placeholder="enter your city name:"
              className="bg-gray-200 h-[50px] hover:text-blue-700 hover:font-bold"
            ></input>
            <button
              className="bg-gray-700 h-11 hover:bg-gray-900 text-white hover:text-red-500"
              onClick={() => {
                HandelSubmit();
                //ontemp(78);
                console.log("click!");
              }}
              type="button"
            >
              submit hear!
            </button>
          </div>
        </div>
      </header>
      <div>
        <button
          type="button"
          onClick={() => {
            if (clicked === true) {
              clk((clicked = false));
            } else {
              clk((clicked = true));
            }
          }}
          className="bg-gray-700 hover:bg-gray-200 absolute right-[10px]"
        >
          X
        </button>
      </div>
      <Output
        show={clicked}
        temp={temp}
        humid={humid}
        name={value}
        time={time}
        realfeel={real_feel}
        windspeed={ws}
        photu={w_icon}
        msg={w_msg}
      />
    </div>
  );
}
export default Main;
