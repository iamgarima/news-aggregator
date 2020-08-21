import React from 'react';
import PropTypes from 'prop-types';
import StoryCard from '../../Story-card';

import styles from './rich-layout.module.css';

const RichLayout = ({ storiesList = [], SlotCardComponent }) => {
  return <div className={styles.wrapper}>
    <div className={styles.slotWrapper}>
      <SlotCardComponent />
    </div>
    {storiesList.map((story, index) => <StoryCard story={story} key={`start-rich-story-card-${index}`} />)}
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