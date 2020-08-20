import React from 'react';
import { useDispatch } from "react-redux";
import RichLayoutContainer from '../story-layouts/rich-layout';
import TopicsBar from '../topics-bar';
import { updatePageType } from '../../actions/page-type';

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updatePageType("home-page"));

  return <>
    <TopicsBar />
    <RichLayoutContainer />
  </>;
};

export default Home;