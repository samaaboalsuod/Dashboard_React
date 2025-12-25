import React from "react";
import { supabase } from '../Supabase';
import "./RecentCard.css";
import binFill from "../Assets/binFill.svg";
import prevFill from "../Assets/prevFill.svg";
import editFill from "../Assets/editFill.svg";
import IconImg from "./iconImg";

const RecentCard = ({ image, title, category, time, slug, projectState, publishState, categoryColor, icons = [], onDelete}) => {
 return (
    <div className="recentCardCont" style={{ backgroundColor: categoryColor }}>
      <img className="recImg" src={image} alt="" />

      <div className="recentData">
        <h4>{title}</h4>
        {category && <h6 className="categoryTag">{category}</h6>}
        {slug && <span className="slugText">{slug}</span>}

        {(projectState || publishState) && (
          <div className="stateRow">
            {projectState && <span className="stateTag state-project">{projectState}</span>}
            {publishState && (
              <span className={`stateTag state-${publishState.toLowerCase()}`}>
                {publishState}
              </span>
            )}
          </div>
        )}

        <p>{time}</p>

        <div className="iconRow">
          {/* Map through icons and assign onDelete to the bin icon (index 0 or 2 depending on your array) */}
          {icons.map((src, i) => (
           <IconImg 
      key={i} 
      src={src} 
      // i === 0 because getIcon("deleteIcon") is the first item in the icons array
      onClick={i === 0 ? onDelete : undefined} 
      style={{ cursor: i === 0 ? 'pointer' : 'default' }}
    />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentCard;