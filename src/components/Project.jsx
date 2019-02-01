import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import Modal from './Modal';

export default class WebDevProject extends Component {
  state = {
    hover: false
  }

  render() {
    let { thumb, title, style, x, y, width } = this.props
    const { hover } = this.state
    let newStyle = { ...style }
    if (newStyle.transform) {
      if (newStyle.transform.includes('translate3d')) {

      } else {
        newStyle.transform = `${newStyle.transform} translate3d(${x}px, ${y}px, 0)`
      }
    }
    else {
      newStyle.transform = `translate3d(${x}px, ${y}px, 0)`
    }
    return (
      <div style={{ ...newStyle, width, height: width / 1.4883 }} className="web-project" onMouseEnter={() => this.setState({ hover: true })} onMouseLeave={() => this.setState({ hover: false })}>
        <div className={hover ? 'thumb-overlay hover' : 'thumb-overlay'} >
          <FontAwesome name="search-plus" style={{ color: '#e0e0e0' }} />
          <div className="thumb-blue"></div>
        </div>
        <figure>
          <img src={thumb} alt={title} />
        </figure>
      </div>
    )
  }
}