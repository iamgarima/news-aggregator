import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import RichLayout from './rich-layout';
import WeatherCard from '../../weather-card';
import { loadData } from '../../../utils';
import config from '../../../config/account_ids.json';

const RichLayoutContainer = () => {
  const [newsData, updateNewsData] = useState({});
  const { code = "en" } = useSelector(state => (state.language || {}))

  useEffect   (() => {
    const getData = async () => {
      const api = `https://gnews.io/api/v3/top-news?lang=${code}&token=${config["gnews_api_key"]}`;
      const topNewsData = await loadData(api);
      updateNewsData(topNewsData);
    };
    getData();
  }, [code]);

  return <RichLayout storiesList={newsData.articles} SlotCardComponent={WeatherCard} />;
};

export default RichLayoutContainer;