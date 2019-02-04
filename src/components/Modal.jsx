import React, { Component } from 'react';
import '../scss/modal.scss'

export default class Modal extends Component {
  state = {
    height: ''
  }

  componentDidMount = () => {
    this.setHeight()
  }

  componentDidUpdate = (prevProps, prevState) => {
    let element = document.querySelector('#modalVideo') || document.querySelector('#modalImage')
    if (window.innerWidth > 1300) {
      if (this.state.height !== element.clientHeight + 25) {
        this.setHeight()
      }
    }
    else if (window.innerWidth <= 1300 && this.state.height !== '') {
      this.setState({ height: '' })
    }
  }

  setHeight = () => {
    let height
    if (window.innerWidth > 1300) {

      if (document.querySelector('#modalVideo')) {
        height = document.querySelector('#modalVideo').clientHeight + 25
      } else {
        height = document.querySelector('#modalImage').clientHeight + 25
      }

    }
    this.setState({
      height
    })
  }



  render() {
    const { project: { title, text, videoLarge, imgMedium, imgLarge }, scale } = this.props
    const { height } = this.state;

    const width = window.innerWidth;
    const img = width > 1300 ? imgLarge : imgMedium
    return (
      <section id="modal" style={{ transform: `scale(${scale.scale})`, height }} >
        <figure >
          {
            videoLarge
              ? <video id="modalVideo" src={videoLarge} poster={imgMedium} autoPlay loop />
              : <img id="modalImage" src={img} alt={title} />
          }
        </figure>
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="links">asdfasdf</div>
        </div>
      </section>
    )
  }
}
