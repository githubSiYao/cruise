import React from 'react'
import './index.scss'

export default class HistoryComponent extends React.Component {
  constructor(props) {
    super(props)

    this._renderHistoryItems = this._renderHistoryItems.bind(this)
  }

  // render sider history items
  _renderHistoryItems(item, index) {
    return (
      <li className="history__list-item" key={index}>
        <span className="item-dot"></span>
        <p title={item}>{item}</p>
      </li>
    )
  }

  render() {
    return (
      <div className="history">
        <h1>History</h1>
        <ul className="history__list">
          {this.props.data.map((item, index) => this._renderHistoryItems(item, index))}
        </ul>
      </div>
    )
  }
} 