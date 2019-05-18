import React from 'react'
import LayoutComponent from '../../components/LayoutComponent'
import DashboardComponent from '../../components/DashboardComponent'
import './index.scss';

export default class Dashboard extends React.PureComponent {
  render() {
    return (
      <LayoutComponent>
        <DashboardComponent />
      </LayoutComponent>
    )
  }
}