import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

export default class MenuComponent extends React.PureComponent {

  constructor(props) {
    super(props)

    this._renderMenuItem = this._renderMenuItem.bind(this)
  }

  // render menu items
  _renderMenuItem(item, index) {
    return (
      <li key={index} className="menu__item">
        <NavLink to={item.to} activeClassName="active">
          <span className={`iconfont ${item.icon}`}></span>
          <span>{item.name}</span>
        </NavLink>
      </li>
    )
  }

  render() {
    return (
      <div className="menu">
        <ul>
          {this.props.data.map((item, index) => (this._renderMenuItem(item, index)))}
        </ul>
      </div>
    )
  }
}

// TODO React.PropTypes