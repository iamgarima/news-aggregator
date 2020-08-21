import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import StoryCard from '../../Story-card';

import styles from './rich-layout.module.css';

/* Renders a list of Story cards in grid format with the top right slot reserved for a widget/card 
 * Input: storiesList, SlotCardComponent
 *   storiesList - list of stories/articles data
 *   SlotCardComponent - Component to render in the available top right slot
 */
const RichLayout = ({ storiesList = [], SlotCardComponent }) => {
  const geolocation = useSelector(state => state.geolocation);
  const isGeolocationSuccess = geolocation && geolocation.status !== "error";

  // If no geolocation access then pick 9 stories from the list for good UI
  // Update this later when we have access to more stories
  const updatedStoriesList = !isGeolocationSuccess ? storiesList.slice(0, 9) : storiesList;

  return <div className={styles.wrapper}>
    { isGeolocationSuccess && <div className={styles.slotWrapper}>
      <SlotCardComponent />
    </div>}
    {updatedStoriesList.map((story, index) => <StoryCard story={story} key={`start-rich-story-card-${index}`} />)}
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