import React from 'react';
import configureMockStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme';
import TopicsBar from './topics-bar';
import { Provider } from 'react-redux'

const mockStore = configureMockStore([]);
const store = mockStore({})


describe("TopicsBar", () => {
  it('renders without crashing', () => {
    shallow(<Provider store={store}><TopicsBar /></Provider>);
  });

  it('renders 9 buttons in the bar as there are 9 topics', () => {
    const wrapper = mount(<Provider store={store}><TopicsBar /></Provider>);
    expect(wrapper.find('button').length).toEqual(9);
  });
});