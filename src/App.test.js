import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import brandsList from '../public/data/brands.json';

Enzyme.configure({ adapter: new Adapter() });

describe('Form Tests', () => {
  const wrapper = mount(<App />),
    brands = Object.values(brandsList);
  // Render disabled button
  test('if Button is initial disabled', () => {
    expect(wrapper.find('form').find('button').prop('disabled')).toEqual(true);
  });
  // Render selects and inputs
  test('render two select inputs on input', () => {
    expect(wrapper.find('select').length).toBe(2);
    expect(wrapper.find('input').length).toBe(1);
  });
  // select right list
  test('first select to contain the brands list', () => {
    wrapper.setState({ brands });
    expect(wrapper.find('form').find('select').at(0).children()
      .at(1)
      .prop('value')).toBe(brands[0]);
  });
  // check if button is not disabled
  test('button is not disabled when keywords', () => {
    wrapper.setState({ keywords: 'search' });
    expect(wrapper.find('form').find('button').prop('disabled')).toEqual(false);
  });
  // check if button is not disabled
  test('button is not disabled when brand is choosen', () => {
    wrapper.setState({ car: { brand: 'brand' } });
    expect(wrapper.find('form').find('button').prop('disabled')).toEqual(false);
  });
});
