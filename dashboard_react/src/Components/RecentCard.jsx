import React from "react";
import "./RecentCard.css";

import binFill from "../Assets/binFill.svg";
import prevFill from "../Assets/prevFill.svg";
import editFill from "../Assets/editFill.svg";

import IconImg from "./iconImg";

const RecentCard = ({
  image,
  title,
  category,
  time,

  slug,
  projectState,
  publishState,
  categoryColor
}) => {
  return (
    <div className="recentCardCont">

      <img className="recImg" src={image} alt="" />

      <div className="recentData">

        <h4>{title}</h4>

        {/* Category */}
        {category && (
          <h6
            className="categoryTag"
            style={{ backgroundColor: categoryColor }}
          >
            {category}
          </h6>
        )}

        {/* Slug */}
        {slug && <span className="slugText">{slug}</span>}

        {/* States */}
        {(projectState || publishState) && (
          <div className="stateRow">
            {projectState && (
              <span className="stateTag state-project">
                {projectState}
              </span>
            )}

            {publishState && (
              <span className={`stateTag state-${publishState.toLowerCase()}`}>
                {publishState}
              </span>
            )}
          </div>
        )}

        <p>{time}</p>

        <div className="iconRow">
          <IconImg src={binFill} />
          <IconImg src={prevFill} />
          <IconImg src={editFill} />
        </div>

      </div>
    </div>
  );
};

export default RecentCard;
