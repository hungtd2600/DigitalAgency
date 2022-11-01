import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

const Button = () => {
  return (
    <button className={cx("button", "button--primary", "button--rounded")}>
      Contact Us
    </button>
  );
};

export default Button;
