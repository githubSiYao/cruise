import React from 'react';
import LayoutComponent from '../../components/LayoutComponent'
import MyCruiseComponent from '../../components/MyCruiseComponent'
import './index.scss';

export default class Dashboard extends React.PureComponent {
  render() {
    return (
      <LayoutComponent>
        <MyCruiseComponent />
      </LayoutComponent>
    )
  }
}