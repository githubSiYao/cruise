import React from 'react'
import HeaderComponent from '../HeaderComponent'
import MenuComponent from '../MenuComponent'
import HistoryComponent from '../HistoryComponent'
import FooterComponent from '../FooterComponent'
import './index.scss'

export default class ContainerComponent extends React.Component {
  constructor(props) {
    super(props)

    this.menu = [
      { to: '/index', icon: 'icon-dashboard', name: 'DASHBOARD' },
      { to: '/agent', icon: 'icon-sitemap', name: 'AGENT' },
      { to: '/mycruise', icon: 'icon-boat', name: 'MY CRUISE' },
      { to: '/help', icon: 'icon-life-bouy', name: 'HELP' }
    ]

    this.history = [
      'bjstdmngbdr01/Acceptance_test',
      'bjstdmngbdr02/Acceptance_test',
      'bjstdmngbdr03/Acceptance_testzsdfsdfsdjfkjsdkfj',
      'bjstdmngbdr04/Acceptance_test',
      'bjstdmngbdr05/Acceptance_test',
      'bjstdmngbdr06/Acceptance_test',
      'bjstdmngbdr07/Acceptance_test',
      'bjstdmngbdr08/Acceptance_test',
      'bjstdmngbdr09/Acceptance_test',
    ]
  }

  render() {
    return (
      <div className="container">
        <HeaderComponent></HeaderComponent>
        <div className="wrapper">
          <div className="left-side">
            <MenuComponent data={this.menu}></MenuComponent>
            <HistoryComponent data={this.history}></HistoryComponent>
          </div>
          <div className="right-side">
            {this.props.children}
          </div>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}
