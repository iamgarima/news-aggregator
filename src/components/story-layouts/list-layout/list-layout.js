import React from 'react';
import PropTypes from 'prop-types';
import StoryCard from '../../Story-card';

import styles from './list-layout.module.css';

const ListLayout = ({ storiesList = [] }) => {
  return <div className={styles.wrapper}>
      {storiesList.map((story, index) => <StoryCard story={story} key={`list-story-card-${index}`} />)}
    </div>;
};

ListLayout.propTypes = {
  storiesList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string, 
    description: PropTypes.string, 
    url: PropTypes.string, 
    image: PropTypes.string, 
    publishedAt: PropTypes.string, 
    source: PropTypes.shape({ 
      name: PropTypes.string, 
      url: PropTypes.string
    })
  }))
};

export default ListLayout;