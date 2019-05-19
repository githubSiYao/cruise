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
      data: [], // agents list
      visible: false, // add resource modal
      addAgendId: -1, // add resouuce id
    }

    this._triggerModalOpen = this._triggerModalOpen.bind(this)
    this._triggerModalSubmit = this._triggerModalSubmit.bind(this)
    this._triggerResourceDelete = this._triggerResourceDelete.bind(this)
  }

  componentDidMount() {
    this.setState({
      data: this.props.data
    })
  }

  // Trigger add resource modal open
  _triggerModalOpen(id) {
    this.setState({ visible: true, addAgendId: id })
  }

  // add resource modal submit
  _triggerModalSubmit(value) {
    // TODO HTTP Request Here,Mock API
    const resources = value.split(',').map(item => item.trim()).filter(item => item !== '');

    const list = this.state.data.map(item => {
      if (item.id === this.state.addAgendId) {
        // TODO Check Input is repeat
        item.resources = item.resources.concat(resources)
      }
      return item
    })
    this.setState({ visible: false, data: list })
  }

  // resouce remove
  _triggerResourceDelete(id, index) {
    const list = this.state.data.map(item => {
      if (item.id === id) {
        item.resource = item.resources.splice(index, 1).concat([])
      }
      return item;
    })
    this.setState({ data: list })
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
        {this.state.data && this.state.data.length > 0 ? (<div className="agent__items">
          {this.state.data.map(item => (
            <ListItem agent={item} key={item.id}
              onOpenModal={id => this._triggerModalOpen(id)}
              onRemoveResource={(id, index) => this._triggerResourceDelete(id, index)}
            />
          ))}
        </div>) : null}

        <Modal visible={this.state.visible}
          onClose={() => this.setState({ visible: false })}
          onOk={(value) => this._triggerModalSubmit(value)}
        ></Modal>
      </React.Fragment>
    )
  }
}