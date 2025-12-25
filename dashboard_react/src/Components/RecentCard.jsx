import React from "react";
import { supabase } from '../Supabase';
import "./RecentCard.css";

import IconImg from "./iconImg";

const RecentCard = ({ image, title, category, time, slug, projectState, publishState, categoryColor, icons = [], onDelete, onEdit}) => {
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
  {icons.map((src, i) => (
    <IconImg 
      key={i} 
      src={src} 
      onClick={() => {
        if (i === 0) onDelete(); // First icon: Delete
        if (i === 2) onEdit();   // Third icon: Edit
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