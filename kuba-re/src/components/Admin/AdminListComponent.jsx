import React from 'react';
import {Link} from 'react-router-dom';
import img from '../../img/no-img.png';


const AdminListComponent = ({id, deleteKlientas, ...otherProps}) => {
    return (
        <tbody>
        <tr>
            <th scope="row">{id}</th>
            <td>
                <img
                    src={img}
                    className="card-img-top"
                    style={{width: 50, height: 50}}
                    alt={otherProps.vardas}
                />
            </td>
            <td>{otherProps.vardas}</td>
            <td>{otherProps.pavarde}</td>
            <td>{otherProps.tel}</td>
            <td>{otherProps.tipas}</td>
            <td></td>
            <td>
                <Link
                    className="btn btn-primary btn-sm mr-2"
                    to={`/klientai/${id}`}
                >
                    {' '}
                    Daugiau{' '}
                </Link>
                <Link
                    className="btn btn-secondary btn-sm mr-2"
                    to={`/klientai/admin/${id}`}
                >
                    {' '}
                    Redaguoti{' '}
                </Link>
                <button
                    className="btn btn-danger btn-sm"
                    data-toggle="modal"
                    data-target="#myModal"
                    onClick={deleteKlientas}
                    id={id}
                >
                    Ištrinti
                </button>
            </td>
        </tr>
        </tbody>
    );
};

export default AdminListComponent;
