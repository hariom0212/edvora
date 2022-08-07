import React from 'react'
import nuu from './images/nuu.ico'


export default function Navbars() {
  return (
    <div>
      <div>
      <nav  className="navbar navbar-expand-lg bg-dimgray mx-5">
  <div  className="container-fluid">
    <a  className="navbar-brand text-light mx-0" href="./">Nearest rides</a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
        <li  className="nav-item">
          <a  className="nav-link active text-light" aria-current="page" href="./upcomingrides">Upcoming rides</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link text-light" href="#">Past rides</a>
        </li>
      </ul>
      
      <div class="dropdown">
  <a class="btn btn-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  <a class="navbar-brand" href="#">
      <img src= {nuu} alt="" width="40" height="30"/>
    </a>
    Filters
  </a>

  <ul class="dropdown-menu bg-black">
    <li><a class="dropdown-item" href="#">
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    State
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
      </a></li>
    <li><a class="dropdown-item" href="#">
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    City
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
      </a></li>
  </ul>
</div>
    </div>
  </div>
</nav>
    </div>
    </div>
  )
}
