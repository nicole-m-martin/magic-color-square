import React from 'react';

const MagicBox = ({ boxColor }) => {
  return (
    <div
      style={{
        height: '500px',
        width: '500px',
        border: 'solid 1px black',
        background: boxColor,
      }}
    >
      HELLO WORLD
    </div>
  );
};

export default MagicBox;
