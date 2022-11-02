import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import logo from "../../../assets/images/logo.png";
import Menu from "../../molecules/Menu/Menu";
import MenuIc from "../../atoms/MenuIc/MenuIc";
const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("header")}>
      <div className={cx("container")}>
        <div className={cx("header-container")}>
          <img src={logo} alt="" className={cx("header-logo")} />
          <Menu />
          <MenuIc />
        </div>
      </div>
    </header>
  );
};

export default Header;
