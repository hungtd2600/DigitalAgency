import React from 'react'
import menu from "../../../assets/images/menu.png";
import classNames from "classnames/bind";
import styles from "./MenuIc.module.scss";
const cx = classNames.bind(styles);

const MenuIc = () => {
  return (
    <img src={menu} alt="" className={cx("header-menuic")} />
  )
}

export default MenuIc