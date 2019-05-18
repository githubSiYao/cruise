import React from 'react'
import './index.scss'
import StatusCard from './modules/Cards/StatusCard'
import StatisticsCard from './modules/Cards/StatisticsCard'
import Navbar from './modules/Navbar'
import InputSearch from './modules/InputSearch'

export default class AgentComponent extends React.Component {

  tabList = ['All', 'Physical', 'Virtual']

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
      </React.Fragment>
    )
  }
}