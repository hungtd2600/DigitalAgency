import React from 'react'
import heroImg from '../../../assets/images/hero-image.png'
import Button from '../../atoms/Button/Button';
import classNames from "classnames/bind";
import styles from "./Hero.module.scss";
const cx = classNames.bind(styles);

const Hero = () => {
  return (
    <section className={cx("hero")}>
        <div className={cx("container")}>
          <div className={cx("hero-container")}>
            <div className={cx("hero-content")}>
              <h1 className={cx("hero-heading")}>
                <strong>
                  Building digital products, brands &amp; experience
                </strong>
              </h1>
              <p className={cx("hero-desc")}>
                Digital Agency is your online team mangement tool that easy
                and prompt
              </p>
              <Button/>
            </div>
            <div className={cx("hero-image")}>
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero