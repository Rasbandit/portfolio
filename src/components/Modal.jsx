import React, { Component } from 'react';
import '../scss/modal.scss'

export default class Modal extends Component {
  render() {
    return (
      <div id="modal-overlay">
        <section id="modal">
          <figure>

            <img src="https://www.planwallpaper.com/static/images/8ccb4ec4225b290726ae9be975220ff4.jpg" />
          </figure>
        </section>
      </div>
    )
  }
}
