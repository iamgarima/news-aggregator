import React from 'react';
import { MemoryRouter } from 'react-router';
import configureMockStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme';
import Header from './header';
import { Provider } from 'react-redux'

const mockStore = configureMockStore([]);
const store = mockStore({})


describe("Header", () => {
  it('renders without crashing', () => {
    shallow(<Provider store={store}><MemoryRouter><Header /></MemoryRouter></Provider>);
  });

  it('renders search input box', () => {
    const wrapper = mount(<Provider store={store}><MemoryRouter><Header /></MemoryRouter></Provider>);
    expect(wrapper.find('input')).toExist();
  });
});