import React from "react";
import "./GeneralInfo.css";
import store from "../../Redux/store";

export default function GeneralInfo() {
  const { title, subtitle, image, tags = [] } = store.getState();
  return (
    <div className="container">
      <img src={image} alt={title + " image"} className="image" />
      <h3 className={title}>{title}</h3>
      <div className="subtitle">{subtitle}</div>
      <div className="tags">
        {tags.map((item, index) => {
          return (
            <div className="tag" key={`tag-${index}`}>
              {item}{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}
