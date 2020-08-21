import React from 'react';
import { shallow, mount } from 'enzyme';
import Separator from './separator';

describe("Separator", () => {
  it('renders without crashing', () => {
    shallow(<Separator />);
  });

  it('renders a separator based on the specified type', () => {
    const wrapper = mount(<Separator type="pipe" />);
    expect(wrapper.find('#separator')).toHaveText('|');
  });

  it('renders a dot separator as default when type is not passed', () => {
    const wrapper = mount(<Separator />);
    expect(wrapper.find('#separator')).toHaveText('.');
  });
});