import React from 'react'

import './header.css'

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="https://google.com">Star Wars DB</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="https://google.com">People</a>
        </li>
        <li>
          <a href="https://google.com">Planets</a>
        </li>
        <li>
          <a href="https://google.com">Starships</a>
        </li>
      </ul>
      <button className="btn btn-primary btn-small" onClick={onServiceChange}>
        Change Services
      </button>
    </div>
  )
}

export default Header
