import React from 'react';
import PropTypes from 'prop-types';
import styles from './separator.module.css';

/* Renders a separator based on the type passed
 * Defaults to dot when type is not passed
 */ 
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

Separator.propTypes = {
  type: PropTypes.string
};

export default Separator;