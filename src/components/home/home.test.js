import React from 'react';
import configureMockStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme';
import Home from './home';
import TopicsBar from '../Topics-bar';
import RichLayoutContainer from '../Story-layouts/Rich-layout';
import { Provider } from 'react-redux'

const mockStore = configureMockStore([]);
const store = mockStore({})

/* Commented because can not get access for geolocation from here
 * Come back to figure this out
 */
// describe("App", () => {
//   it('renders without crashing', () => {
//     shallow(<Provider store={store}><Home /></Provider>);
//   });

//   it("contains TopicsBar and RichLayoutContainer", () => {
//     const wrapper = mount(<Provider store={store}><Home /></Provider>);
//     expect(wrapper).toContainReact(<TopicsBar />);
//     expect(wrapper).toContainReact(<RichLayoutContainer />);
//   })
// });
