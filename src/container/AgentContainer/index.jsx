import React from 'react'
import FrameComponent from '../../components/FrameComponent'
import AgentComponent from '../../components/AgentComponet'
import './index.scss'

export default class AgentContainer extends React.Component {
  render() {
    const mockData = [
      {
        "name": "bjstdmngbdr01.thoughtworks.com",
        "os": "windows",
        "status": "idle",
        "type": "physical",
        "ip": "192.168.1.102",
        "location": "/var/lib/cruise-agent",
        "resources": [
          "Safari",
          "Firefox",
          "Ubuntu",
          "Chrome"  
        ],
        "id": 1
      },
      {
        "name": "bjstdmngbdr08.thoughtworks.com",
        "os": "windows",
        "status": "building",
        "type": "virtual",
        "ip": "192.168.1.80",
        "location": "/var/lib/cruise-agent",
        "resources": [
          "Firefox",
          "Safari",
          "Ubuntu",
          "Chrome"
        ],
        "id": 2
      },
      {
        "name": "bjstdmngbdr10.thoughtworks.com",
        "os": "ubuntu",
        "status": "building",
        "type": "physical",
        "ip": "192.168.1.117",
        "location": "/var/lib/cruise-agent",
        "resources": [
          "Firefox",
          "Safari",
          "Ubuntu",
          "Chrome"
        ],
        "id": 3
      },
      {
        "name": "bjstdmngbdr11.thoughtworks.com",
        "os": "debin",
        "status": "building",
        "type": "virtual",
        "ip": "192.168.1.102",
        "location": "/var/lib/cruise-agent",
        "resources": [
          "Firefox",
          "Safari",
          "Ubuntu",
          "Chrome"
        ],
        "id": 4
      },
      {
        "name": "bjstdmngbdr15.thoughtworks.com",
        "os": "suse",
        "status": "idle",
        "type": "physical",
        "ip": "192.168.1.110",
        "location": "/var/lib/cruise-agent",
        "resources": [
          "Test",
          "Hello",
          "World",
          "Awesome"
        ],
        "id": 5
      },
      {
        "name": "bjstdmngbdr01.thoughtworks.com",
        "os": "centos",
        "status": "idle",
        "type": "virtual",
        "ip": "192.168.1.103",
        "location": "/var/lib/cruise-agent",
        "resources": [
          "Firefox",
          "Safari",
          "Ubuntu",
          "Chrome"
        ],
        "id": 6
      }
    ]
    return (
      <FrameComponent>
        <AgentComponent data={mockData}/>
      </FrameComponent>
    )
  }
}
