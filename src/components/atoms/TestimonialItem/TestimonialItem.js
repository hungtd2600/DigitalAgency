import React from "react";
import classNames from "classnames/bind";
import styles from "./TestimonialItem.module.scss";
const cx = classNames.bind(styles);

const TestimonialItem = (props) => {
  return (
    <div className={cx("testimonial-item")}>
      <div className={cx("testimonial-image")}>
        <img alt="" src={props.avatar} />
      </div>
      <h3 className={cx("testimonial-name")}>{props.name}</h3>
      <p className={cx("testimonial-details")}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        ullamcorper scelerisque mi, in malesuada felis malesuada vel.
      </p>
    </div>
  );
};

export default TestimonialItem;
