import React from 'react'
import './index.scss'

export default class Modal extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      top: 0,
      left: 0,
      value: ''
    }
  }

  componentDidMount() {
    document.addEventListener('click', this._handleModalVisible.bind(this))
    document.addEventListener('mousedown', this._handleClickOutside.bind(this))
  }

  _handleModalVisible = (event) => {
    if (this.wrapperRef && this.wrapperRef.contains(event.target)) {
      return;
    }
    const box = event.target.getBoundingClientRect();
    const top = box.top + box.height + 14;
    const left = box.left - box.width / 2 - 14 / 2;
    this.setState({
      value: '',
      top,
      left,
    });
  }

  _handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this._handleCancel();
    }
  }

  // Cancel button click event
  _handleCancel = () => {
    this.setState({value: ''}, () => {
      this.props.onClose()      
    })
  }

  // Add resource button click event 
  _handleSubmit = () => {
    this.props.onOk(this.state.value)
  }
  render() {
    const { top, left } = this.state;
    return (
      this.props.visible ? (
        <div className="modal" ref={node => this.wrapperRef = node} style={{ top, left }}>
          <p>Separate multiple resource name with commas</p>
          <input type="text" className="modal-input"
            placeholder="Input value"
            onChange={(event) => this.setState({ value: event.target.value })} />
          <div className="popup-button-group">
            <button className="add-resource-button" onClick={this._handleSubmit}>
              Add Resources
            </button>
            <button className="cancel-button" onClick={this._handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      ) : null
    )
  }
}