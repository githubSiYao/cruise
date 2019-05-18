import React from 'react';
import LayoutComponent from '../../components/LayoutComponent'
import HelpComponent from '../../components/HelpComponent'
import './index.scss';

export default class HelpContainer extends React.PureComponent {
  render() {
    return (
      <LayoutComponent>
        <HelpComponent />
      </LayoutComponent>
    )
  }
}