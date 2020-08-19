import React from 'react';
import StoryCard from '../../story-card';

import styles from './rich-layout.module.css';

const RichLayout = ({ storiesList = [], SlotCardComponent }) => {
  return <div className={styles.wrapper}>
    <div className={styles.startStories}>
      {storiesList.slice(0, 4).map(story => <StoryCard story={story} css={{ align: "center" }} />)}
    </div>
    <div className={styles.midStories}>
      {storiesList.slice(4, 8).map(story => <StoryCard story={story} />)}
    </div>
    <div className={styles.endStories}>
      <div className={styles.slotWrapper}>
        <SlotCardComponent />
      </div>
      {storiesList.slice(8).map(story => <StoryCard story={story} />)}
    </div>
  </div>;
};

export default RichLayout;