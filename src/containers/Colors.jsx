import React, { Component } from 'react';
import MagicBox from '../components/app/MagicBox';

export default class Colors extends Component {
  state = {
    color: 'black',
  };

  watermelonColors = ['ee6055', '60d394', 'aaf683', 'ffd97d', 'ff9b85'];

  // color change function
  randomColors = (watermelonColors) => {
    const color =
      watermelonColors[Math.floor(Math.random() * watermelonColors.length)];
    return color;
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        boxColor: this.randomColors(),
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <MagicBox color={this.state.boxColor} />
      </div>
    );
  }
}
