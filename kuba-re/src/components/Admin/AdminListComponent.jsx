import React from 'react';
import {Link} from 'react-router-dom';
import img from '../../img/greeting.jpg';


const AdminListComponent = ({id, deleteGreeting, ...otherProps}) => {
    return (
        <tbody>
        <tr>
            <th scope="row">{id}</th>
            <td>
                <img
                    // src={{imageUrl: otherProps.img}}
                    src={img}
                    className="card-img-top"
                    style={{width: 50, height: 50}}
                    alt={otherProps.text}
                />
            </td>
            <td>{otherProps.text}</td>
            <td>{otherProps.nameg}</td>
            <td>{otherProps.date}</td>
            <td>{otherProps.greetingType}</td>
            <td></td>
            <td>
                <Link
                    className="btn btn-secondary btn-sm mr-2"
                    to={`/admin/greetings/${id}`}
                >
                    {' '}
                    Edit{' '}
                </Link>
                <button
                    className="btn btn-danger btn-sm"
                    data-toggle="modal"
                    data-target="#myModal"
                    onClick={deleteGreeting}
                    id={id}
                >
                    Delete
                </button>
            </td>
        </tr>
        </tbody>
    );
};

export default AdminListComponent;
