import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import RichLayout from './rich-layout';
import WeatherCard from '../../Weather-card';
import { loadData } from '../../../utils/utils';
import config from '../../../config/account_ids.json';

const RichLayoutContainer = () => {
  const [newsData, updateNewsData] = useState({});
  const { code = "en" } = useSelector(state => (state.language || {}));
  const topic = useSelector(state => state.topic);

  useEffect(() => {
    const getData = async () => {
      const topicPath = topic !== "top-news" ? "/topics": "";
      const api = `https://gnews.io/api/v3${topicPath}/${topic}?lang=${code}&token=${config["gnews_api_key"]}`;
      const topNewsData = await loadData(api);
      updateNewsData(topNewsData);
    };
    getData();
  }, [code, topic]);

  return <RichLayout storiesList={newsData.articles} SlotCardComponent={WeatherCard} />;
};

export default RichLayoutContainer;