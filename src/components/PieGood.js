import React, { useState, useEffect } from "react";
import { Pie } from "@reactchartjs/react-chart.js";
import axios from "axios";
import Card from "@material-ui/core/Card";
import "chartjs-plugin-datalabels";

function PieChart() {
  const [percentage, setPercentage] = useState(90);
  const [other, setOther] = useState(10);

  useEffect(() => {
    axios.get("test.json").then(function (response) {
      setPercentage(response.data.percentage);
      let other = 100 - response.data.percentage;
      setOther(other);
    });
  });

  const data = {
    labels: ["Intern", "Declarabel"],
    datasets: [
      {
        data: [percentage, other],
        backgroundColor: ["#F49D87", "#FACDB8"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    legend: {
      labels: {
        fontFamily: "BarlowCondensed-SemiBold",
        fontSize: 24,
      },
    },
    tooltips: { enabled: false },
    responsive: true,
    plugins: {
      datalabels: {
        color: "#fff",
        labels: {
          title: {
            font: {
              fontFamily: "BarlowCondensed-SemiBold",
              size: "32",
            },
          },
        },
      },
    },
  };

  return (
    <>
      <Card>
        <div className={"padding-container"}>
          <h2>Productiviteit</h2>
          <Pie data={data} width={100} height={70} options={options} />
        </div>
      </Card>
    </>
  );
}

export default PieChart;
