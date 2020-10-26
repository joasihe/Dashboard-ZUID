import React, { useState, useEffect } from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import axios from "axios";
import { Card } from "@material-ui/core";
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function VerticalBar() {
  const [target, setTarget] = useState("");
  const [forecast, setForecast] = useState("");

  useEffect(() => {
    axios.get("test.json").then(function (response) {
      setTarget(response.data.target);
      setForecast(response.data.forecast);
    });
  });

  const data = {
    labels: ["Target", "Forecast"],
    datasets: [
      {
        label: 'in €',
        data: [target, forecast],
        backgroundColor: ["#003752", "#94D4ED"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 0,
      },
    ],
  };
  return (
    <>
      {" "}
      <Card>
        <div className={"padding-container"}>
          <h2>Target vs Forecast</h2>
          <Bar data={data} options={options} width={50} height={30} />
        </div>
      </Card>
    </>
  );
}

export default VerticalBar;
