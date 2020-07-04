import React, { Component } from 'react'
import logo from '../../logo.png'
import {Link }from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">

  </a>
  <Link to='/' >
      <img src={logo} alt="Emprega Neves"/>
  </Link>

    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"> Candidato <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> Empresa </a>
      </li>

    </ul>
</nav>
    )
  }
}
