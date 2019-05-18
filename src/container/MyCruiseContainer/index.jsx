import React from 'react';
import FrameComponent from '../../components/FrameComponent'
import MyCruiseComponent from '../../components/MyCruiseComponent'
import './index.scss';

export default class Dashboard extends React.PureComponent {
  render() {
    return (
      <FrameComponent>
        <MyCruiseComponent />
      </FrameComponent>
    )
  }
}