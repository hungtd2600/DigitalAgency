import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx("footer")}>
      <div className={cx("container")}>
        <div className={cx("footer-container")}>
          <div className={cx("footer-row1")}>
            <div className={cx("footer-column")}>
              <h3 className={cx("footer-heading")}>Digital Agency</h3>
              <ul className={cx("footer-links")}>
                <li className={cx("footer-item")}>
                  <a href="o#" className={cx("footer-link")}>
                    Building digital products, brands &amp; experience
                  </a>
                </li>
              </ul>
            </div>
            <div className={cx("footer-column")}>
              <h3 className={cx("footer-heading")}>Resources</h3>
              <ul className={cx("footer-links")}>
                <li className={cx("footer-item")}>
                  <a href="o#" className={cx("footer-link")}>
                    Guides
                  </a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="o#" className={cx("footer-link")}>
                    Blog
                  </a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="o#" className={cx("footer-link")}>
                    Cuistomer Stories
                  </a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="o#" className={cx("footer-link")}>
                    Glossery
                  </a>
                </li>
              </ul>
            </div>
            <div className={cx("footer-column")}>
              <h3 className={cx("footer-heading")}>Company</h3>
              <ul className={cx("footer-links")}>
                <li className={cx("footer-item")}>
                  <a href="o#" className={cx("footer-link")}>
                    About Us
                  </a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="o#" className={cx("footer-link")}>
                    Carrers
                  </a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="o#" className={cx("footer-link")}>
                    Partners
                  </a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="o#" className={cx("footer-link")}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className={cx("footer-column")}>
              <h3 className={cx("footer-heading")}>Social Media</h3>
              <ul className={cx("footer-links")}>
                <li className={cx("footer-item")}>
                  <a href="o#" className={cx("footer-link")}>
                    Linkedln
                  </a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="o#" className={cx("footer-link")}>
                    Facebook
                  </a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="o#" className={cx("footer-link")}>
                    Instagram
                  </a>
                </li>
                <li className={cx("footer-item")}>
                  <a href="o#" className={cx("footer-link")}>
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx("footer-row2")}>
            <span className={cx("footer-matheus")}>
              © Matheus. Todos os direitos reservados
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
