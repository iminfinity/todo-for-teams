import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  isActive = (url) => {
    const path = window.location.pathname;
    if (url === path) {
      return " active";
    } else {
      return "";
    }
  };
  render() {
    return (
      <div className="header">
        <Link className="nav" to="/">
          ToDo For Teams
        </Link>
      </div>
    );
  }
}

export default withRouter(Header);
