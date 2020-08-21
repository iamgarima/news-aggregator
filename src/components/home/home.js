import React from 'react';
import { useDispatch } from "react-redux";
import RichLayoutContainer from '../Story-layouts/Rich-layout';
import TopicsBar from '../Topics-bar';
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