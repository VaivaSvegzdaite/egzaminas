import React from 'react';
import img from '../../img/places.jpg';

const PlaceCardComponent = ({
                                id, title, logo, address, placeType
                            }) => {
    return (
        <div
            className="card col-12 col-s-12 col-md-6 col-lg-3 mx-3 my-3"
            style={{width: '18rem'}}
        >
            <img src={img} className="card-img-top" alt={logo}/>
            <div className="card-body">
                <h5 className="card-text">{title}</h5>
                <p className="card-title">{address}</p>
                <p className="card-text">{placeType}</p>
            </div>
        </div>
    );
};

export default PlaceCardComponent;
