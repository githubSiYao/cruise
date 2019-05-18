import React from 'react'
import './index.scss'
import StatusCard from './modules/Cards/StatusCard'
import StatisticsCard from './modules/Cards/StatisticsCard'
import Navbar from './modules/Navbar'
import InputSearch from './modules/InputSearch'
import ListItem from './modules/ListItem'
import Modal from './modules/Modal'

export default class AgentComponent extends React.Component {

  constructor(props) {
    super(props)

    this.tabList = ['All', 'Physical', 'Virtual']

    this.state = {
      visible: false
    }

    this._triggerModalOpen = this._triggerModalOpen.bind(this)
    this._triggerModalSubmit = this._triggerModalSubmit.bind(this)
  }

  // Trigger add resource modal open
  _triggerModalOpen(id) {
    this.setState({ visible: true })
  }

  // add resource modal submit
  _triggerModalSubmit(value) {
    // TODO HTTP Request 
    console.log(value)
    this.setState({visible: false})
  }

  render() {
    return (
      <React.Fragment>
        {/* Agent Overview */}
        <div className="agent__overview">
          <StatusCard status="building" num={3} />
          <StatusCard status="idle" num={5} />
          <StatisticsCard physicalNum={4} virtualNum={4} />
        </div>

        {/* Agent Navbar */}
        <div className="agent__navbar">
          <Navbar tabList={this.tabList} />
          <InputSearch />
          <div className="iconfont icon-type icon-th-card"></div>
          <div className="iconfont icon-type icon-th-list active"></div>
        </div>

        {/* Agent Item */}
        <div className="agent__items">
          {this.props.data.map(item => (
            <ListItem agent={item} key={item.id} onOpenModal={id => this._triggerModalOpen(id)} />
          ))}
        </div>

        <Modal visible={this.state.visible}
          onClose={() => this.setState({ visible: false })}
          onOk={(value) => this._triggerModalSubmit(value)}
        ></Modal>
      </React.Fragment>
    )
  }
}