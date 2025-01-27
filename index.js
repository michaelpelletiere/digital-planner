import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Ensure Tailwind CSS is imported
import DigitalPlanner from "./components/DigitalPlanner";

ReactDOM.render(
  <React.StrictMode>
    <DigitalPlanner />
  </React.StrictMode>,
  document.getElementById("root")
);