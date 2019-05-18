import React from 'react';
import FrameComponent from '../../components/FrameComponent'
import HelpComponent from '../../components/HelpComponent'
import './index.scss';

export default class HelpContainer extends React.PureComponent {
  render() {
    return (
      <FrameComponent>
        <HelpComponent />
      </FrameComponent>
    )
  }
}