import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand">
          From Hehe with love
        </a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a>Trang Chủ</a>
          </li>
          <li className="active">
            <a>Danh mục sản phẩm</a>
          </li>
        </ul>
      </nav>
    );
  }
}

// function Header() {
//   return (
//     <div>
//       <h1>HEADER component</h1>
//     </div>
//   );
// }

export default Header;
