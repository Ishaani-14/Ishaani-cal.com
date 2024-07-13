import React from "react";
import classes from "../../styles/services-item.module.css";

const ServicesItem = ({ title, icon }) => {
  return (
    <div className={`${classes.service__item}`}
      onClick={() =>
        window.open(
          `https://www.youtube.com/@piyushgargdev/videos`,
          "_blank"
        )
      }
    >
      <span>
        <i className={icon}></i>
      </span>

      <h5>{title}</h5>
    </div>
  );
};

export default ServicesItem;
