import React from 'react';
import img from '../../img/no-invent.png';

const InventoriusCardComponent = ({
                                id, pavadinimas, svoris, sektorius, regData
                            }) => {
    return (
        <div
            className="card col-12 col-s-12 col-md-6 col-lg-3 mx-3 my-3 bg-light"
            style={{width: '5rem'}}
        >
            <img src={img}   style={{width: 150, height: 150}} className="card-img-top" alt={img}/>
            <div className="card-body bg-light">
                <h5 className="card-text bg-light">{pavadinimas}</h5>
                <p className="card-title bg-light">Svoris: {svoris}</p>
                <p className="card-title bg-light">Sektorius: {sektorius}</p>
                <p className="card-text bg-light">Prekės registravimo data: {regData}</p>
            </div>
        </div>
    );
};

export default InventoriusCardComponent;
