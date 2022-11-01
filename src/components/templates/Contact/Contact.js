import React from 'react'
import contactImg from '../../../assets/images/contact-image.png'
import Button from '../../atoms/Button/Button';
import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
const cx = classNames.bind(styles);
const Contact = () => {
  return (
    <section className={cx("contact")}>
        <div className={cx("container")}>
          <div className={cx("contact-container")}>
            <div className={cx("contact-image")}>
              <img src={contactImg} alt="" />
            </div>
            <div className={cx("contact-content")}>
              <h1 className={cx("contact-heading")}>
                <strong>
                  Be a part of the next big thing
                </strong>
              </h1>
              <p className={cx("contact-desc")}>
                We work with Brans, Startups, to SMEs. Colaborate for more impact and growt
              </p>
              <Button/>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact