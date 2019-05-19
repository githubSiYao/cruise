import React from 'react';
import renderer from 'react-test-renderer';
import FooterComponent from '../index';

describe('<FooterComponent />', () => {
  it('FooterComponent Snapshot', () => {
    const component = renderer.create(<FooterComponent/>);
 
    let snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});