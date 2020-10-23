import React, { useState, useEffect } from 'react';
import GaugeChart from 'react-gauge-chart';


const CsatMeter = (props) => {
    const [Sentence, setSentence] = useState('bo');

    const csatToPercentage = (number) => {
      if (number > 5) {
        number = 5;
      }
      let percentage = number / 5;
      return percentage;
    }

    const percentageToCsat = (percentage) => {
      let CsatScore = percentage / 20;
      return CsatScore;
    }

    const handleSentence = (number) => {
      if (number < 3) {
        setSentence('kankerslecht');
      }
      else {
        setSentence('pffff');
      }
    }


    return (
      <div className="App">
        <header className="App-header">
          <GaugeChart id="gauge-chart5"
            nrOfLevels={3}
            arcsLength={[0.2, 0.4, 0.2, 0.2, 0.1]}
            colors={['#E40133', '#003752', '#94D4ED']}
            percent={csatToPercentage(props.csat)}
            arcPadding={0.02}
            formatTextValue={value => percentageToCsat(value) +''}
            // needleColor={'#FFED00'}
            // needleBaseColor={'#FFED00'}
            textColor={'#464A4F'}
          />
          {/* <p>{Sentence}</p>
          <button onClick={() => handleSentence(5)}>Klik hier</button> */}

        </header>

      </div>
    );
  }

  export default CsatMeter;