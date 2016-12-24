import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a type="button" className="navbar-toggle collapsed">
              </a>
              <a className="navbar-brand" href="#/">
                <span>
                <img role="presentation" id="birdLogo" src="http://icons.iconarchive.com/icons/martin-berube/flat-animal/256/bird-icon.png" />
                <h3 id="chirp">Derp!</h3>
                </span>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                  <li><a href="">current_user</a></li>
                  <li><a href="">Signout</a></li>
                  <li><a href="">Log In</a></li>
                  <li><a href="">Register</a></li>
                </ul>
            </div>
          </div>
      </div>
    </div>
  )
  }
}

export default Nav;
