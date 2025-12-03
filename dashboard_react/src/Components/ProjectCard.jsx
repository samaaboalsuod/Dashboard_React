import React from 'react';
import './ProjectCard.css';
import Button from './Button';

const ProjectCard = ({
  title,
  description,
  date,
  tags = [],
  bgColor = '#f8f4ff',
  onContinue
}) => {
  return (
    <div className="project-card" style={{ backgroundColor: bgColor }}>
      
      <div className="project-card__title">
        <h2>{title}</h2>
      </div>

      <div className="project-card__description">
        <p>{description}</p>
      </div>

      <div className="project-card__date">
        <span>{date}</span>
      </div>

      <div className="project-card__tags">
        {tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>

      <div className="project-card__action">
        <Button BtnText="Continue" onClick={onContinue} />
      </div>

    </div>
  );
};

export default ProjectCard;

