import React from 'react';
import configureMockStore from 'redux-mock-store'
import { mount } from 'enzyme';
import WeatherCard from './weather-card';
import { Provider } from 'react-redux'

const mockStore = configureMockStore([]);
const store = mockStore({})

// Have not added render tests as can not get access for geolocation from here
describe("WeatherCard", () => {
  it('does not render anything if error occurs while fetching geolocation', () => {
    const wrapper = mount(<Provider store={store}><WeatherCard /></Provider>);
    expect(wrapper).toBeEmptyRender();
  });

  it('does not render anything if weather data is not available', () => {
    const wrapper = mount(<Provider store={store}><WeatherCard /></Provider>);
    expect(wrapper).toBeEmptyRender();
  });
});