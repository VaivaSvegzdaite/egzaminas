import React from 'react';
import {Link} from 'react-router-dom';
import img from '../img/greeting.jpg';

const CardComponent = ({
                           id, text, imageUrl, mp3File, nameg, date, greetingType, places
                       }) => {
    return (
        <div
            className="card col-12 col-s-12 col-md-6 col-lg-3 mx-3 my-3"
            style={{width: '18rem'}}
        >
            <img src={img} className="card-img-top" alt={text}/>
            <div className="card-body">
                <h5 className="card-text">{text}</h5>
                <p className="card-title">{greetingType}</p>
                <p className="card-text">{nameg}</p>
                <p className="card-text">{date}</p>
                <Link to={`greetings/${id}`} className="btn btn-info">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default CardComponent;
