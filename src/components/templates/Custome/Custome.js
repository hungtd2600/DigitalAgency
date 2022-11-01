import React from "react";
import Arrow1 from "../../../assets/images/Arrow 1.png"
import customeImg from '../../../assets/images/custome-image.png'
import classNames from "classnames/bind";
import styles from "./Custome.module.scss";
const cx = classNames.bind(styles);
const Custome = () => {
  return (
    <section className={cx("custome")}>
      <div className={cx("container")}>
        <img
          src={Arrow1}
          alt=""
          className={cx("custome-arrow")}
        />
        <div className={cx("custome-container")}>
          <div className={cx("custome-content")}>
            <h1 className={cx("custome-heading")}>
              <strong>Custome &amp; Plugin Development</strong>
            </h1>
            <p className={cx("custome-desc")}>
              Commonly used in the graphic, print &amp; publishing industris for
              previewing visual layout and mockups
            </p>
            <img
              src={Arrow1}
              alt=""
              className={cx("custome-arrow__mobile")}
            />
          </div>
          <div className={cx("custome-image")}>
            <img src={customeImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Custome;
