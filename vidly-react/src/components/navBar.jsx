import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = { collapsed: true };

  toggleMenu = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }));
  };

  hideMenu = () => {
    if (this.state.collapsed === false) {
      this.setState(prevState => ({
        collapsed: !prevState.collapsed
      }));
    }
  };

  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link
          className="navbar-brand"
          to="/"
          onClick={this.state.collapsed === false ? this.hideMenu : null}
        >
          Vidly
        </Link>
        <button
          className={
            this.state.collapsed === true
              ? "navbar-toggler collapsed"
              : "navbar-toggler"
          }
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={this.state.collapsed}
          aria-label="Toggle navigation"
          onClick={this.toggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={
            this.state.collapsed === true
              ? "navbar-collapse collapse"
              : "navbar-collapse collapse show"
          }
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              className="nav-item nav-link"
              to="/movies"
              onClick={this.hideMenu}
            >
              Movies
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to="/customers"
              onClick={this.hideMenu}
            >
              Customers
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to="/rentals"
              onClick={this.hideMenu}
            >
              Rentals
            </NavLink>
            {!user && (
              <React.Fragment>
                <NavLink
                  className="nav-item nav-link"
                  to="/login"
                  onClick={this.hideMenu}
                >
                  Login
                </NavLink>
                <NavLink
                  className="nav-item nav-link"
                  to="/register"
                  onClick={this.hideMenu}
                >
                  Register
                </NavLink>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <NavLink
                  className="nav-item nav-link"
                  to="/profile"
                  onClick={this.hideMenu}
                >
                  {user.name}
                </NavLink>
                <NavLink
                  className="nav-item nav-link"
                  to="/logout"
                  onClick={this.hideMenu}
                >
                  Logout
                </NavLink>
              </React.Fragment>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
