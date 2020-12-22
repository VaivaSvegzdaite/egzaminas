import React, { Component } from 'react';
import axios from 'axios';
import apiEndpoint from '../configure';
import { Link } from 'react-router-dom';
import img from '../img/foto.jpg';

export default class DetailsPage extends Component {
  state = {
    greeting: null,
  };

  componentDidMount() {
    axios
      .get(`${apiEndpoint}/api/greetings/${this.props.match.params.id}`)
      .then((res) => this.setState({ greeting: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.greeting !== null) {
      return (
        <div className="container-fluid mt-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt={this.text} />
            <div className="card-body" key={this.id}>
              <p>Lorem ipsum </p>
              <Link to={`/`} className="btn btn-primary mx-4">
                Back
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
