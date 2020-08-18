import React from 'react';
import TimeAgo from 'react-timeago';
import Separator from '../separator';
import styles from './story-card.module.css';


const StoryCard = ({story = {}, opts = {}, css = {}}) => {
  const { title, description, url, image, publishedAt, source: { name:srcName, url:srcUrl } } = story;
  const { showImg = false, showDescription = false } = opts;
  const { align = 'left' } = css;
  
  return <div className={`${styles.wrapper} ${align}`}>
    {showImg && <img src={image} alt={title} />}
    <h3>{title}</h3>
    {showDescription && <p>{description}</p>}
    <div className={styles.sourceWrapper}>
      <a href={srcUrl} target="_blank" rel="noopener noreferrer">
        <div>{srcName}</div>
      </a>
      <Separator />
      <TimeAgo date={publishedAt} />
    </div>
  </div>;
};

export default StoryCard; 