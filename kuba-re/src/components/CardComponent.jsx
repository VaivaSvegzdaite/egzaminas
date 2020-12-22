import React from 'react';
import { Link } from 'react-router-dom';
import img from '../img/foto.jpg';

const CardComponent = ({
  id,
  text,
  imageUrl,
  mp3File,
  nameg,
  date,
  greetingType,
}) => {
  return (
    <div
      class="card col-12 col-s-12 col-md-6 col-lg-3 mx-3 my-3"
      style={{ width: '18rem' }}
    >
      <img src={img} class="card-img-top" alt={text} />
      <div class="card-body">
        <h5 class="card-title">{greetingType}</h5>
        <p class="card-text">{text}</p>
        <p class="card-text">{mp3File}</p>
        <p class="card-text">{nameg}</p>
        <p class="card-text">{date}</p>
        <Link to={`greetings/${id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
};

export default CardComponent;
