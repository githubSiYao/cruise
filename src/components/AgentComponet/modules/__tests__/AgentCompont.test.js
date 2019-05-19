import React from 'react'
import AgentComponent from '../../index.jsx'
import { shallow, mount } from 'enzyme'

const setup = () => {
  const props = {
    data: [
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
        "os": "cent_os",
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
  }

  const wrapper = shallow(<AgentComponent {...props} />)

  return { props, wrapper }
}

describe('<AgentComponent />', () => {
  const { wrapper } = setup();
  it('Test AgentComponent should be render', () => {
    expect(wrapper.find('div.agent__overview').exists())
  })

  it('Missed Props data:[]', () => {
    try {
      let errorWrapper = shallow(<AgentComponent />)
      expect(errorWrapper.find('div.agent__items').length).toBe(0)
    } catch (error) {
      // if we don't use Unit Test,our component will be show this error.
      expect(error.toString()).toEqual('TypeError: Cannot read property \'map\' of undefined')
    }
  })
})

describe('<Modal />',  () => {
  it('Agent Items should be correctly render', () => {
    const { props } = setup()
    const wrapper = mount(<AgentComponent {...props}/>)
    expect(wrapper.find('.agent-item').length > 0 ).toBe(true)
  })

  it('Add resouce modal could be render', () => {
    const { props } = setup()
    const wrapper = mount(<AgentComponent {...props}/>)
    expect(wrapper.find('div.modal input').length).toBe(0)
    wrapper.find('button.add-button').first().simulate('click')
    expect(wrapper.find('div.modal input').length).toBe(1)
  })
})