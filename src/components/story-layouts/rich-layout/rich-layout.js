import React from 'react';
import PropTypes from 'prop-types';
import StoryCard from '../../story-card';

import styles from './rich-layout.module.css';

const RichLayout = ({ storiesList = [], SlotCardComponent }) => {
  return <div className={styles.wrapper}>
    <div className={styles.startStories}>
      {storiesList.slice(0, 4).map((story, index) => <StoryCard story={story} css={{ align: "center" }} key={`start-rich-story-card-${index}`} />)}
    </div>
    <div className={styles.midStories}>
      {storiesList.slice(4, 8).map((story, index) => <StoryCard story={story} key={`mid-rich-story-card-${index}`} />)}
    </div>
    <div className={styles.endStories}>
      <div className={styles.slotWrapper}>
        <SlotCardComponent />
      </div>
      {storiesList.slice(8).map((story, index) => <StoryCard story={story} key={`end-rich-story-card-${index}`} />)}
    </div>
  </div>;
};

RichLayout.propTypes = {
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
  })),
  SlotCardComponent: PropTypes.func
};

export default RichLayout;