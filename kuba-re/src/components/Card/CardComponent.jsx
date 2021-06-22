import React from 'react';
import {Link} from 'react-router-dom';
import img from '../../img/no-img.png';

const CardComponent = ({
                           id, vardas, pavarde, dob, tel, tipas, inventorius
                       }) => {
    return (
        <div
            className="card col-12 col-s-12 col-md-6 col-lg-3 mx-3 my-3 bg-light border-primary"
            style={{width: '18rem'}}
        >
            <img src={img} style={{width: '150px'}}className="card-img-top bg-light pt-3" alt={vardas}/>
            <div className="card-body bg-light">
                <h5 className="card-text bg-light">{vardas}{' '}{pavarde}</h5>
                <p className="card-text bg-light">Kliento tipas: {tipas}</p>
                <p className="card-text bg-light">Registruotas inventorius: {inventorius} vnt.</p>
                <Link to={`klientai/${id}`} className="btn btn-primary">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default CardComponent;
