import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <div>
      <Link to={`/post/${item.post_id}`}>
        <img className='artImage' src={item.image_src}></img>
      </Link>
    </div>
  );
};

export default Card;
