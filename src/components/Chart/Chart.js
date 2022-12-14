import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

// Chart 
const Chart = (props) => {
  const dataPointerValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointerValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) =>
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      )}
    </div>
  );
};

export default Chart;
