import React from 'react';
import ReactStars from 'react-stars';

const defaultStartColor = '#ffc107';

interface RatingProps {
  rating: number;
  color?: string;
  reviewCount?: number;
}

const Rating: React.FC<RatingProps> = ({ rating, reviewCount }) => {
  return (
    <>
      <div className="rating d-flex align-items-center">
        <small className="p-1 text-warning">{rating.toFixed(1)}</small>
        <div className="p-1">
          <ReactStars
            value={rating}
            edit={false}
            color2={defaultStartColor}
          />
        </div>
        {(reviewCount! >= 0) && <small className="p1 text-muted">({reviewCount})</small>}
      </div>
    </>
  );
};

export default Rating;
