import React from 'react';

const Separator = type => {
  const getSeparator = () => {
    switch(type) {
      case 'dot': return '.';
      case 'pipe': return '|';
      default: return '.';
    }
  };
  return <div>{getSeparator()}</div>;
};

export default Separator;