import React from "react";
import { supabase } from '../Supabase';
import "./RecentCard.css";

import IconImg from "./iconImg";

const RecentCard = ({ image, title, category, time, slug, projectState, publishState, categoryColor, icons = [], onDelete, onEdit}) => {
  
  // FIXED: Added check for .Hex which was causing your "Objects are not valid" error
  const validColor = typeof categoryColor === 'object' 
    ? categoryColor.Hex || categoryColor.color 
    : categoryColor;

 return (
    <div className="recentCardCont" style={{ backgroundColor: validColor || "#ffffff" }}>
      <img className="recImg" src={image} alt={title} />

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
              onClick={(e) => {
                // Prevents any parent click events from firing
                e.stopPropagation(); 

                // FIXED LOGIC: Only call if function exists to prevent "not a function" error
                if (i === 0 && typeof onDelete === 'function') onDelete();  
                if (i === 2 && typeof onEdit === 'function') onEdit();  
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