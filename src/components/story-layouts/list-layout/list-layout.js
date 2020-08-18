import React from 'react';
import StoryCard from '../../story-card';

import styles from './list-layout.module.css';

const ListLayout = ({ storiesList = [] }) => {
  return <div className={styles.wrapper}>
      {storiesList.map(story => <StoryCard story={story} />)}
    </div>;
};

export default ListLayout;