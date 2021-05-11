import React from 'react';

const MagicBox = ({ color }) => {
  return (
    <div
      style={{
        height: '500px',
        width: '500px',
        border: 'solid 1px black',
        backgroundColor: color,
      }}
    >
      HELLO WORLD
    </div>
  );
};

export default MagicBox;
