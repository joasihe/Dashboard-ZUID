import * as React from 'react';
import Card from '@material-ui/core/Card';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';

// import { targetForecast as data } from '../demo-data/data-vizualization';

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);

export default class Bar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [{
          name: '',
          target: props.target,
          forecast: props.forecast
      }]
    }
  }

  render() {
    const { data: chartData } = this.state;

      return (
        <Card>
          <div className={'padding-container'}>
          <h2>Target vs. forecast</h2>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis />

            <BarSeries
              name="Target"
              valueField='target'
            argumentField="name"
            color="#94D4ED"
          />
          <BarSeries
            name="Forecast"
            valueField="forecast"
            argumentField="name"
            color="#003752"
          />
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />

          <Stack />
            </Chart>
            </div>
              </Card>
    );
  }
}
