import React from 'react';
import { Link } from 'react-router-dom';
import img from '../img/foto.jpg';

const AdminListComponent = ({ id, deleteProduct, ...otherProps }) => {
  return (
    <tbody>
      <tr>
        <th scope="row">{id}</th>
        <td>
          <img
            src={img}
            className="card-img-top"
            style={{ width: 50, height: 50 }}
            alt={otherProps.text}
          />
        </td>
        <td>{otherProps.text}</td>
        <td>{otherProps.mp3File}</td>
        <td>{otherProps.nameg}</td>
        <td>{otherProps.date}</td>
        <td>{otherProps.greetingType}</td>
        <td></td>
        <Link
          className="text-decoration-none mr-3"
          to={`/admin/greetings/${id}`}
        >
          {' '}
          Edit{' '}
        </Link>
        <button
          className="btn text-danger"
          data-toggle="modal"
          data-target="#myModal"
          onClick={deleteProduct}
          id={id}
        >
          Delete
        </button>
      </tr>
    </tbody>
  );
};

export default AdminListComponent;
