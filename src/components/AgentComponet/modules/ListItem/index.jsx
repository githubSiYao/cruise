import React from 'react'
import './index.scss'

export default class ListItem extends React.Component {

  _handleOpenModal = (id) => {
    this.props.onOpenModal(id)
  }

  render() {
    const { os, name, status, ip, location, id, resources } = this.props.agent
    return (
      <div className="agent-item">
        <div className="agent-icon">
          <img
            width="100%" height="100%" alt={os}
            src={`${process.env.PUBLIC_URL}/assets/os icons/${os}.png`}
          />
        </div>
        <div className="agent-detail">
          <div className="agent-info">
            <div className="info-with-icon">
              <span className="iconfont icon-desktop"></span>
              <span className="name" title={name}>{name}</span>
            </div>
            <div className={`info-label ${status === 'building' ? 'yellow' : 'green'}`}>
              {status}
            </div>
            <div className="info-with-icon">
              <span className="iconfont icon-info"></span>
              <span>{ip}</span>
            </div>
            <div className="info-with-icon">
              <span className="iconfont icon-folder"></span>
              <span className="location" title={location}>{location}</span>
            </div>
          </div>
          <div className="agent-operation">
            <div className="button-group">
              <button className="add-button" onClick={() => this._handleOpenModal(id)}>
                <span className="iconfont icon-plus"></span>
              </button>
              {
                resources.map((item, index) => (
                  <button className="resource-button" key={index}
                    onClick={() => this.removeResource(id, index)}>
                    <span>{item}</span>
                    <span className="iconfont icon-trash"></span>
                  </button>
                ))
              }
            </div>
            {status === 'building' ?
              <button className="deny-button">
                <span className="iconfont icon-deny"></span>
                <span>Deny</span>
              </button> : null
            }
          </div>
        </div>
      </div>
    )
  }
}