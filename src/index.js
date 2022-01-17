//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";
let stylyingobj = {
  color: ""
};
let heading = "";
const d = new Date();
let hour = d.getHours();

if (hour >= 0 || hour < 12) {
  heading = "Good morning";
  stylyingobj.color = "red";
}

if (hour >= 12 || hour <= 12) {
  heading = "Good Afternoon";
  stylyingobj.color = "green";
}

if (hour >= 6 || hour < 24) {
  heading = "Good evening";
  stylyingobj.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 style={stylyingobj}>{heading}</h1>
  </div>,
  document.getElementById("root")
);
