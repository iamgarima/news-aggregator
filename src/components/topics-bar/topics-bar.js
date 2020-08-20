import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './topics-bar.module.css';
import { topicsList } from './topics-list';
import { updateTopic } from '../../actions/topic';

const TopicsBar = () => {
  const [activeTopic, updateActiveTopic] = useState('top-news');
  const dispatch = useDispatch();

  const clickHandler = e => {
    updateActiveTopic(e.target.value);
    dispatch(updateTopic(e.target.value));
  };

  const topicItem = topic => {
    const topicLabel = topic.replace("-", " ");
    return <button className={`${styles.topicBtn} ${topic === activeTopic ? styles.active : ""}`} onClick={clickHandler} key={topic} value={topic}>{topicLabel}</button>
  };
  
  return <div className={styles.topicsWrapper}>
    {topicItem("top-news")}
    {topicsList.map(topic => topicItem(topic))}
  </div>
};

export default TopicsBar;