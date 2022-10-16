import axios from "axios";
import React from "react";
import { useEffect } from "react";
import "./GeneralInfo.css";

export default function GeneralInfo({ title, subtitle, image, tags = [] }) {
  return (
    <div className="container">
      <img src={image} alt={title + " image"} className="image" />
      <h3 className={title}>{title}</h3>
      <div className="subtitle">{subtitle}</div>
      <div className="tags">
        {tags.map((item) => {
          return <div className="tag">{item} </div>;
        })}
      </div>
    </div>
  );
}
