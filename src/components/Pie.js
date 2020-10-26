import * as React from "react";
import Card from "@material-ui/core/Card";
import { Chart, PieSeries, Tooltip } from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { EventTracker } from "@devexpress/dx-react-chart";

const calculatorFunction = (number) => {
  return 100 - number;
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { country: "Russia", area: props.percentage },
        { country: "Canada", area: calculatorFunction(props.percentage) },
      ],
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Card>
        <div className={"padding-container"}>
          <h2>Productiviteit</h2>
          <Chart data={chartData} classname={"chart"}>
            <PieSeries valueField="area" argumentField="country" />
            <Animation />
            <EventTracker />
            <Tooltip />
          </Chart>
        </div>
      </Card>
    );
  }
}
