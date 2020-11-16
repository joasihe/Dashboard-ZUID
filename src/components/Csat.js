import React from "react";
import GaugeChart from "react-gauge-chart";

const CsatMeter = (props) => {
  const csatToPercentage = (number) => {
    if (number > 5) {
      number = 5;
    }
    let percentage = number / 5;
    return percentage;
  };

  const percentageToCsat = (percentage) => {
    let CsatScore = percentage / 20;
    return CsatScore;
  };

  const dimensions = {
    height: props.height,
  };

  return (
    <GaugeChart
      id='gauge-chart5'
      style={dimensions}
      nrOfLevels={3}
      arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
      colors={["#f02400", "#fc8f00", "#ffee00", "#aeff00", "#1cdb02"]}
      percent={csatToPercentage(props.csat)}
      arcPadding={0.02}
      formatTextValue={(value) => percentageToCsat(value) + ""}
      textColor={"#464A4F"}
    />
  );
};

export default CsatMeter;
