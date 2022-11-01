import React from "react";
import classNames from "classnames/bind";
import styles from "./TestimonialList.module.scss";
import TestimonialItem from "../../atoms/TestimonialItem/TestimonialItem";
import avatar1 from "../../../assets/images/testimonial-image1.png";
import avatar2 from "../../../assets/images/testimonial-image2.png";
import avatar3 from "../../../assets/images/testimonial-image3.png";
const cx = classNames.bind(styles);

const TestimonialList = () => {
  return (
    <div className={cx("testimonial-list")}>
      <TestimonialItem name={"Andrew Rathore"} avatar={avatar1} />
      <TestimonialItem name={"Vera Duncan"} avatar={avatar2} />
      <TestimonialItem name={"Mark Smith"} avatar={avatar3} />
    </div>
  );
};

export default TestimonialList;
