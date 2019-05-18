import React from 'react'
import './index.scss'

export default class NavbarComponent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      active: 0
    }

    this._handleClickTab = this._handleClickTab.bind(this)
  }

  _handleClickTab(index) {
    this.setState({active: index})
    // this.props.onTabChange()
  }

  render() {
    const { tabList } = this.props;
    // TODO Check tableList error case
    return (
      <div className="navtab">
        {tabList.map((item, index) => (
          <div
            key={index}
            className={`navtab__item ${this.state.active === index ? 'active' : ''}`}
            onClick={() => this._handleClickTab(index)}>
            <span className="navtab__item-label">{item}</span>
          </div>
        ))}
      </div>
    )
  }
}

// TODO React.PropTyps