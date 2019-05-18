import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import logo from '../../logo.svg'

export default class HeaderComponent extends React.PureComponent {
  constructor(props) {
    super(props)

    // define user menu list data
    this.menu = [
      { icon: 'icon-id-card', label: 'Profile' },
      { icon: 'icon-sign-in', label: 'Sign Out' }
    ]
    this._renderUserMenuList = this._renderUserMenuList.bind(this)
  }

  // render user menu list
  _renderUserMenuList() {
    return (
      <div className="header__user-menu-area">
        <div className="header__user-avatar">
          <span className="header__user-avatar-img"></span>
          <span className="iconfont icon-angle-down"></span>
        </div>
        <ul className="header__user-menu-list">
          {this.menu.map((item, index) => (
            <li className="header__user-menu-list-item" key={index}>
              <span className={`iconfont ${item.icon}`}></span>
              <span className="header__user-menu-list-item-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Cruise" />
          </Link>
          {this._renderUserMenuList()}
        </div>
      </header>
    )
  }
}