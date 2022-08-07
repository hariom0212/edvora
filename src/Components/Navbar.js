import React from 'react'
import nos from './images/har.ico'

export default function Navbar() {
  return (
    <nav className="navbar bg-black">
  <div className="container-fluid">
    <a className="navbar-brand text-light mx-5">Edvora</a>
    <a className="navbar-brand text-light mx-1" href="#">
        Hariom Shukla
      <img src={nos} alt="" width="35" height="35" className="d-inline-block align-text-top mx-2"/>
      
    </a>
  </div>
</nav>
  )
}
