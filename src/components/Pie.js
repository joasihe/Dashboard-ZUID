import * as React from 'react';
import Card from '@material-ui/core/Card';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { country: 'Russia', area: 90 },
  { country: 'Canada', area: 10 },
];
export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

      return (
        <Card variant='outlined'>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="area"
            argumentField="country"
          />
          <Title className='test'
            text="Productiviteit"
          />
          <Animation />
              </Chart>
              </Card>
    );
  }
}