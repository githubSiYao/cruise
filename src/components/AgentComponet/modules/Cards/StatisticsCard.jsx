import React from 'react'
import './cards.scss'

export default class StatisticsCard extends React.Component {
  render() {
    return (
      <div className="card overview">
        <div className="overview-item">
          <span>All</span>
          <span>{this.props.physicalNum + this.props.virtualNum}</span>
        </div>
        <div className="overview-item">
          <span>PHYSICAL</span>
          <span>{this.props.physicalNum}</span>
        </div>
        <div className="overview-item">
          <span>VIRTUAL</span>
          <span>{this.props.virtualNum}</span>
        </div>
      </div>
    )
  }
}

// TODO React.PropTypes