import React from  'react'
import FrameComponent from '../../components/FrameComponent'
import AgentComponent from '../../components/AgentComponet'
import './index.scss'

export default class AgentContainer extends React.Component {
  render() {
    return (
      <FrameComponent>
        <AgentComponent />
      </FrameComponent>
    )
  }
}
