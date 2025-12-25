import React from "react";
import "./TableCard.css";

/**
 * Props:
 * - title: string (left column)
 * - subtitle: string (second column)
 * - middleText: string (third column - e.g. message subject). If provided, shown instead of count.
 * - count: number | string (third column; optional; shown only when middleText is undefined)
 * - date: string (fourth column)
 * - status: string (shows status badge in actions column; optional)
 * - variant: "grey" | "transparent" (row background)
 * - icons: array of src strings for small icons (actions)
 * - onDelete: function to trigger delete
 * - onEdit: function to trigger edit navigation
 */
const TableCard = ({
  title,
  subtitle,
  middleText,
  count,
  date,
  status,
  variant = "transparent",
  icons = [],
  onDelete,
  onEdit, // Added onEdit prop
}) => {
  return (
    <div className={`tableCard ${variant}`}>
      {/* 1: Title */}
      <div className="col titleCol">
        <h3 className="titleText">{title}</h3>
      </div>

      {/* 2: Subtitle / description / email */}
      <div className="col subtitleCol">
        <p className="subtitleText">{subtitle}</p>
      </div>

      {/* 3: Middle column - either middleText (message subject) or countBadge */}
      <div className="col middleCol">
        {middleText ? (
          <p className="middleText">{middleText}</p>
        ) : (
          count !== undefined && <span className="countBadge">{count}</span>
        )}
      </div>

      {/* 4: Date */}
      <div className="col dateCol">
        <span className="dateText">{date}</span>
      </div>

      {/* 5: Status + Icons */}
      <div className="col actionsCol">
        {status && <span className={`statusBadge ${status.toLowerCase()}`}>{status}</span>}
        
        <div className="iconsWrap">
          {icons.map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt={`icon-${i}`} 
              className="actionIcon"
              onClick={() => {
                // Logic based on the order of icons in Categories.jsx: [Edit, Preview, Delete]
                if (i === 0) onEdit && onEdit();   // Trigger Edit for index 0
                if (i === 2) onDelete && onDelete(); // Trigger Delete for index 2
              }} 
              // Set pointer only for clickable icons
              style={{ cursor: (i === 0 || i === 2) ? 'pointer' : 'default' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableCard;