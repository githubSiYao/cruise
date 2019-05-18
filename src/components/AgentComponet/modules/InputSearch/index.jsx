import React from 'react'
import './index.scss'

export default class InputSearch extends React.Component {

  constructor(props) {
    super(props)

    this._handleInputChange = this._handleInputChange.bind(this)
  }

  _handleInputChange(event) {
    // const value = event.target.value;

    // TODO
    // HTTP Request API. If we want to lift performance,wo can use loadsh._.debounse or use setTimeout() 
  }

  render() {
    return (
      <div className="input-search">
        <span className="iconfont icon-search"></span>
        <input type="text" onChange={(event) => this.handleChange(event)}></input>
      </div>
    )
  }
}