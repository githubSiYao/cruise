import React from 'react'

export default class StatusCard extends React.Component {
  render() {
    return (
      <div className={`card ${this.props.status === 'building' ? 'yellow' : 'green'}`}>
        <div
          className={`iconfont ${
            this.props.status === 'building' ? 'icon-cog animation-spinning' : 'icon-coffee'}`
          }>
        </div>
        <h1>{this.props.status}</h1>
        <p>{this.props.num}</p>
      </div>
    );
  }
}

// TODO React.PropTypes