import React, { Component } from 'react';
import axios from 'axios';
import apiEndpoint from '../configure';
import CardComponent from '../components/CardComponent';

export default class ListComponent extends Component {
  constructor() {
    super();
    this.state = {
      greetings: [],
    };
  }

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

  render() {
    const { data } = this.state.greetings;
    if (data) {
      return (
        <div className="container-fluid mt-4">
          <div className="row d-flex justify-content-center">
            {data.map(({ id, ...otherProps }) => (
              <CardComponent key={id} id={id} {...otherProps} />
            ))}
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
