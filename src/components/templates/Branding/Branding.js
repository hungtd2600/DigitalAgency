import React from "react";
import Arrow1 from "../../../assets/images/Arrow 1.png";
import BrandingImage from "../../../assets/images/branding-image.png";
import classNames from "classnames/bind";
import styles from "./Branding.module.scss";
const cx = classNames.bind(styles);

const Branding = () => {
  return (
    <section className={cx("branding")}>
      <div className={cx("container")}>
        <div className={cx("branding-container")}>
          <div className={cx("branding-image")}>
            <img src={BrandingImage} alt="" />
          </div>
          <div className={cx("branding-content")}>
            <h1 className={cx("branding-heading")}>
              <strong> Branding &amp; Design system </strong>
            </h1>
            <p className={cx("branding-desc")}>
              Commonly used in the graphic, print &amp; publishing industris for
              previewing visual layout and mockups
            </p>
            <img src={Arrow1} alt="" className={cx("branding-arrow")} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;
