import React, { Component } from 'react';
import MagicBox from '../components/app/MagicBox';

export default class Colors extends Component {
  state = {
    boxColor: '#ee6055',
    watermelonColors: ['#ee6055', '#60d394', '#aaf683', '#ffd97d', '#ff9b85'],
  };

  // watermelonColors = ['#ee6055', '#60d394', '#aaf683', '#ffd97d', '#ff9b85'];

  // color change function
  randomColors = (watermelonColors) => {
    return watermelonColors[
      Math.floor(Math.random() * watermelonColors.length)
    ];
  };

  // change colors every second through interval timer
  componentDidMount() {
    setInterval(() => {
      const { watermelonColors } = this.state;
      const newColor = this.randomColors(watermelonColors);

      this.setState({ boxColor: newColor });
    }, 1000);
  }
  a;
  render() {
    const { boxColor } = this.state;
    return (
      <div>
        <MagicBox color={boxColor} />
      </div>
    );
  }
}
