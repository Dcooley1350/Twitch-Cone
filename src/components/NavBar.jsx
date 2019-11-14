import React from 'react';
import '../css/nav.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div className="nav-content">
        <ul id="nav-mobile" className="tabs tabs-transparent left hide-on-med-and-down">
          <li className="tab"><Link class="active" to="/">Discover</Link> </li>
          <li className="tab"><Link to="/Browse">Browse</Link></li>
          <li className="tab"><a>Try Prime</a></li>
          <li className="tab"><a><strong>...</strong></a></li>
          <li>
            <form>
              <div class="input-field">
                <input id="search" type="search" required></input>
                <label class="label-icon" for="search"></label>
              </div>
            </form>
            <button id="LogIn">Log in</button>
            <button id="SignUp">SignUp</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;