import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">brand</div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">header</a>
            <div className="navbar-item has-dropdown is-hoverable">
              <article></article>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <button
                className="button is-rounded is-primary"
                onclick="event()"
              >
                Add task
              </button>
            </div>
            <div className="navbar-item">
              <button className="button is-rounded" onclick="event()">
                Add problem
              </button>
            </div>
            <div className="divider is-vertical"></div>
            <div className="navbar-item">
              <i className="icon icon-public"></i>
            </div>
            <div className="navbar-item">
              <nav></nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
