import React from "react";
import { supabase } from '../Supabase';
import "./RecentCard.css";

import IconImg from "./iconImg";

const RecentCard = ({ image, title, category, time, slug, projectState, publishState, categoryColor, icons = [], onDelete, onEdit}) => {
  
  const validColor = typeof categoryColor === 'object' 
    ? categoryColor.color || categoryColor.Hex 
    : categoryColor;

 return (
    <div className="recentCardCont" style={{ backgroundColor: validColor || "#ffffff" }}>
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
          {icons.map((src, i) => (
            <IconImg 
              key={i} 
              src={src} 
              onClick={() => {
                // FIXED LOGIC:
                if (i === 2) onEdit();  
                if (i === 0) onDelete();  
              }} 
              style={{ cursor: (i === 0 || i === 2) ? 'pointer' : 'default' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentCard;