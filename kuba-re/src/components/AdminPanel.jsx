import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiEndpoint from '../configure';
import AdministrationListComponent from './AdminListComponent';
import DeleteModal from './DeleteModal';

export default class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greetings: [],
      modalVisibility: false,
    };
  }

  handleModalVisibility = () => this.setState({ modalVisibility: true });

  componentDidMount() {
    axios
      .get(`${apiEndpoint}/api/greetings`)
      .then((prod) => {
        this.setState({ greetings: prod });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteProduct = (e) => {
    axios.delete(`${apiEndpoint}/api/greetings/${e.target.id}`).then(() => {
      axios.get(`${apiEndpoint}/api/greetings`).then((prod) => {
        this.setState({ greetings: prod });
      });
    });
  };

  render() {
    const { data } = this.state.greetings;
    if (data) {
      return (
        <div className="container mt-5">
          <Link to={`/admin/greetings/new`} className="btn btn-primary mb-5">
            Add new
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Text</th>
                <th scope="col">mp3File</th>
                <th scope="col">Name</th>
                <th scope="col">Data</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            {data.map(({ id, ...otherProps }) => (
              <AdministrationListComponent
                key={id}
                id={id}
                {...otherProps}
                deleteProduct={this.deleteProduct}
              />
            ))}
            <DeleteModal
              visibility={this.state.modalVisibility}
              handleModal={this.handleModalVisibility}
            />
          </table>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
