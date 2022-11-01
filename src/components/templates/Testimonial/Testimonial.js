import React from "react";
import TestimonialList from "../../molecules/TestimonialList/TestimonialList"
import classNames from "classnames/bind";
import styles from "./Testimonial.module.scss";
const cx = classNames.bind(styles);

const Testimonial = () => {
  return (
    <section className={cx("testimonial")}>
      <div className={cx("container")}>
        <div className={cx("testimonial-header")}>
          <p className={cx("text")}>TESTIMONIALS</p>
          <h2 className={cx("heading")}>Read What Other have to Say</h2>
        </div>
        <TestimonialList/>
      </div>
    </section>
  );
};

export default Testimonial;
