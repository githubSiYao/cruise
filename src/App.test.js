import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme'

describe('Test APP.js', () => {
  it('App component should not be a empty render', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.isEmptyRender()).toBe(false)
  })

  it('APP component should render a layout', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find('div.container').length).toBe(1)
  })
})
