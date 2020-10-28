import React, { useState, useEffect } from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import axios from "axios";
import { Card } from "@material-ui/core";
const options = {
  plugins: {
    datalabels: {
      color: "#fff",
      formatter: function(value){
        return '€' + value;
      },
      labels: {
        title: {
          font: {
            fontFamily: "BarlowCondensed-SemiBold",
            size: "40",
          },
        },
      },
    },
  },
  legend: {
    display: false,
  },
  tooltips: { enabled: false },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontSize: "18",
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          fontFamily: "BarlowCondensed-SemiBold",
          fontSize: 30,
          color: "black",
        },
      },
    ],
  },
};

function VerticalBar() {
  const [target, setTarget] = useState(100);
  const [forecast, setForecast] = useState(200);

  useEffect(() => {
    axios.get("test.json").then(function (response) {
      setTarget(response.data.target);
      setForecast(response.data.forecast);
    });
  });

  const data = {
    label: 'in €',
    labels: ["Target", "Forecast"],
    datasets: [
      {
        data: [target, forecast],
        backgroundColor: ["#003752", "#94D4ED"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 0,
      },
    ],
  };
  return (
    <>
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
