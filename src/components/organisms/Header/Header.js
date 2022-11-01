import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import logo from "../../../assets/images/logo.png";
import menu from "../../../assets/images/menu.png";
import Menu from "../../molecules/Menu/Menu";
const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("header")}>
      <div className={cx("container")}> 
        <div className={cx("header-container")}>
          <img src={logo} alt="" className={cx("header-logo")} />
          <Menu />
          <img src={menu} alt="" className={cx("header-menuic")} />
        </div>
      </div>
    </header>
  );
};

export default Header;
