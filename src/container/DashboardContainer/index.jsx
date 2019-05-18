import React from 'react'
import FrameComponent from '../../components/FrameComponent'
import DashboardComponent from '../../components/DashboardComponent'
import './index.scss';

export default class Dashboard extends React.PureComponent {
  render() {
    return (
      <FrameComponent>
        <DashboardComponent />
      </FrameComponent>
    )
  }
}