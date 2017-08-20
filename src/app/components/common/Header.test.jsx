import React from 'react';
import Header from './Header.jsx';
import { shallow } from 'enzyme';

describe('Header component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
  });
});
