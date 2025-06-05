import React from 'react';
import './Card.css';

const Card = ({ imageUrl, altText }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={altText || 'Card Image'} className="card-image" />
    </div>
  );
};

export default Card;