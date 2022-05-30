import React from "react";

export default function Navbar() {
  return (
    <div>
      <aside className="menu">
        <ul className="optee_nav menu-list is-align-items-center">
          <li>
            <a href="/" data-tooltip="your time" className="has-tooltip-right">
              <i className="icon icon-doing"></i>
            </a>
          </li>

          <li>
            <a
              href="/dashboard"
              data-tooltip="your team"
              className="has-tooltip-right"
            >
              <i className="icon icon-send"></i>
            </a>
          </li>

          <li>
            <a
              href="/kanban"
              data-tooltip="kanban"
              className="has-tooltip-right"
            >
              <i className="icon icon-kanban"></i>
            </a>
          </li>

          <li>
            <a href="/table" data-tooltip="table" className="has-tooltip-right">
              <i className="icon icon-table"></i>
            </a>
          </li>

          <li>
            <a
              href="/calendar"
              data-tooltip="calendar"
              className="has-tooltip-right"
            >
              <i className="icon icon-table"></i>
            </a>
          </li>

          <li>
            <a
              href="/focusModal"
              data-tooltip="focus"
              className="has-tooltip-right"
            >
              <i className="icon icon-seconds"></i>
            </a>
          </li>

          <li>
            <a
              href="/settings"
              data-tooltip="settings"
              className="has-tooltip-right"
            >
              <i className="icon icon-settings"></i>
            </a>
          </li>

          <li>
            <a
              href="/forgotPass"
              data-tooltip="logout"
              className="has-tooltip-right"
            >
              <i className="icon icon-profile"></i>
            </a>
          </li>

          <li>
            <a
              href="/logout"
              data-tooltip="logout"
              className="has-tooltip-right"
            >
              <i className="icon icon-logout"></i>
            </a>
          </li>

          <li>
            <a href="/login" data-tooltip="login" className="has-tooltip-right">
              <i className="icon icon-login"></i>
            </a>
          </li>

          <li>
            <a href="/profile" data-tooltip="you" className="has-tooltip-right">
              <i className="icon icon-nerd"></i>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
