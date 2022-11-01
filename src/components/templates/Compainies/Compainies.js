import React from 'react'
import logo1 from '../../../assets/images/Company logo1.png'
import logo2 from '../../../assets/images/Company logo2.png'
import logo3 from '../../../assets/images/Company logo3.png'
import logo4 from '../../../assets/images/Company logo4.png'
import classNames from "classnames/bind";
import styles from "./Compainies.module.scss";
const cx = classNames.bind(styles);

const Compainies = () => {
  return (
    <section className={cx("compainies")}>
        <div className={cx("container")}>
          <div className={cx("compainies-container")}>
            <p className={cx("compainies-truted")}>Trusted by 4,000+ companies</p>
            <div className={cx("compainies-intro")}>
              <img src={logo1} alt="" className={cx("compainies-logo")} />
              <img src={logo2} alt="" className={cx("compainies-logo")} />
              <img src={logo3} alt="" className={cx("compainies-logo")} />
              <img src={logo4} alt="" className={cx("compainies-logo")} />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Compainies