import React, { Component } from 'react';
import MagicBox from '../components/app/MagicBox';

export default class Colors extends Component {
  state = {
    startColor: '#00000',
  };

  render() {
    const { startColor } = this.state;

    return (
      <div>
        <MagicBox color={startColor} />
      </div>
    );
  }
}
