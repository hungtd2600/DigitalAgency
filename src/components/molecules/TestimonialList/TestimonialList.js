import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./TestimonialList.module.scss";
import TestimonialItem from "../../atoms/TestimonialItem/TestimonialItem";
import { getDataUser } from "../../../services/user";
const cx = classNames.bind(styles);

const TestimonialList = () => {
  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    const Users = getDataUser();
    Users.then((res) => {
      setListUsers(res);
    });
  });

  return (
    <div className={cx("testimonial-list")}>
      {listUsers.map((e) => {
        return (
          <TestimonialItem
            key={e.id}
            name={e.name}
            avatar={e.srcImg}
            detail={e.detail}
          />
        );
      })}
    </div>
  );
};

export default TestimonialList;
