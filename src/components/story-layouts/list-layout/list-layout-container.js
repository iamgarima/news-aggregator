import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { loadData } from '../../../utils';
import config from '../../../config/account_ids.json';
import ListLayout from './list-layout';
import { useQueryParams } from '../../../hooks/use-query-params';

const ListLayoutContainer = () => {
  const [newsData, updateNewsData] = useState({});
  const { code = "en" } = useSelector(state => (state.language || {}))
  const queryParams = useQueryParams();
  const query = queryParams.get('query');

  useEffect(() => {
    const getData = async () => {
      const api = `https://gnews.io/api/v3/search?q=${query}&lang=${code}&token=${config["gnews_api_key"]}`;
      const searchNewsData = await loadData(api);
      updateNewsData(searchNewsData);
    };
    getData();
  }, [query, code]);

  return <ListLayout storiesList={newsData.articles} />;
};

export default ListLayoutContainer;