import React from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <ul className={cx("menu")}>
        <li className={cx("menu-item")}>
          <a href="o#" className={cx("menu-link")}>
            menu
          </a>
        </li>
        <li className={cx("menu-item")}>
          <a href="o#" className={cx("menu-link")}>
            about
          </a>
        </li>
        <li className={cx("menu-item")}>
          <a href="o#" className={cx("menu-link")}>
            testimonials
          </a>
        </li>
        <li className={cx("menu-item")}>
          <a href="o#" className={cx("menu-link")}>
            contact
          </a>
        </li>
      </ul>
    );
  }
}

export default Menu;
