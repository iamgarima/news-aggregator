import React from 'react';
import RichLayoutContainer from '../story-layouts/rich-layout';
import TopicsBar from '../topics-bar';

const Home = () => {
  return <div>
    <TopicsBar />
    <RichLayoutContainer />
  </div>;
};

export default Home;