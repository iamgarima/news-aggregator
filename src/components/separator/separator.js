import React from 'react';
import styles from './separator.module.css';

const Separator = type => {
  const getSeparator = () => {
    switch(type) {
      case 'dot': return '.';
      case 'pipe': return '|';
      default: return '.';
    }
  };
  return <div className={styles.separator}>{getSeparator()}</div>;
};

export default Separator;