import React from 'react';
import { shallow, mount } from 'enzyme';
import StoryCard from './story-card';

const dummyStory = {
  "title": "Corona crisis sinks Viking Line's half-year results",
  "description": "The company's biggest declines were in the second quarter, when travel restrictions were at their peak, the firm says.",
  "url": "https://yle.fi/uutiset/osasto/news/corona_crisis_sinks_viking_lines_half-year_results/11503424",
  "image": "https://images.gnews.io/70cd96eedea2c5e174d74c4c6fba0c8f",
  "publishedAt": "2020-08-20 02:35:00 UTC",
  "source": {
      "name": "Yle",
      "url": "https://yle.fi"
  }
};

describe("StoryCard", () => {
  it('renders without crashing', () => {
    shallow(<StoryCard story={dummyStory} />);
  });

  it('does not render anything when story is not passed', () => {
    const wrapper = mount(<StoryCard />);
    expect(wrapper).toBeEmptyRender();
  });

  it('renders StoryCard with description when showDescription is passed as true in opts', () => {
    const wrapper = mount(<StoryCard story={dummyStory} opts={{ showDescription: true }} />);
    expect(wrapper.find('#story-description')).toExist();
  });
});