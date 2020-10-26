import React, { useState, useEffect } from "react";
import { Pie } from "@reactchartjs/react-chart.js";
import axios from "axios";
import Card from "@material-ui/core/Card";

function PieChart() {
  const [percentage, setPercentage] = useState("");
  const [other, setOther] = useState("");

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
  return (
    <>
      <Card>
        <div className={"padding-container"}>
          <h2>Productiviteit</h2>
          <Pie data={data} width={100} height={83} />
        </div>
      </Card>
    </>
  );
}

export default PieChart;