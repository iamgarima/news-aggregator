import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import Separator from '../Separator';
import styles from './story-card.module.css';


const StoryCard = ({story = {}, opts = {}, css = {}}) => {
  const { title, description, url, image, publishedAt, source: { name:srcName, url:srcUrl } } = story;
  const { showImg = false, showDescription = false } = opts;
  const { align = 'left' } = css;

  return (<div className={`${styles.wrapper} ${styles[align]}`}>
    <a href={url} target="_blank" rel="noopener noreferrer">
      {showImg && <img src={image} alt={title} />}
      <h3 className={styles.title}>{title}</h3>
      {showDescription && <div className={styles.description}>{description}</div>}
    </a>
    <div className={styles.sourceWrapper}>
      <a href={srcUrl} target="_blank" rel="noopener noreferrer">
        <div className={styles.srcName}>{srcName}</div>
      </a>
      <div className={styles.separator}>
        <Separator />
      </div>
      <div className={styles.publishTime}>
        <TimeAgo date={publishedAt} />
      </div>
    </div>
  </div>);
};

StoryCard.propTypes = {
  story: PropTypes.shape({
    title: PropTypes.string, 
    description: PropTypes.string, 
    url: PropTypes.string, 
    image: PropTypes.string, 
    publishedAt: PropTypes.string, 
    source: PropTypes.shape({ 
      name: PropTypes.string, 
      url: PropTypes.string
    })
  }),
  opts: PropTypes.shape({
    showImg: PropTypes.bool,
    showDescription: PropTypes.bool
  }),
  css: PropTypes.shape({
    align: PropTypes.string
  }),
};

export default StoryCard; 