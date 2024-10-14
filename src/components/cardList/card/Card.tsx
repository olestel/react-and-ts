import React, { useState } from 'react';
import './Card.css';

interface CardProps {
  title: string;
  author: string;
  createdAt: string;
}

const Card: React.FC<CardProps> = ({ title, author, createdAt }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <div className='card-status'>Status</div>
      <div className='card-info'>
        <div className='card-title'>
          <h3>{author}</h3>
          <div>{createdAt}</div>
        </div>
        <p className={`card-subject ${isExpanded ? 'expanded' : ''}`}>{title}</p>
        {isExpanded && (
          <div className="card-details">
            <div>
              <button>Buttons</button>
              <button>Show us your-</button>
            </div>
            <div>
              <button>btn</button>
              <button>btn</button>
              <button>btn</button>
            </div>
            <button>-FlexBox skills</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
